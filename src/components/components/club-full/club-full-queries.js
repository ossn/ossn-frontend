import gql from 'graphql-tag';

export const getClubQuery = gql`
  query getClub($id: ID!) {
    club(id: $id) {
      id
      email
      title: name
      imageUrl
      description
      codeOfConduct
      subtitle: sortDescription
      githubUrl
      bannerImageUrl
      clubUrl
      events {
        title
        sortDescription
      }
      location {
        address
        id
        lat
        lng
      }
      users {
        id
        userName
        name
        imageUrl
        receiveNewsletter
        description
        githubUrl
        personalUrl
        email
        role
      }
    }
  }
`;

export const editClubMutation = gql`
  mutation editClub(
    $id: ID!
    $name: String!
    $sortDescription: String
    $bannerImageUrl: String
    $imageUrl: String
    $description: String!
    $codeOfConduct: String
    $email: String!
    $githubUrl: String
    $clubUrl: String
    $address: String
    $lng: String
    $lat: String
  ) {
    editClub(
      clubId: $id
      club: {
        name: $name
        sortDescription: $sortDescription
        imageUrl: $imageUrl
        bannerImageUrl: $bannerImageUrl
        description: $description
        codeOfConduct: $codeOfConduct
        email: $email
        githubUrl: $githubUrl
        clubUrl: $clubUrl
        location: { address: $address, lng: $lng, lat: $lat }
      }
    ) {
      id
      email
      location {
        address
        lat
        lng
      }
      name
      imageUrl
      bannerImageUrl
      description
      codeOfConduct
      sortDescription
      githubUrl
      clubUrl
    }
  }
`;

export const joinClubMutation = gql`
  mutation joinClub($id: ID!) {
    joinClub(clubId: $id)
  }
`;
