import { createMuiTheme, Theme } from "@material-ui/core/styles";
// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { configColors } from "./palette";
import { configTypography } from "./typography";
import { configShadows } from "./shadows";
// import configOverrides from "./overrides";

// Alter theme structure
declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor {
    lighter?: string;
  }
}

const getButtonPadding = fontSize => {
  return `${(fontSize * 1.18725).toPrecision(2)}px ${(fontSize * 2.18725).toPrecision(
    2,
  )}px !important`;
};

// Variables
// const borderColor = "rgba(0, 0, 0, 0.23)";
const BORDER_RADIUS = 5;

const HarminderaTheme = createMuiTheme({
  // @ts-ignore
  // type: "light",
  palette: {
    common: configColors.common,
    primary: configColors.primary,
    secondary: configColors.secondary,
    error: configColors.error,
    warning: configColors.warning,
    success: configColors.success,
    grey: configColors.grey,
    text: configColors.text,
    background: configColors.background,
    action: configColors.action,
  },
  typography: {
    fontFamily: configTypography.fontFamily,
    h1: configTypography.h1,
    h2: configTypography.h2,
    h3: configTypography.h3,
    h4: configTypography.h4,
    h5: configTypography.h5,
    h6: configTypography.h6,
    subtitle1: configTypography.subtitle1,
    subtitle2: configTypography.subtitle2,
    body1: configTypography.body1,
    body2: configTypography.body2,
    button: configTypography.button,
    caption: configTypography.caption,
    overline: configTypography.overline,
  },
  shape: {
    borderRadius: 10,
  },
  shadows: configShadows,
  overrides: {
    MuiGrid: {
      root: {
        wordBreak: "break-word",
      },
    },
    MuiCard: {
      root: {
        BORDER_RADIUS,
      },
    },
    MuiButton: {
      root: {
        padding: getButtonPadding(16),
      },
      sizeLarge: {
        padding: getButtonPadding(20),
        "& span:first-of-type": {
          fontSize: configTypography.h6?.fontSize,
        },
      },
      sizeSmall: {
        padding: getButtonPadding(12),
        "& span:first-of-type": {
          fontSize: configTypography.button?.fontSize,
        },
      },
      label: {
        fontSize: "1rem",
        textTransform: "none",
        fontWeight: 500,
      },
      outlinedSecondary: {
        /*  padding: "16px 38px", */

        "&:hover": {
          /*  color: configColors.primary.main,
          backgroundColor: configColors.common.white, */
        },
      },
    },
    MuiInput: {
      root: {
        "label + &": {
          marginTop: "24px",
        },
        backgroundColor: configColors.grey["100"],
        borderRadius: "10px",
        padding: "11px 14px",
        width: "424px",
        position: "relative",
        border: `1px solid ${configColors.grey["200"]}`,
      },
      focused: {
        backgroundColor: configColors.common.white,
        border: `1px solid ${configColors.grey["400"]}`,
      },

      multiline: {
        padding: "16px 14px",
      },
    },

    MuiFormHelperText: {
      root: {
        fontWeight: configTypography.fontWeightMedium,
      },
    },
  },
});

export default HarminderaTheme;
