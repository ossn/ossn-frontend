import React, { useState } from "react";
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

const initialState = {
  cursor: null,
  firstLoad: true,
  hasNextPage: false,
  listClubNumber: 6,
  number: 6,
  searchString: null,
  shownClubs: [],
  view: "list"
};

function Clubs() {
  const [state, setState] = useState(initialState);

  let timer = 0;

  const content =
    state.view === "map" ? (
      <Map clubs={state.shownClubs} />
    ) : (
      <ClubTeaserList clubs={state.shownClubs} />
    );

  const handleSearch = event => {
    const target = event.target;
    const value = target.value;

    clearInterval(timer);

    timer = setTimeout(() => {
      setState({
        ...state,
        cursor: null,
        firstLoad: true,
        hasNextPage: false,
        number: state.view === "map" ? 100 : 12,
        searchString: value,
        shownClubs: []
      });
    }, 300);
  };

  const handleToggleMap = () => {
    setState({
      ...state,
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
    });
  };

  const onClubsFetched = data => {
    const snapshot = { ...state };
    const shownClubs = [...snapshot.shownClubs, ...data.clubs.clubs];

    setState({
      ...state,
      cursor: data.clubs.pageInfo.endCursor,
      firstLoad: snapshot.view === "map" && data.clubs.pageInfo.hasNextPage,
      hasNextPage: data.clubs.pageInfo.hasNextPage,
      listClubNumber:
        snapshot.view === "list" ? shownClubs.length : snapshot.listClubNumber,
      shownClubs: shownClubs
    });
  };

  const fetchClubs = () =>
    state.firstLoad && (
      <Query
        query={GET_CLUBS}
        variables={{
          cursor: state.cursor,
          number: state.number,
          search: state.searchString === "" ? null : state.searchString
        }}
        onCompleted={data => {
          onClubsFetched(data);
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
                  onClick={handleToggleMap}
                  active={state.view === "map"}
                  left="List view"
                  right="Map View"
                />
              </div>
              <div className="find-club__filter-search">
                <SearchFilter
                  placeholder="Filter"
                  label="Filter clubs"
                  onChange={handleSearch}
                  id="find-club-search"
                  hideLabel
                  icon={Search}
                />
              </div>
            </ShadowBox>
          </div>
        </div>

        {content}

        {fetchClubs()}

        <ApolloConsumer>
          {client => (
            <div className="find-club__button-wrapper">
              <button
                className="button button--reset button--icon"
                onClick={async () => {
                  const { data } = await client.query({
                    query: GET_CLUBS,
                    variables: {
                      cursor: state.cursor,
                      number: state.number,
                      search:
                        state.searchString === "" ? null : state.searchString
                    }
                  });
                  onClubsFetched(data);
                }}
                hidden={!state.hasNextPage}
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

export default Clubs;
