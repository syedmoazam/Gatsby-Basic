/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: [],
      },
    },
    `gatsby-plugin-sass`,
  ],
  siteMetadata: {
    title: "Moazam Hussain",
    description: "Web dev portfolio",
    copyright: "This website is copyright 2021 Moazam Hussain",
  },
}
