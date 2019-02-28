import React from "react";
import { ApolloConsumer, Query } from "react-apollo";
import { PlusSquare, Search } from "react-feather";
import { Helmet } from "react-helmet";
import GatsbyConfig from "../../../gatsby-config";
import { ClubTeaserList } from "../../components/components/club-teaser-list/club-teaser-list";
import {
  SearchFilter,
  ToggleFilter
} from "../../components/components/filter/filter";
import Map from "../../components/components/map/map";
import ShadowBox from "../../components/components/shadow-box/shadow-box";
import BasicLayout from "../../components/layouts/layout-base/layout-base";
import LayoutContained from "../../components/layouts/layout-contained/layout-contained";
import "../../components/pages-styles/find-club.scss";
import { GET_CLUBS } from "./queries";

class Clubs extends React.PureComponent {
  state = {
    cursor: null,
    firstLoad: true,
    hasNextPage: false,
    listClubNumber: 6,
    number: 6,
    searchString: null,
    shownClubs: [],
    shownClubsCount: 0,
    view: "list"
  };

  timer = 0;

  handleToggleMap = () => {
    this.setState(state => ({
      cursor: null,
      firstLoad: true,
      hasNextPage: false,
      number:
        state.view === "map"
          ? state.listClubNumber <= 100
            ? state.listClubNumber
            : 100
          : 100,
      shownClubs: [],
      view: state.view === "map" ? "list" : "map"
    }));
  };

  handleSearch = event => {
    const target = event.target;
    const value = target.value;

    clearInterval(this.timer);

    this.timer = setTimeout(() => {
      this.setState({
        cursor: null,
        firstLoad: true,
        hasNextPage: false,
        number: this.state.view === "map" ? 100 : 12,
        searchString: value,
        shownClubs: []
      });
    }, 300);
  };

  onClubsFetched = data => {
    const snapshot = { ...this.state };
    const shownClubs = [...snapshot.shownClubs, ...data.clubs.clubs];

    this.setState(() => ({
      cursor: data.clubs.pageInfo.endCursor,
      firstLoad: snapshot.view === "map" && data.clubs.pageInfo.hasNextPage,
      hasNextPage: data.clubs.pageInfo.hasNextPage,
      listClubNumber:
        snapshot.view === "list" ? shownClubs.length : snapshot.listClubNumber,
      shownClubs: shownClubs
    }));
  };

  clubQuery = () => {
    return this.state.firstLoad ? (
      <Query
        query={GET_CLUBS}
        variables={{
          cursor: this.state.cursor,
          number: this.state.number,
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
      cursor,
      hasNextPage,
      number,
      searchString,
      shownClubs,
      view
    } = this.state;

    const content =
      view === "map" ? (
        <Map clubs={shownClubs} />
      ) : (
        <ClubTeaserList clubs={shownClubs} />
      );

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {["Clubs", "|", GatsbyConfig.siteMetadata.title].join(" ")}
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
                      query: GET_CLUBS,
                      variables: {
                        cursor: cursor,
                        number: number,
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
