const path = require('path');
const BACKEND_URL = 'https://ossn-api.swaco.io/api/v1.0/'; // 'http://localhost:8080/api/v1.0/';
module.exports = {
  proxy: {
    prefix: '/api/v1.0/query',
    url: BACKEND_URL
  },
  siteMetadata: {
    title: 'Open Source Student Network'
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'OSSNAPI',
        // This is field under which it's accessible
        fieldName: 'ossnApi',
        // Url to query from
        url: `${BACKEND_URL}query`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `./src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          'node_modules/breakpoint-sass/stylesheets',
          'node_modules/chroma-sass/sass',
          'node_modules/support-for/sass',
          'node_modules/typey/stylesheets',
          'src/components',
          'src'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        // short_name: 'starter',
        start_url: '/',
        // background_color: '#663399',
        theme_color: '#f9f9fa',
        display: 'minimal-ui'
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    }
  ]
};
