require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Been Coffee`,
    description: `Independent, family-run coffee shop`,
    author: `@zellement`,
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
    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token: process.env.INSTAGRAM_ACCESS,
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.been.coffee",
        sitemap: "https://www.been.coffee/sitemap.xml",
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
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
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
