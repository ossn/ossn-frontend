import gql from "graphql-tag";

export const getUserQuery = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      email
      name
      imageUrl
      receiveNewsletter
      description
      sortDescription
      githubUrl
      personalUrl
      email
      isOverTheLegalLimit
      clubs {
        name
        id
      }
    }
  }
`;

export const editUserMutation = gql`
  mutation editUser(
    $receiveNewsletter: Boolean!
    $sortDescription: String
    $description: String
    $clubs: [ID!]
    $githubUrl: String
    $personalUrl: String
    $name: String!
    $isOverTheLegalLimit: Boolean!
  ) {
    editUser(
      user: {
        receiveNewsletter: $receiveNewsletter
        sortDescription: $sortDescription
        description: $description
        clubs: $clubs
        githubUrl: $githubUrl
        personalUrl: $personalUrl
        name: $name
        isOverTheLegalLimit: $isOverTheLegalLimit
      }
    ) {
      id
      name
      sortDescription
      description
      receiveNewsletter
      isOverTheLegalLimit
      clubs {
        id
      }
      githubUrl
      personalUrl
    }
  }
`;
