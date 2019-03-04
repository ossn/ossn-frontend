import gql from "graphql-tag";

/**
 * Contains queries related to the club page.
 */

/**
 * Fetches club, club location, club events and club members.
 */
export const GET_CLUB = gql`
  query getClub($id: ID!) {
    club(id: $id) {
      bannerImageUrl
      clubUrl
      codeOfConduct
      description
      email
      events {
        id
        title
        startDate
        endDate
        description
        sortDescription
        publishedAt
        location {
          address
          lat
          lng
        }
      }
      githubUrl
      id
      imageUrl
      location {
        address
        id
        lat
        lng
      }
      name
      sortDescription
      users {
        description
        email
        githubUrl
        id
        imageUrl
        name
        personalUrl
        receiveNewsletter
        role
        userName
      }
    }
  }
`;

/**
 * Subscribes member to club.
 */
export const JOIN_CLUB = gql`
  mutation joinClub($id: ID!) {
    joinClub(clubId: $id)
  }
`;

/**
 * Mutates club and club location.
 */
export const EDIT_CLUB = gql`
  mutation editClub(
    $address: String
    $bannerImageUrl: String
    $clubUrl: String
    $codeOfConduct: String
    $description: String!
    $email: String!
    $githubUrl: String
    $id: ID!
    $imageUrl: String
    $lat: String
    $lng: String
    $name: String!
    $sortDescription: String
  ) {
    editClub(
      club: {
        bannerImageUrl: $bannerImageUrl
        clubUrl: $clubUrl
        codeOfConduct: $codeOfConduct
        description: $description
        email: $email
        githubUrl: $githubUrl
        imageUrl: $imageUrl
        location: { address: $address, lng: $lng, lat: $lat }
        name: $name
        sortDescription: $sortDescription
      }
      clubId: $id
    ) {
      bannerImageUrl
      clubUrl
      codeOfConduct
      description
      email
      githubUrl
      imageUrl
      id
      location {
        address
        lat
        lng
      }
      name
      sortDescription
    }
  }
`;
