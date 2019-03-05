const path = require("path");

/**
 * Returns true only in production enviroment.
 *
 * @returns {boolean}
 */
const isProd = ["prod", "production"].includes(
  (process.env.ENV || process.env.env || "").toLowerCase()
);

/**
 * Returns true in production build, we use it in preview as well to fetch the
 * correct backend content.
 *
 * @returns {boolean}
 */
const isProdBuild = ["prod", "production"].includes(
  (process.env.NODE_ENV || process.env.env || "").toLowerCase()
);

const BACKEND_URL = isProdBuild
  ? "https://backend.ossn.club"
  : "https://dev-api.ossn.club";

const GA_TRACKING_ID = isProd ? "UA-84301250-21" : "";

module.exports = {
  proxy: {
    prefix: "/api",
    url: BACKEND_URL
  },
  siteMetadata: {
    title: "Open Source Student Network",
    description:
      "A network of university students and clubs who share the belief that open source software is the engine that powers innovation."
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "OSSNAPI",
        // This is field under which it's accessible
        fieldName: "ossnApi",
        // Url to query from
        url: `${BACKEND_URL}/api/v1.0/query`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `./src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`)
      }
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
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Open Source Student Network",
        start_url: "/",
        theme_color: "#262626",
        display: "minimal-ui",
        short_name: "ossn",
        background_color: "#f9f9fa",
        icon: "src/images/icon.png",
        include_favicon: true // Include favicon.
      }
    },
    "gatsby-plugin-extract-schema",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body.
        head: true,
        // Setting this parameter is optional.
        anonymize: true,
        // Google Analytics will not be loaded at all for visitors that have.
        // “Do Not Track” enabled.
        respectDNT: true
      }
    }
  ]
};
