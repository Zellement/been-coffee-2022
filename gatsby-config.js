require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Been Coffee`,
    description: `Independent, family-run coffee shop`,
    author: `@zellement`,
    siteUrl: `https://www.been.coffee`,
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
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sitemap`,
      output: `/sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-CVLJZSC9E6", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-199938807-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "been.coffee",
      },
    },
    {
      resolve: `gatsby-source-google-reviews-en`,
      options: {
        placeId: `ChIJrYZDVGr3eUgRCWhg5ojDc90`,
        apiKey: process.env.GOOGLE_PLACES_API,
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.been.coffee",
        sitemap: "https://www.been.coffee/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `been-coffee`,
        short_name: `been-coffee`,
        start_url: `/`,
        background_color: `#FAB944`,
        theme_color: `#FAB944`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
