// External modules.
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"


// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import MemberTeaser from './../components/components/member-teaser/member-teaser';
import Layout2Col from './../components/layouts/layout-2col/layout-2col';
import Layout2ColsUnequal from './../components/layouts/layout-2col-unequal/layout-2col-unequal';
import BoxShadow from './../components/components/shadow-box/shadow-box';
import {ToggleFilter, SearchFilter} from './../components/components/filters/filters';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'grid',
      'searchString': ''
    }
  }

  changeView = (view) => {
    const snapshot = {...this.state};
    this.setState({view: snapshot.view === 'grid' ? 'list' : 'grid'});
  };

  changeSearch = (event) => {
    this.setState({searchString: event.target.value});
  };

  render() {
    const snapshot = {...this.state};
    let members = this.props.data.allMembersJson.edges.slice();

    const memberList = members.map((member, i)=>{
      return  (
        <div key={i} >
          <MemberTeaser member={member.node}  id={i} />
        </div>)
    });

    return (
      <BasicLayout>
        <Helmet>
          <title>{['Members', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>

        <Layout2ColsUnequal secondNarrow>
          <div>
            <h1> Members </h1>
            <p>
              Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut diam choro, propriae lucilius efficiendi an nam, suas facer qualisque no nec. An fugit soluta per. Ad mei debitis electram, officiis intellegat usu ei, ius eu zril intellegam consequuntur. Sumo delectus te nam, eam placerat salutandi no, nibh aperiam no ius. Id volumus sententiae interesset quo, natum scriptorem accommodare nam id, semper blandit ius ea.
            </p>
            <p>
              Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut diam choro, propriae lucilius efficiendi an nam, suas facer qualisque no nec. An fugit soluta per. Ad mei debitis electram, officiis intellegat usu ei, ius eu zril intellegam consequuntur. Sumo delectus te nam, eam placerat salutandi no, nibh aperiam no ius. Id volumus sententiae interesset quo, natum scriptorem accommodare nam id, semper blandit ius ea.
            </p>


            <div>
              <BoxShadow >
                <ToggleFilter left="Grid view" right="List view" active={snapshot.view === 'grid'} onClick={this.changeView}/>
                <SearchFilter />
              </BoxShadow>

              <Layout2Col>
                {memberList}
              </Layout2Col>
            </div>
          </div>
          <div>
            <img src="#" alt="guys with a laptop pretending to be busy" />
            <br />
            <img src="#" alt="join the network" />
          </div>
        </Layout2ColsUnequal>


      </BasicLayout>
    );
  }
}

// const GET_MEMBERS = gql`
//   {
//     user {
//       id
//       userName
//       email
//       firstName
//       lastName
//       imageUrl
//       receiveNewsletter
//       description
//       sortDescription
//       githubUrl
//       personalUrl
//     }
//   }
// `;

export default Members;

export const query = graphql`
  query IndexQuery {
    allMembersJson {
      edges {
        node {
          name
          isLeader
          image
          username
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
