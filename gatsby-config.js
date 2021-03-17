/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Websites creation from scratch",
    titleTemplate: "A-Team",
    description: "We can everything you want and do it good",
    url: "https://79b6f950cd70.ngrok.io", // No trailing slash allowed!
    image: "/images/seoImg.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: " ",
  },

  plugins: [`gatsby-plugin-react-helmet`],
}
