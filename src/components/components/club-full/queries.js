import gql from "graphql-tag";

export const GET_CLUB = gql`
  query getClub($id: ID!) {
    club(id: $id) {
      bannerImageUrl
      clubUrl
      codeOfConduct
      description
      email
      events {
        shortDescription: sortDescription
        title
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
      shortDescription: sortDescription
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

export const JOIN_CLUB = gql`
  mutation joinClub($id: ID!) {
    joinClub(clubId: $id)
  }
`;

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
    $shortDescription: String
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
        sortDescription: $shortDescription
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
      shortDescription: sortDescription
    }
  }
`;
