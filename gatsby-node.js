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

const path = require(`path`);
const graphql = require('gatsby/graphql');

// exports.onCreateNode = ({ node, getNode }) => {
//     console.log(node, 'slug');
//     if (node.parent === 'ossnApi') {
//       console.log('hey');
//
//     }
//
//   // if (node.internalComponentName && node.internalComponentName === 'ComponentClub') {
//   // //   const fileNode = getNode(node.parent)
//   //   console.log(node.internalComponentName, 'slug')
//   //   ComponentClub
//   // }
// }

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        ossnApi {
          clubs {
            clubs {
              id
            }
          }
        }
      }
    `).then(result => {
      for (let node of result.data.ossnApi.clubs.clubs) {
        actions.createPage({
          path: `clubs/${node.id}`,
          component: path.resolve(`./src/pages/club.js`),
          context: {
            clubId: node.id
          }
        });
      }
      resolve();
    });
  }).catch(error => {
    console.log(error);
    reject();
  });
};
