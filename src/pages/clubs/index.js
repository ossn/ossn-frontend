import "./../../components/pages-styles/find-club.scss";

import gql from "graphql-tag";
import React from "react";
import { ApolloConsumer, Query } from "react-apollo";
import { PlusSquare, Search } from "react-feather";
import { Helmet } from "react-helmet";

import {
  SearchFilter,
  ToggleFilter
} from "./../../components/components/filter/filter";
import BasicLayout from "./../../components/layouts/layout-base/layout-base";
import GatsbyConfig from "./../../../gatsby-config";
import { ClubTeaserList } from "./../../components/components/club-teaser-list/club-teaser-list";
import Map from "./../../components/components/map/map";
import ShadowBox from "./../../components/components/shadow-box/shadow-box";
import LayoutContained from "./../../components/layouts/layout-contained/layout-contained";

/**
 * Club listing page.
 * Has two views, one list and one map.
 * Has search and load more functionality.
 */

class Clubs extends React.PureComponent {
  /**
   * Handle the value of th search and the toggle button from state.
   */
  constructor(props) {
    /**
     * state fields:
     * {String} view: how to show the list of clubs. values (list, map).
     * {String} searchString: the string to filter the clubs.
     * {Int} shownClubsCount: The number of the clubs that is fetched and shown.
     * {Array} shownClubs: the list of the club objects.
     * {String} cursor: The id of the last fetched club.
     * {boolean} firstLoad: A flag to indicate the first render of the component.
     * {boolean} hasNextPage: A flaf to store the apollo hasNextPage.
     */
    super(props);

    this.state = {
      view: "list",
      searchString: null,
      shownClubsCount: 0,
      shownClubs: [],
      cursor: null,
      firstLoad: true,
      hasNextPage: false,
      number: 12,
      listClubNumber: 12
    };

    this.timer = 0;
  }

  /**
   * State management functions. Used by children components.
   */
  /**
   * Toggles page view and updates club state.
   */
  handleToggleMap = () => {
    this.setState(state => ({
      view: state.view === "map" ? "list" : "map",
      number:
        state.view === "map"
          ? state.listClubNumber <= 100
            ? state.listClubNumber
            : 100
          : 100,
      shownClubs: [],
      firstLoad: true,
      hasNextPage: false,
      cursor: null
    }));
  };

  /**
   * Handles search and updates club state.
   */
  handleSearch = event => {
    const target = event.target;
    const value = target.value;

    clearInterval(this.timer);

    this.timer = setTimeout(() => {
      this.setState({
        searchString: value,
        firstLoad: true,
        shownClubs: [],
        cursor: null,
        hasNextPage: false,
        number: this.state.view === "map" ? 100 : 12
      });
    }, 300);
  };

  /**
   * The definition of the club query.
   */
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
        }
      }
    }
  `;

  /**
   * Updates the state when new data is fetched.
   */
  onClubsFetched = data => {
    const snapshot = { ...this.state };
    const shownClubs = [...snapshot.shownClubs, ...data.clubs.clubs];
    this.setState(() => ({
      shownClubs: shownClubs,
      cursor: data.clubs.pageInfo.endCursor,
      firstLoad: snapshot.view === "map" && data.clubs.pageInfo.hasNextPage,
      hasNextPage: data.clubs.pageInfo.hasNextPage,
      listClubNumber:
        snapshot.view === "list" ? shownClubs.length : snapshot.listClubNumber
    }));
  };

  /**
   * Loads data after first load.
   */
  clubQuery = () => {
    return this.state.firstLoad ? (
      <Query
        query={this.GET_CLUBS}
        variables={{
          number: this.state.number,
          cursor: this.state.cursor,
          search:
            this.state.searchString === "" ? null : this.state.searchString
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
            return null;
          }
        }}
      </Query>
    ) : (
      ""
    );
  };

  render() {
    const {
      shownClubs,
      view,
      number,
      cursor,
      searchString,
      hasNextPage
    } = this.state;

    /**
     * Decide which view to show.
     */
    const content =
      view === "map" ? (
        <Map clubs={shownClubs} />
      ) : (
        <ClubTeaserList clubs={shownClubs} />
      );

    return (
      <BasicLayout location={this.props.location}>
        <Helmet>
          <title>{`Clubs | ${GatsbyConfig.siteMetadata.title}`}</title>
        </Helmet>
        <LayoutContained>
          <div className="find-club__header">
            <h1> Clubs </h1>
            <div className="find-club__filters-wrapper">
              <ShadowBox className="find-club__filters-wrapper-inner">
                <div className="find-club__filter-toggle">
                  <ToggleFilter
                    onClick={this.handleToggleMap}
                    active={view === "map"}
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
            <div className="find-club__register">
              <div className="button button--header">
                <a
                  href="https://community.us12.list-manage.com/subscribe?u=6bca92e1ba0eb8733fd7cc5bf&id=107bf7d6b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register your club
                </a>
              </div>
            </div>
          </div>
          {content}

          {this.clubQuery()}

          <ApolloConsumer>
            {client => (
              <div className="find-club__button-wrapper">
                <button
                  className="button button--reset button--icon"
                  onClick={async () => {
                    const { data } = await client.query({
                      query: this.GET_CLUBS,
                      variables: {
                        number: number,
                        cursor: cursor,
                        search: searchString === "" ? null : searchString
                      }
                    });
                    this.onClubsFetched(data);
                  }}
                  hidden={!hasNextPage}
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
