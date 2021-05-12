// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
  // Specifies the ESLint parser for TypeScript
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
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
    ecmaVersion: 2018,
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
    "@typescript-eslint/ban-ts-ignore": "off",
  },
};

// ? Template Provided

/* 
{
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended", "prettier"],
  "plugins": ["react-hooks"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "worker": true
  },
  "rules": {
    "arrow-body-style": 0,
    "class-methods-use-this": 0,
    "function-paren-newline": 0,
    "func-names": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": [2, {}],
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": 0,
    "linebreak-style": 0,
    "no-console": 1,
    "no-irregular-whitespace": 0,
    "no-param-reassign": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 1,
    "object-curly-spacing": 0,
    "prefer-arrow-callback": 0,
    "prefer-destructuring": 0,
    "prefer-template": 1,
    "react/forbid-prop-types": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-no-bind": 2,
    "react/jsx-one-expression-per-line": 0,
    "react/no-danger": 0,
    "react/prefer-stateless-function": 1,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
        "root": ["./"]
      }
    }
  }
}
 */
