import React, { useEffect } from "react";

// Material UI
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Components
import Navbar from "./desktop/navbar";
import Footer from "./desktop/footer";
import Transition from "./transition";

// Hooks
import useKeyboardOpen from "@utils/hooks/use-keyboard-open";

// State
import useUIStore from "@zustand/ui";

const useStyles = makeStyles(theme => ({
  main: theme.mixins.toolbar,
  pad: {
    height: 56,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: 48,
    },
    [theme.breakpoints.up("sm")]: {
      height: 64,
    },
  },
}));

interface Props {
  name?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  const { isMobileNavbarExpanded, keyboardOpened, keyboardClosed } = useUIStore();
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Keyboard open state for mobile devices
  const [isKeyboardOpen] = useKeyboardOpen();
  useEffect(() => {
    if (!isMobile) {
      if (isKeyboardOpen) {
        keyboardOpened();
      } else {
        keyboardClosed();
      }
    } else {
      keyboardClosed();
    }
  }, [isKeyboardOpen]);

  return (
    <Transition>
      <Navbar />
      <Box className={classes.pad} />
      {!isMobileNavbarExpanded && <main className={classes.main}>{children}</main>}
      {!isMobileNavbarExpanded && <Footer />}
    </Transition>
  );
};

export default Layout;

// DONE: Hover for products link
// DONE: Set hover and tap color for the links
// DONE: Enable overlays
// DONE: Add icons for all the 6 categories and call them as per the project
// DONE: Fixed Header

// Mobile navbar

// DONE: Scroll to hide feature on mobile
// DONE: Hamburger and times icon toggle for full screen view
// DONE: Links
// DONE: Navbar opened Footer Information
// DONE: Search Bar

// DONE: Update theme to have category colors as well
// TODO: Structure data for categories
// TODO: Structure data for links
// TODO: Categories and Products Division

// TODO: Refactor Code State - Classnames, splitting of code

// TODO: Initial State
// TODO: Loading State
// TODO: Searching State
// TODO: Data more than normal height
// TODO: All Functions which are missing
