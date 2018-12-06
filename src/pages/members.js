/*
  This page shows the list of the student members.
*/

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MediaQuery from 'react-responsive';
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import MemberTeaser from './../components/components/member-teaser/member-teaser';
import Layout2ColUnequalWith3Elements from './../components/layouts/layout-2col-unequal-with-3-elements/layout-2col-unequal-with-3-elements';
import ShadowBox from './../components/components/shadow-box/shadow-box';
import Shape from './../components/components/shape/shape';
import '../components/pages-styles/members.scss';

import {
  SearchFilter,
  SelectFilter
} from '../components/components/filter/filter';
import JoinCta from './../components/components/join-cta/join-cta';
import MemberList from './../components/components/member-list/member-list';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Members extends React.PureComponent {
  constructor(props) {
    super(props);

    const options = [
      { value: 'default', label: 'Sort by' },
      { value: 'name', label: 'name' },
      { value: 'club', label: 'club' }
    ];

    this.state = {
      searchString: '',
      sortOptions: options,
      currentSortOption: options[0]
    };
  }

  changeSorting = event => {
    const selected = event.target.value;
    this.setState({ currentSortOption: selected });
  };

  render() {
    const snapshot = { ...this.state };
    let members = this.props.data.ossnApi.users.users.slice();
    let totalCount = this.props.data.ossnApi.users.pageInfo.totalCount;

    const memberList = members.map((member, i) => {
      return (
        <div key={i}>
          <MemberTeaser member={member} id={i} />
        </div>
      );
    });

    // This query is executed at run time by Apollo.
    const GET_MEMBERS = gql`
      {
        users(first: 2) {
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

    return (
      <BasicLayout>
        <Query query={GET_MEMBERS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading....';
            if (error) return <div> `Error ${error.message}` </div>;
            // data.user = {
            //   ...data.user,
            //   username: data.user.userName
            // };
            //
            return (
              <div>
                {/*<MemberTeaser member={data.user} />*/}
                DOne
              </div>
            );
          }}
        </Query>

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
            <div>
              <Shape
                seafoamBlue
                waveLarge
                divider
                className="members__divider"
              />

              <div>
                <ShadowBox zeroPadding className="members__filters-section">
                  <h2 className="title title--x-small title--centered members__list-title">
                    Showing {memberList.length} out of {totalCount} members
                  </h2>
                  <div className="members__filter-list">
                    <div className="members__filter members__filter--search">
                      <SearchFilter
                        id="members-search"
                        label="Search members"
                      />
                    </div>
                    <div className="members__filter members__filter--select">
                      <SelectFilter
                        options={snapshot.sortOptions}
                        value={snapshot.currentSortOption}
                        onBlur={this.changeSorting}
                      />
                    </div>
                  </div>
                </ShadowBox>

                <MemberList members={members} />
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
    ossnApi {
      users(first: 1) {
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
          }
        }

        pageInfo {
          totalCount
          endCursor
          hasNextPage
        }
      }
    }

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

// REVIEW:
// code for graphQL query
// import { Query } from 'react-apollo';
//import gql from 'graphql-tag';
/*
 <Query query={GET_MEMBERS}>
 {({ loading, error, data })=>{
 if (loading) return 'Loading....';
 if (error) return <div> `Error ${error.message}` </div> ;
 data.user = {
 ...data.user,
 username: data.user.userName
 };

 return (
 <div>
 <MemberTeaser member={data.user} />
 </div>
 );
 }}
 </Query>
 */
