
// Bypass leaflet npm module during the build time. To avoid `window` is not defined exception
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /leaflet/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

// const path = require(`path`);
// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;
// }


// exports.createPages = ({ graphql, actions }) => {
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMembersJson {
//           edges {
//             node {
//               name
//               isLeader
//             }
//           }
//         }
//       }
//     `).then(result => {
//
//       result.data.allMembersJson.edges.forEach(({node}) => {
//         createPage({
//           path: '/members/' + node.username,
//           component: path.resolve(`./src/components/components/member/member.js`),
//           context: {
//             slug: member
//           },
//         })
//       })
//       console.log(JSON.stringify(result, null, 4))
//       resolve()
//     })
//   })
// }
