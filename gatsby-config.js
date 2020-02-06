module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'hzbt7pi2',
        dataset: 'production',
        watchMode: 'true',
        overlayDraft: 'true',
        // a token with read permissions is required
        // if you have a private dataset
        token: 'skhfsIttG52qYl6aXXHe4EVLe8wkitvP9PIOksMY5wHLzxTNMLtAHKgmAuJtCeSHKuEo19LiYPqcfZHW4CH7oMnFCgIRGzjlKbn3UEtZViJWrtxTv6c8GSdPvIYTRzkyfXTEhVG1znQaOLB10FMLCPmkAknSQyv34Ch4k82ReTeNy8PiV1Of'
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
