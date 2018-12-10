/*
  List of member-teaser elements
  Prints a list of Members at a two column layout.
  props: members (array of MemberTeaser), the members to be shown

This file uses relay style pagination with apollo client.
More info here:
https://www.apollographql.com/docs/react/features/pagination.html#relay-cursors
*/

import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout2Col from './../../layouts/layout-2col/layout-2col';
import MemberTeaser from './../member-teaser/member-teaser';

export default class MemberList extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfMembers: 0
    };
  }

  // function.
  // hides the loadmore button by adding a css class.
  hideButton = () => {};

  // function.
  // Updates the parent component for the new number of members.
  // params:
  //   numberOfMembers (int): the number of members that are shown here.
  updateUserCount = numberOfMembers => {
    if (this.props.onMembersChange) {
      this.props.onMembersChange(numberOfMembers);
    }
  };

  render() {
    // const members = this.getMembers();

    const GET_MEMBERS = gql`
      query GetMembers($number: Int!, $cursor: ID) {
        users(first: $number, after: $cursor) {
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
            startCursor
          }
        }
      }
    `;

    return (
      <Query query={GET_MEMBERS} variables={{ number: 1, cursor: null }}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return 'Loading....';
          if (error) {
            // do nothing :)
            // who cares?
            // console.error(`Error ${error.message}`); unexpected console stat
          } else {
            // let pageInfo = data.users.pageInfo;

            let addedMembers = data.users.users;

            let addedMembersList = addedMembers.map((member, i) => {
              return (
                <div key={i}>
                  <MemberTeaser member={member} id={i} />
                </div>
              );
            });

            // function.
            // Create the logic for the load more button.
            const onLoadMoreClick = () => {
              fetchMore({
                variables: {
                  cursor: data.users.pageInfo.endCursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  const oldUsers = previousResult.users;
                  const newUsers = fetchMoreResult.users;
                  const pageInfo = fetchMoreResult.users.pageInfo;

                  // if not new results.
                  if (newUsers.length < 1) return oldUsers;

                  // Put the new comments at the end of the list and update `pageInfo`
                  //       // so we have the new `endCursor` and `hasNextPage` values
                  return {
                    users: {
                      __typename: previousResult.users.__typename,
                      users: [...oldUsers.users, ...newUsers.users],
                      pageInfo
                    }
                  };
                }
              });
            };

            // JSX elements
            // create the DOM for the component.
            const membersSection = (
              <div>
                <Layout2Col horizontalGutters verticalGutters>
                  {addedMembersList}
                </Layout2Col>

                <button
                  // REVIEW: is it ok to hide it like this?
                  hidden={!data.users.pageInfo.hasNextPage}
                  onClick={() => {
                    onLoadMoreClick();
                  }}
                >
                  Load More
                </button>
              </div>
            );

            return membersSection;
          }
        }}
      </Query>
    );
  }
}
