import React, { useState, useEffect } from "react";
import Navbar from "./desktop/navbar";
import Footer from "./desktop/footer";
import Overlay from "./overlay";
import {} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { ExpandedMobileNavbar } from "./expanded-mobile-navbar";
import useUIStore from "@zustand/ui";
import useKeyboardOpen from "@utils/hooks/use-keyboard-open";

interface Props {
  name?: string;
  children: React.ReactNode | React.ReactChildren;
}

const Layout = (props: Props) => {
  const { children } = props;
  const { isMobileNavbarExpanded, keyboardOpened, keyboardClosed } = useUIStore();
  const [isKeyboardOpen] = useKeyboardOpen();

  useEffect(() => {
    if (isKeyboardOpen) {
      keyboardOpened();
    } else {
      keyboardClosed();
    }
  }, [isKeyboardOpen]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // style={{ marginTop: isMobile ? "64px" : "72px" }}
  return (
    <>
      <Navbar />
      <Overlay />
      <ExpandedMobileNavbar />
      {!isMobileNavbarExpanded && <main>{children}</main>}
      {!isMobileNavbarExpanded && <Footer />}
    </>
  );
};

export default Layout;

// DONE: Hover for products link
// DONE: Set hover and tap color for the links
// DONE: Enable overlays
// DONE: Add icons for all the 6 categories and call them as per the project
// TODO: Fixed Header

// Mobile navbar

// TODO: Scroll to hide feature on mobile
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
