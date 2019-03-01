const path = require(`path`);

// Bypass leaflet npm module during the build time. To avoid `window` is not defined exception
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
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
            component: path.resolve(`./src/pages/clubs/dynamic.js`),
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
          return resolve();
        }
      })
      .catch(e => {
        reject(Error);
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
            component: path.resolve(`./src/pages/members/dynamic.js`),
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
          return requestUsers(
            graphql,
            actions,
            (cursor = result.pageInfo.endCursor)
          ).then(result.resolve);
        } else {
          return resolve();
        }
      })
      .catch(e => {
        reject(e);
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

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path === "/members/dynamic/") {
    page.matchPath = "/members/*";
    page.component = path.resolve(`./src/pages/members/dynamic.js`);
    createPage(page);
  }

  if (page.path === "/clubs/dynamic/") {
    page.matchPath = "/clubs/*";
    page.component = path.resolve(`./src/pages/clubs/dynamic.js`);
    createPage(page);
  }
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
query GetUsers($cursor: ID) {
  ossnApi {
    users(first: 100, after: $cursor)  {
       users {
         id
         userName
         name
         imageUrl
         receiveNewsletter
         isOverTheLegalLimit
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

       pageInfo {
         totalCount
         endCursor
         hasNextPage
       }
     }
  }
}
`;
