import React from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

// Components
import ExpandedMobileNavbar from "./expanded-mobile-navbar";
import Links from "./links";
import ExpandableSearchField from "@components/form/ExpandableSearchField";
import { Logo } from "@content/assets/CustomIcon";
import { IconButton, SolidButton } from "@components/form/Button";
import Link from "@components/navigation/Link";

// State
import useUIStore from "@zustand/ui";
import { Box } from "@material-ui/core";

interface Props {
  window?: () => Window;
}

const Navbar = (props: Props) => {
  const { window } = props;

  const { isMobileNavbarExpanded, expandMobileNavbar, shrinkMobileNavbar } = useUIStore();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  // Handle navbar open and close for mobile navbar
  const handleHamburgerMenuClick = () => {
    if (isMobileNavbarExpanded) {
      shrinkMobileNavbar();
    } else {
      expandMobileNavbar();
    }
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            {/* Left */}
            <Link href="/" underline="none">
              <Logo />
            </Link>

            {!isMobile ? (
              <>
                <Links />
                {/* Right */}
                <Box ml="auto">
                  <SolidButton href="/contact" size="small">
                    Let's Work
                  </SolidButton>
                </Box>
                {/* <ExpandableSearchField /> */}
              </>
            ) : (
              <>
                {/* Right */}
                <IconButton
                  style={{ marginLeft: "auto" }}
                  onClick={handleHamburgerMenuClick}
                  colorOverrides={{
                    icon: {
                      color: "text",
                      colorVariant: "primary",
                      hover: "text",
                      hoverVariant: "primary",
                    },
                  }}
                >
                  {isMobileNavbarExpanded ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
      <ExpandedMobileNavbar />
    </>
  );
};

export default Navbar;
