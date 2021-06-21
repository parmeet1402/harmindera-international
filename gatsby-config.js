const path = require("path");
const { author, title, description, keywords, siteUrl, defaultLang } = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    siteUrl,
    keywords,
    description,
    author,
  },
  plugins: [
    // TODO: Create Tracking Id for google analaytics
    /* {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    }, */

    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Xg-7MV82KJiO4-daF2WTpR1baGCjd1d6W4p3FpOp1iU",
        spaceId: "us6zmzxpvi4f",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },

    {
      resolve: "gatsby-plugin-root-import",
      options: {
        config: path.join(__dirname, "config"),
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        containers: path.join(__dirname, "src/containers"),
        content: path.join(__dirname, "src/content"),
        assets: path.join(__dirname, "src/content/assets"),
        context: path.join(__dirname, "src/context"),
        hooks: path.join(__dirname, "src/utils/hooks"),
        constants: path.join(__dirname, "src/utils/constants"),
        pages: path.join(__dirname, "src/pages"),
        services: path.join(__dirname, "src/services"),
        styles: path.join(__dirname, "src/styles"),
        templates: path.join(__dirname, "src/templates"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
  ],
};
