const path = require(`path`);

// Bypass leaflet npm module during the build time. To avoid `window` is not defined exception
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};

// handles the club fetching.
function requestClubs(graphql, actions, cursor = null) {
  return new Promise((resolve, reject) => {
    graphql(clubQuery, { cursor: cursor })
      .then(result => {
        for (let node of result.data.ossnApi.clubs.clubs) {
          actions.createPage({
            path: `clubs/${node.id}`,
            component: path.resolve(`./src/templates/club-full.js`),
            context: {
              club: node
            }
          });
        }
        return {
          pageInfo: result.data.ossnApi.clubs.pageInfo,
          resolve: resolve
        };
      })
      .then(result => {
        if (result.pageInfo.hasNextPage) {
          requestClubs(
            graphql,
            actions,
            (cursor = result.pageInfo.endCursor)
          ).then(result.resolve);
        } else {
          resolve();
        }
      })
      .catch(() => {
        reject();
      });
  });
}

// handles the user fetching.
function requestUsers(graphql, actions, cursor = null) {
  return new Promise((resolve, reject) => {
    graphql(userQuery, { cursor: cursor })
      .then(result => {
        for (let node of result.data.ossnApi.users.users) {
          actions.createPage({
            path: `members/${node.id}`,
            component: path.resolve(`./src/templates/member-full.js`),
            context: {
              member: node
            }
          });
        }
        return {
          pageInfo: result.data.ossnApi.users.pageInfo,
          resolve: resolve
        };
      })
      .then(result => {
        if (result.pageInfo.hasNextPage) {
          requestClubs(
            graphql,
            actions,
            (cursor = result.pageInfo.endCursor)
          ).then(result.resolve);
        } else {
          resolve();
        }
      })
      .catch(error => {
        reject();
      });
  });
}

// create pages for clubs and users.
exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    requestClubs(graphql, actions).then(() => {
      requestUsers(graphql, actions).then(() => {
        resolve();
      });
    });
  });
};

// the graphql query for clubs.
const clubQuery = `
  query GetClubs($cursor: ID) {
    ossnApi {
      clubs(first: 100, after: $cursor) {
        clubs {
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
          location {
            address
            id
            lat
            lng
          }
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
          }
        }

        pageInfo {
          totalCount
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

// the graphql query for users.
const userQuery = `
query GetClubs($cursor: ID) {
  ossnApi {
    users(first: 100, after: $cursor)  {
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
}
`;
