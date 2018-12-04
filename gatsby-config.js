const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
        resolve: `gatsby-plugin-styled-components`,
        options: {
            // Add any options here
        },
    },
    {
        resolve: "gatsby-source-magento2",
        options: {
            graphqlEndpoint: "http://m23.hom/graphql"
        },
    }
  ],
};
