// External modules.
import React from 'react';
import { Helmet } from 'react-helmet';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import { ClubTeaserList } from './../components/components/club-teaser-list/club-teaser-list';
import {
  SearchFilter,
  ToggleFilter
} from '../components/components/filter/filter';
import Map from './../components/components/map/map';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import { Search, PlusSquare } from 'react-feather';
import ShadowBox from './../components/components/shadow-box/shadow-box';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import './../components/pages-styles/find-club.scss';

// TODO: Remove and fid title another way.
class Clubs extends React.PureComponent {
  /*
   Handle the value of th search and the toggle button from state.
   */
  constructor() {
    /*
    state fields:
      // TODO: make it enum
      view (string): how to show the list of clubs. values (list, map).
      searchString (string): the string to filter the clubs.
      shownClubsCount (int): The number of the clubs that is fetched and shown.
      shownclubs (array): the list of the club objects.
      cursor (string): The id of the last fetched club.
      firstLoad (boolean): A flag to indicate the first render of the component.
      hasNextPage (boolean): A flaf to store the apollo hasNextPage.
    */
    super();
    this.state = {
      view: 'list',
      searchString: null,
      shownClubsCount: 0,
      shownClubs: [],
      cursor: null,
      firstLoad: true,
      hasNextPage: false,
      number: 5
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  // State management functions. Used by children components.
  handleToggleMap = () => {
    const snapshot = { ...this.state };
    this.setState({
      view: snapshot.view === 'map' ? 'list' : 'map',
      number: snapshot.view === 'map' ? 5 : 100,
      shownClubs: [],
      firstLoad: true,
      hasNextPage: false,
      cursor: null
    });
  };

  handleSearch = event => {
    this.setState({
      searchString: event.target.value,
      firstLoad: true,
      shownClubs: [],
      cursor: null,
      hasNextPage: false
    });
  };

  // the definition of the query.
  GET_CLUBS = gql`
    query GetClubs($number: Int!, $cursor: ID, $search: String) {
      clubs(first: $number, after: $cursor, search: $search) {
        clubs {
          id
          email
          name
          imageUrl
          description
          codeOfConduct
          sortDescription
          users {
            id
          }
          events {
            id
            title
            startDate
            endDate
            location {
              id
              address
              lat
              lng
            }
            imageUrl
            description
            sortDescription
          }
          githubUrl
          clubUrl
          location {
            id
            lat
            lng
          }
        }

        pageInfo {
          totalCount
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  `;

  // function
  // Updates the state when new data  is fetched.
  onClubsFetched = data => {
    const snapshot = { ...this.state };
    const shownClubs = [...snapshot.shownClubs, ...data.clubs.clubs];

    this.setState(() => ({
      shownClubs: shownClubs,
      cursor: data.clubs.pageInfo.endCursor,
      firstLoad: false,
      hasNextPage: data.clubs.pageInfo.hasNextPage
    }));
  };

  // function
  // loads the first data.
  onFirstLoad = () => {
    const snapshot = { ...this.state };
    let content;

    if (snapshot.firstLoad) {
      content = (
        <Query
          query={this.GET_CLUBS}
          variables={{
            number: snapshot.number,
            cursor: snapshot.cursor,
            search: snapshot.searchString === '' ? null : snapshot.searchString
          }}
          onCompleted={data => {
            this.onClubsFetched(data);
          }}
        >
          {({ loading, error }) => {
            if (loading) {
              return (
                <div className="text text--large text--load-more">
                  Loading....
                </div>
              );
            }
            if (error) {
              return <div> `Error ${error.message}` </div>;
            } else {
              // JSX elements
              // create the DOM for the component.
              return null;
            }
          }}
        </Query>
      );
    }

    return content;
  };

  render() {
    const snapshot = { ...this.state };
    const clubs = snapshot.shownClubs;

    // Decide which view to show.
    const content =
      snapshot.view === 'map' ? (
        <Map clubs={clubs} />
      ) : (
        <ClubTeaserList clubs={clubs} />
      );

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>
        <LayoutContained>
          <div className="find-club__header">
            <h1> Clubs </h1>
            <div className="find-club__filters-wrapper">
              <ShadowBox className="find-club__filters-wrapper-inner">
                <div className="find-club__filter-toggle">
                  <ToggleFilter
                    onClick={this.handleToggleMap}
                    active={snapshot.view === 'map'}
                    left="List view"
                    right="Map View"
                  />
                </div>
                <div className="find-club__filter-search">
                  <SearchFilter
                    placeholder="Filter"
                    label="Filter clubs"
                    onChange={this.handleSearch}
                    id="find-club-search"
                    hideLabel
                    icon={Search}
                  />
                </div>
              </ShadowBox>
            </div>
          </div>
          {content}

          {this.onFirstLoad()}

          <ApolloConsumer>
            {client => (
              <div className="find-club__button-wrapper">
                <button
                  className="button button--reset button--icon"
                  onClick={async () => {
                    const { data } = await client.query({
                      query: this.GET_CLUBS,
                      variables: {
                        number: snapshot.number,
                        cursor: snapshot.cursor,
                        search:
                          snapshot.searchString === ''
                            ? null
                            : snapshot.searchString
                      }
                    });
                    this.onClubsFetched(data);
                  }}
                  hidden={!snapshot.hasNextPage}
                >
                  <PlusSquare size={16} />
                  Load more
                </button>
              </div>
            )}
          </ApolloConsumer>
        </LayoutContained>
      </BasicLayout>
    );
  }
}

export default Clubs;
