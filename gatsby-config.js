module.exports = {
  siteMetadata: {
    title: 'Open Source Student Network',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SWAPI",
        // This is field under which it's accessible
        fieldName: "swapi",
        // Url to query from
        url: 'https://07rqzpwj55.lp.gql.zone/graphql',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
     resolve: `gatsby-plugin-sass`,
     options: {
       includePaths: [
         "node_modules/breakpoint-sass/stylesheets",
         "node_modules/chroma-sass/sass",
         "node_modules/support-for/sass",
         "node_modules/typey/stylesheets",
         "src/components",
         "src"
       ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        // short_name: 'starter',
        start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
