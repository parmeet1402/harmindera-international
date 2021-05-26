module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    //  From TS starter
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["."],
      },
      alias: {
        /*         rootPathPrefix: "@",
        rootPathSuffix: "./src", */
        map: [
          ["@components", "./src/components"],
          ["@containers", "./src/containers"],
          ["@content", "./src/content"],
          ["@context", "./src/context"],
          ["@pages", "./src/pages"],
          ["@services", "./src/services"],
          ["@styles", "./src/styles"],
          ["@theme", "./src/theme"],
          ["@utils", "./src/utils"],
        ],
        extensions: [".tsx", ".ts", ".js"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    // Allows for the use of imports
    sourceType: "module",
  },
  rules: {
    // Disable prop-types as we use TypeScript for type checking
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    // Enable prettier rules
    "prettier/prettier": "error",
    // interface start with capital I
    "@typescript-eslint/interface-name-prefix": "off",
    // allow "any" as type
    "@typescript-eslint/no-explicit-any": "off",
    // allow @ts-ignore for testing purposes
    // "@typescript-eslint/ban-ts-ignore": "off",

    //  From TS starter
    // "@typescript-eslint/ban-ts-comment": 1,
    "@typescript-eslint/naming-convention": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-var-requires": 0,
    // "@typescript-eslint/no-unused-vars": [1, { ignoreRestSiblings: true }],
    "@typescript-eslint/no-use-before-define": 0,
    "jsx-a11y/no-onchange": 0,
    // "import/no-named-as-default": 0,
    "react/display-name": 0,
    "import/extensions": "off",
  },
};
