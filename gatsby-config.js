/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require("./config/metadata")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    ////////////////////////////////////////////////////
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    ////////////////////////////////////////////////////
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 1000,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    ////////////////////////////////////////////////////
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         subsets: [`300`, `500`, `700`],
    //       },
    //     ],
    //   },
    // },
    ////////////////////////////////////////////////////
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YagoErnandes`,
        short_name: `YagoErnandes`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#7159c1`,
        display: `standalone`,
        icon: `src/assets/icon.png`, //512x512
      },
    },
    ////////////////////////////////////////////////////
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    ////////////////////////////////////////////////////
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: `**/styles.js`,
      },
    },
    ////////////////////////////////////////////////////
    `gatsby-plugin-offline`,
  ],
}
