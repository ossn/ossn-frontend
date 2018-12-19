/*
 This page shows the list of the student members.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MediaQuery from 'react-responsive';
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import Layout2ColUnequalWith3Elements from './../components/layouts/layout-2col-unequal-with-3-elements/layout-2col-unequal-with-3-elements';
import ShadowBox from './../components/components/shadow-box/shadow-box';
import Shape from './../components/components/shape/shape';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { PlusSquare } from 'react-feather';

import '../components/pages-styles/members.scss';

import { SearchFilter } from '../components/components/filter/filter';
import JoinCta from './../components/components/join-cta/join-cta';
import MemberList from './../components/components/member-list/member-list';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Members extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      shownMembersCount: 0,
      shownMembers: [],
      cursor: null,
      firstLoad: true,
      hasPreviousPage: false,
      totalCount: 0
    };
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value,
      firstLoad: true,
      shownMembers: [],
      cursor: null,
      shownMembersCount: 0,
      hasPreviousPage: false,
      totalCount: 0
    });
  };

  render() {
    const snapshot = { ...this.state };

    const GET_MEMBERS = gql`
      query GetMembers($number: Int!, $cursor: ID, $search: String) {
        users(last: $number, after: $cursor, search: $search) {
          users {
            id
            userName
            firstName
            lastName
            imageUrl
            receiveNewsletter
            description
            githubUrl
            personalUrl
            email
            clubs {
              name
              role
            }
          }

          pageInfo {
            totalCount
            endCursor
            hasPreviousPage
            startCursor
          }
        }
      }
    `;

    // Updates the number of members that are being shown. Triggers re-render.
    // params:
    //  onMembersFetched (data): The data returned from the query.
    const onMembersFetched = data => {
      const shownMembers = snapshot.shownMembers.concat(data.users.users);
      this.setState(() => ({
        shownMembersCount: shownMembers.length,
        shownMembers: shownMembers,
        cursor: data.users.pageInfo.endCursor,
        firstLoad: false,
        hasPreviousPage: data.users.pageInfo.hasPreviousPage,
        totalCount: data.users.pageInfo.totalCount
      }));
    };

    // Fetches default results on first load.
    const onFirstLoad = () => {
      let content;
      if (snapshot.firstLoad) {
        content = (
          <Query
            query={GET_MEMBERS}
            variables={{
              number: 3,
              cursor: snapshot.cursor,
              search: snapshot.search
            }}
            onCompleted={data => {
              onMembersFetched(data);
            }}
          >
            {({ loading, error }) => {
              if (loading)
                return (
                  <div className="text text--large text--load-more">
                    Loading....
                  </div>
                );
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
        return content;
      }
    };

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Members', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <LayoutContained>
          <h1> Members </h1>
          <Layout2ColUnequalWith3Elements horizontalGutters verticalGutters>
            <div className="members__intro">
              <p>
                Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut diam
                choro, propriae lucilius efficiendi an nam, suas facer qualisque
                no nec. An fugit soluta per. Ad mei debitis electram, officiis
                intellegat usu ei, ius eu zril intellegam consequuntur. Sumo
                delectus te nam, eam placerat salutandi no, nibh aperiam no ius.
                Id volumus sententiae interesset quo, natum scriptorem
                accommodare nam id, semper blandit ius ea.
              </p>
              <p>
                Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut diam
                choro, propriae lucilius efficiendi an nam, suas facer qualisque
                no nec. An fugit soluta per. Ad mei debitis electram, officiis
                intellegat usu ei, ius eu zril intellegam consequuntur. Sumo
                delectus te nam, eam placerat salutandi no, nibh aperiam no ius.
                Id volumus §sententiae interesset quo, natum scriptorem
                accommodare nam id, semper blandit ius ea.
              </p>
            </div>
            <div>
              <MediaQuery minWidth={992}>
                <div className="members__image">
                  <Img
                    fluid={
                      this.props.data.imageMembersTop.childImageSharp.fluid
                    }
                  />
                  <Shape sunnyYellow triangle2 className="members__triangle" />
                </div>
              </MediaQuery>

              <div>
                <JoinCta imageJoinCta={this.props.data.imageJoinCta} />
              </div>
            </div>
            <div className="members__content">
              <Shape
                seafoamBlue
                waveLarge
                divider
                className="members__divider"
              />

              <div>
                <ShadowBox zeroPadding className="members__filters-section">
                  <h2 className="title title--x-small title--centered members__list-title">
                    Showing {snapshot.shownMembersCount} out of{' '}
                    {snapshot.totalCount} members
                  </h2>
                  <div className="members__filter-list">
                    <div className="members__filter members__filter--search">
                      <SearchFilter
                        id="members-search"
                        label="Search members"
                        onChange={this.handleSearch}
                      />
                    </div>
                  </div>
                </ShadowBox>
                {onFirstLoad()}
                <MemberList members={snapshot.shownMembers} />

                <ApolloConsumer>
                  {client => (
                    <div className="members__button-wrapper">
                      <button
                        className="button button--reset button--icon"
                        onClick={async () => {
                          const { data } = await client.query({
                            query: GET_MEMBERS,
                            variables: {
                              number: 5,
                              cursor: snapshot.cursor,
                              search: snapshot.search
                            }
                          });
                          onMembersFetched(data);
                        }}
                        hidden={!snapshot.hasPreviousPage}
                      >
                        <PlusSquare size={16} />
                        Load more
                      </button>
                    </div>
                  )}
                </ApolloConsumer>
              </div>
            </div>
          </Layout2ColUnequalWith3Elements>
        </LayoutContained>
      </BasicLayout>
    );
  }
}

export default Members;

export const query = graphql`
  {
    imageMembersTop: file(relativePath: { eq: "members-top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 728) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    imageJoinCta: file(relativePath: { eq: "join-cta/join-the-network.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 728) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
