import { createMuiTheme } from "@material-ui/core/styles";
// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { configColors } from "./palette";
import { configTypography } from "./typography";
import { configShadows } from "./shadows";
import { configZIndex } from "./z-index";
import React from "react";
// import configOverrides from "./overrides";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

// Alter theme structure
declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor {
    lighter?: string;
  }
  interface PaletteOptions {
    category: {
      trending: {
        foreground: string;
        background: string;
      };
      jcbParts: {
        foreground: string;
        background: string;
      };
      agricultureParts: {
        foreground: string;
        background: string;
      };
      nut: {
        foreground: string;
        background: string;
      };
      bolt: {
        foreground: string;
        background: string;
      };
      autoParts: {
        foreground: string;
        background: string;
      };
    };
  }

  interface TypeBackground {
    level1: string;
    level2: string;
    dark1: string;
    dark2: string;
  }
}
declare module "@material-ui/core/styles/zIndex" {
  interface ZIndex {
    backdrop: number;
    expandedSearchBar: number;
    navbarDropdownMenu: number;
  }
}

const getButtonPadding = (fontSize: number) => {
  return `${(fontSize * 1.18725).toPrecision(2)}px ${(fontSize * 2.18725).toPrecision(
    2,
  )}px !important`;
};

// Variables
// const borderColor = "rgba(0, 0, 0, 0.23)";
const BORDER_RADIUS = 5;
const breakpoints = createBreakpoints({
  values: {
    /* xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200, */

    lg: 1280,
    md: 960,
    sm: 600,
    xl: 1920,
    xs: 0,
  },
});

const HarminderaTheme = createMuiTheme({
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
    category: configColors.category,
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
  zIndex: configZIndex,
  breakpoints,
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
      outlinedSecondary: {},
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
        "&$focused": {
          backgroundColor: configColors.common.white,
          border: `1px solid ${configColors.grey["400"]}`,
        },
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

    MuiAppBar: {
      colorSecondary: {
        minHeight: "72px",
        boxShadow: configShadows[1],

        [breakpoints.down("sm")]: {
          minHeight: "64px",
        },
      },
    },

    MuiToolbar: {
      root: {
        minHeight: "72px !important",

        [breakpoints.down("sm")]: {
          minHeight: "64px !important",
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      },
    },
  },
});

export default HarminderaTheme;
