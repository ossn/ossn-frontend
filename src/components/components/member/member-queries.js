import gql from 'graphql-tag';

export const getUserQuery = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      userName
      name
      imageUrl
      receiveNewsletter
      description
      sortDescription
      githubUrl
      personalUrl
      email
      clubs {
        name
        id
      }
    }
  }
`;

export const editUserMutation = gql`
  mutation editUser(
    $name: String!
    $receiveNewsletter: Boolean!
    $sortDescription: String
    $description: String
    $clubs: [ID!]
    $githubUrl: String
    $personalUrl: String
  ) {
    editUser(
      user: {
        name: $name
        receiveNewsletter: $receiveNewsletter
        sortDescription: $sortDescription
        description: $description
        clubs: $clubs
        githubUrl: $githubUrl
        personalUrl: $personalUrl
      }
    ) {
      id
      name
      email
      sortDescription
      description
      receiveNewsletter
      clubs {
        id
      }
      githubUrl
      personalUrl
    }
  }
`;
