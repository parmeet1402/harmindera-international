const BORDER_RADIUS = 10;
import { configColors } from "./palette";

const configOverrides = {
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
      padding: "16px 38px",
    },
    label: {
      fontSize: "1rem",
      textTransform: "none",
      fontWeight: 500,
    },
    outlinedSecondary: {
      padding: "16px 38px",

      "&:hover": {
        color: configColors.primary.main,
        backgroundColor: configColors.common.white,
      },
    },
  },
};

export default configOverrides;
