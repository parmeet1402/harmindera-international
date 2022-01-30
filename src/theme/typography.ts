import { CSSProperties } from "react";

type FontStyle = {
  fontFamily?: CSSProperties["fontFamily"];
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: CSSProperties["fontSize"];
  lineHeight?: CSSProperties["lineHeight"];
  letterSpacing?: CSSProperties["letterSpacing"];
  textTransform?: CSSProperties["textTransform"];
};

type Config = {
  htmlFontSize?: number;
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  h1?: FontStyle;
  h2?: FontStyle;
  h3?: FontStyle;
  h4?: FontStyle;
  h5?: FontStyle;
  h6?: FontStyle;
  subtitle1?: FontStyle;
  subtitle2?: FontStyle;
  body1?: FontStyle;
  body2?: FontStyle;
  button?: FontStyle;
  caption?: FontStyle;
  overline?: FontStyle;
};

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const fontFamily = "'Poppins', sans-serif";

export const configTypography: any = {
  fontFamily,
  htmlFontSize: 18,
  fontSize: 18,
  fontWeightLight: fontWeight.light,
  fontWeightRegular: fontWeight.regular,
  fontWeightMedium: fontWeight.medium,
  fontWeightBold: fontWeight.bold,
  h1: {
    fontFamily,
    fontWeight: fontWeight.light,
    fontSize: "5.17rem",
    lineHeight: 1.4,
    letterSpacing: "-1.5px",
    // TODO: Change base size and set the current size at a later width
  },
  h2: {
    fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: "1.78rem",
    lineHeight: 1.425,
    letterSpacing: "-0.5px",
    "@media only screen and (min-width: 400px)": {
      fontSize: "1.84rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
  },
  h3: {
    fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: "1.74rem",
    lineHeight: 1.45,
    letterSpacing: "0px",
    "@media only screen and (min-width: 400px)": {
      fontSize: "1.78rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "2.56rem",
    },
  },
  h4: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "1.28rem",
    lineHeight: 1.475,
    letterSpacing: "0.25px",
    "@media only screen and (min-width: 1150px)": {
      fontSize: "1.83rem",
    },
  },
  h5: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0px",
    // TODO: Change base size and set the current size at a later width
    "@media only screen and (min-width: 1150px)": {
      fontSize: "1.28rem",
    },
  },
  h6: {
    fontFamily,
    fontWeight: fontWeight.medium,
    // fontSize: "1.06rem",
    fontSize: "0.78rem",
    lineHeight: 1.525,
    letterSpacing: "0.15px",

    "@media only screen and (min-width: 1150px)": {
      fontSize: "1.06rem",
    },
  },
  subtitle1: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "0.72rem",
    lineHeight: 1.525,
    letterSpacing: "0.15px",
    "@media only screen and (min-width: 1150px)": {
      fontSize: "1rem",
    },
  },
  subtitle2: {
    fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: "0.56rem",
    lineHeight: 1.525,
    letterSpacing: "0.1px",
    "@media only screen and (min-width: 1150px)": {
      fontSize: "0.72rem",
    },
    // TODO: Change base size and set the current size at a later width
    // TODO: Desktop Base size 13px (0.72rem)
  },
  body1: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "0.83rem",
    lineHeight: 1.525,
    letterSpacing: "0.5px",
    // TODO: Change base size and set the current size at a later width
  },
  body2: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "0.72rem",
    lineHeight: 1.525,
    letterSpacing: "0.25px",
    // TODO: Change base size and set the current size at a later width
    "@media only screen and (min-width: 1150px)": {
      fontSize: "1rem",
    },
  },
  button: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "0.72rem",
    lineHeight: 1.525,
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    // TODO: Change base size and set the current size at a later width
  },
  caption: {
    fontFamily,
    fontWeight: fontWeight.regular,
    fontSize: "0.67rem",
    lineHeight: 1.525,
    letterSpacing: "0.4px",
    // TODO: Change base size and set the current size at a later width
  },
  overline: {
    fontFamily,
    fontWeight: fontWeight.light,
    fontSize: "0.56rem",
    lineHeight: 1.525,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    // TODO: Change base size and set the current size at a later width
  },
};
