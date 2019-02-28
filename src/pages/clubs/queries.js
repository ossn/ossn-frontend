import gql from "graphql-tag";

export const GET_CLUBS = gql`
  query GetClubs($number: Int!, $cursor: ID, $search: String) {
    clubs(first: $number, after: $cursor, search: $search) {
      clubs {
        clubUrl
        codeOfConduct
        description
        email
        events {
          description
          endDate
          id
          imageUrl
          location {
            address
            id
            lat
            lng
          }
          shortDescription: sortDescription
          startDate
          title
        }
        githubUrl
        id
        imageUrl
        location {
          id
          lat
          lng
        }
        name
        shortDescription: sortDescription
        users {
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        totalCount
      }
    }
  }
`;
