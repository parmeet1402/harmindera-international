// const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  author,
  title,
  description,
  keywords,
  siteUrl,
  defaultLang,
  address,
  contact,
  image,
} = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    titleTemplate: `%s | ${title}`,
    siteUrl,
    keywords,
    description,
    author,
    lang: defaultLang,
    address,
    email: contact.email,
    phoneNumbers: contact.phoneNumbers,
    image,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        forceFullSync: true,
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/content/assets/images/company-logo-square.svg",
        name: title,
        short_name: "HI",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0803FC",
        display: "minimal-ui",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",

    // "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },

    "gatsby-plugin-typescript",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    /*     {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    }, */

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/content/assets/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },

    // EsLint
    "gatsby-plugin-eslint",

    //  React Helmet
    "gatsby-plugin-react-helmet",

    // TODO: i18n
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/src/content/"],
      },
    },
    "gatsby-plugin-netlify",

    // {
    //   resolve: "gatsby-plugin-material-ui",
    //   // If you want to use styled components you should change the injection order.
    //   options: {
    //     // stylesProvider: {
    //     //   injectFirst: true,
    //     // },
    //   },
    // },
  ],
};
