// Extend default Gatsby config with SVGR support, aliases and Webpack Bundle Analyzer
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

exports.onCreateWebpackConfig = ({ getConfig, actions, stage }) => {
  const existingConfig = getConfig();

  /*   const rules = existingConfig.module.rules.map((rule) => {
    if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)) {
      return {
        ...rule,
        exclude: path.resolve(__dirname, "./src/icons"),
      };
    }
    return rule;
  });
 */
  /* actions.replaceWebpackConfig({
    ...existingConfig,
    module: {
      ...existingConfig.module,
      rules,
    },
  }); */

  actions.setWebpackConfig({
    /* module: {
      rules: [
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, "./src/icons"),
          issuer: /\.((j|t)sx?)$/,
          use: {
            loader: require.resolve(`@svgr/webpack`),
            options: {
              titleProp: true,
            },
          },
        },
      ],
    }, */
    /* plugins:
      stage === "build-javascript"
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              defaultSizes: "gzip",
              openAnalyzer: false,
              generateStatsFile: true,
            }),
          ]
        : [], */
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@containers": path.resolve(__dirname, "src/containers"),
        "@content": path.resolve(__dirname, "src/content"),
        "@context": path.resolve(__dirname, "src/context"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@services": path.resolve(__dirname, "src/services"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@theme": path.resolve(__dirname, "src/theme"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  });
};

/* const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

exports.onCreateWebpackConfig = ({ getConfig, actions, stage }) => {
  const existingConfig = getConfig();

  const rules = existingConfig.module.rules.map((rule) => {
    if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)) {
      return {
        ...rule,
        exclude: path.resolve(__dirname, "./src/icons"),
      };
    }
    return rule;
  });

  actions.replaceWebpackConfig({
    ...existingConfig,
    module: {
      ...existingConfig.module,
      rules,
    },
  });

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, "./src/icons"),
          issuer: /\.((j|t)sx?)$/,
          use: {
            loader: require.resolve(`@svgr/webpack`),
            options: {
              titleProp: true,
            },
          },
        },
      ],
    },
    plugins:
      stage === "build-javascript"
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              defaultSizes: "gzip",
              openAnalyzer: false,
              generateStatsFile: true,
            }),
          ]
        : [],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};
 */
/* 
exports.modifyWebpackConfig = function ({ config, env }) {
  config.merge({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
  });
  return config;
}; */

/* 
const getBaseUrl = require("./src/utils/getBaseUrl");
const { defaultLang, langTextMap = {} } = require("./config/site"); */

/**
 * add fileName to node for markdown files
 */
/* exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileName = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "fileName",
      value: fileName,
    });

    createNodeField({
      node,
      name: "directoryName",
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
}; */

/**
 * define nullable items
 */
/* exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    `type Frontmatter {
      anchor: String
      jumpToAnchor: String
      jumpToAnchorText: String
      social: Social
      services: [Service]
      teamMember: [TeamMember]
    }`,
    `type TeamMember {
      social: Social
    }`,
    `type Service {
      iconName: String
      imageFileName: String
      header: String
      content: String
    }`,
    `
    type Social {
      twitter: String
      facebook: String
      linkedin: String
      medium: String
      github: String
    }
    `,
  ];

  createTypes(typeDefs);
}; */

/**
 * generate i18n top pages
 */
/* exports.createPages = ({ graphql, actions: { createPage } }) => {
  const topIndex = path.resolve("./src/templates/top-index.jsx");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              distinct(field: fields___langKey)
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        data.allMarkdownRemark.distinct.forEach((langKey) => {
          createPage({
            path: getBaseUrl(defaultLang, langKey),
            component: topIndex,
            context: {
              langKey,
              defaultLang,
              langTextMap,
            },
          });
        });

        return null;
      })
    );
  });
}; */
