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

// const path = require(`path`);
// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;
// }

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        ossnApi {
          clubs(last: 100) {
            clubs {
              id
              email
              title: name
              imageUrl
              description
              codeOfConduct
              subtitle: sortDescription
              githubUrl
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
          }

          users(last: 100) {
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
          }
        }
      }
    `).then(result => {
      for (let node of result.data.ossnApi.clubs.clubs) {
        actions.createPage({
          path: `clubs/${node.id}`,
          component: path.resolve(`./src/templates/club-full.js`),
          context: {
            club: node
          }
        });
      }

      for (let node of result.data.ossnApi.users.users) {
        actions.createPage({
          path: `members/${node.id}`,
          component: path.resolve(`./src/templates/member-full.js`),
          context: {
            member: node
          }
        });
      }
      resolve();
    });
  }).catch(error => {
    // reject(); // linter insisted...
  });
};
