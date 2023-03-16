require('dotenv').config(
  {
    path: `.env`,
  }
);

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

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        "spaceId": process.env.CONTENTFUL_SPACE,
        "accessToken": process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,500,600`
        ],
        display: 'swap',
        preconnect: true
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://ateam-inc.us12.list-manage.com/subscribe/post?u=f43a82dca6f5f9ece25c8879e&amp;id=81038d644f&amp;f_id=0077bae0f0',
      }
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleTagManager: {
          trackingId: process.env.GTM_ID,
          cookieName: 'gatsby-gdpr-google-tagmanager',
          routeChangeEvent: 'gatsby-route-change',
        },
      }
    },
  ],
}
