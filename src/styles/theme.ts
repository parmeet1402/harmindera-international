import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { configColors } from "./palette";
import { configTypography } from "./typography";

// Variables
// const borderColor = "rgba(0, 0, 0, 0.23)";
const borderRadius = 5;

const HarminderaTheme = createMuiTheme({
  // @ts-ignore
  // type: "light",
  palette: {
    common: configColors.common,
    primary: configColors.primary,
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
  overrides: {
    MuiGrid: {
      root: {
        wordBreak: "break-word",
      },
    },
    MuiCard: {
      root: {
        borderRadius,
      },
    },
  },
});

export default HarminderaTheme;
