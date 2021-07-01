import React, { useState, useEffect } from "react";
import { Toolbar } from "@material-ui/core";

import Navbar from "./desktop/navbar";
import Footer from "./desktop/footer";
import Overlay from "./overlay";
import Transition from "./transition";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { ExpandedMobileNavbar } from "./expanded-mobile-navbar";
import useUIStore from "@zustand/ui";
import useKeyboardOpen from "@utils/hooks/use-keyboard-open";
// import theme from "../../theme";

interface Props {
  name?: string;
  children: React.ReactNode | React.ReactChildren;
}

const useStyles = makeStyles(theme => ({
  mainStyles: theme.mixins.toolbar,
  pad: {
    height: 56,
    // height: 32,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: 48,
    },
    [theme.breakpoints.up("sm")]: {
      height: 64,
      // height: 32,
    },
  },
}));

const Layout = (props: Props) => {
  const { children } = props;
  const { isMobileNavbarExpanded, keyboardOpened, keyboardClosed } = useUIStore();
  const [isKeyboardOpen] = useKeyboardOpen();
  const { mainStyles, pad } = useStyles();

  useEffect(() => {
    if (isKeyboardOpen) {
      keyboardOpened();
    } else {
      keyboardClosed();
    }
  }, [isKeyboardOpen]);

  const theme = useTheme();
  // console.log(theme.mixins.toolbar);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // style={{ marginTop: isMobile ? "64px" : "72px" }}
  return (
    <Transition>
      {/* <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline /> */}
      <Navbar />
      {/* <Overlay /> */}
      <ExpandedMobileNavbar />
      <div className={pad} />
      {/* {<main>{children}</main>}</Transition> */}
      {!isMobileNavbarExpanded && <main>{children}</main>}

      {!isMobileNavbarExpanded && <Footer />}
      {/* <Toolbar /> */}
      {/* </ThemeProvider> */}
    </Transition>
  );
};

export default Layout;

/* const Layout = (props: Props) => {
  const { children } = props;
  const { isMobileNavbarExpanded, keyboardOpened, keyboardClosed } = useUIStore();
  const [isKeyboardOpen] = useKeyboardOpen();
  const { mainStyles, pad } = useStyles();

  useEffect(() => {
    if (isKeyboardOpen) {
      keyboardOpened();
    } else {
      keyboardClosed();
    }
  }, [isKeyboardOpen]);

  const theme = useTheme();
  console.log(theme.mixins.toolbar);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // style={{ marginTop: isMobile ? "64px" : "72px" }}
  return (
    <>
      <Navbar />
      <ExpandedMobileNavbar />
      <div className={pad} />
      {!isMobileNavbarExpanded && <main>{children}</main>}
      {!isMobileNavbarExpanded && <Footer />}
    </>
  );
};

export default Layout; */

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

// TODO: Update theme to have category colors as well
// TODO: Structure data for categories
// TODO: Structure data for links
// TODO: Categories and Products Division

// TODO: Refactor Code State - Classnames, splitting of code

// TODO: Initial State
// TODO: Loading State
// TODO: Searching State
// TODO: Data more than normal height
// TODO: All Functions which are missing
/* 
 - Layout Component (Master)
 - SEO Component 
 - Navbar Component
 - Footer Component

 - Flex Component
 - Grid Component

 - Section Component

 - Overlay Component
 - Transition Component
 



 Extras
 - Banner Component
 - Breadcrumbs Component


*/
