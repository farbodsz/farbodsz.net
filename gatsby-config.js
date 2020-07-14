/*
 * Gatsby configuration
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#0d47a1",
        theme_color: "#0d47a1",
        // Enables "Add to home-screen" prompt and disables browser UI
        // (including back button), see:
        // https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/icons/favicons/favicon-32x32.png",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for
        // manifest. Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
