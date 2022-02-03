import React from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import useTheme from "@material-ui/core/styles/useTheme";
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
import { Box, Hidden, makeStyles } from "@material-ui/core";

interface Props {
  window?: () => Window;
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Navbar = (props: Props) => {
  const { window } = props;

  const { isMobileNavbarExpanded, expandMobileNavbar, shrinkMobileNavbar } = useUIStore();
  const theme = useTheme();

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  // Handle navbar open and close for mobile navbar
  const handleHamburgerMenuClick = () => {
    if (isMobileNavbarExpanded) {
      shrinkMobileNavbar();
    } else {
      expandMobileNavbar();
    }
  };

  const classes = useStyles();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="secondary">
          <Toolbar className={classes.toolbar}>
            {/* Left */}
            <Box display="flex" alignItems="center">
              <Link href="/" underline="none">
                <Logo />
              </Link>
              <Hidden xsDown implementation="css">
                <Links />
              </Hidden>
            </Box>

            <Hidden smUp implementation="css">
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
            </Hidden>

            <Hidden xsDown implementation="css">
              {/* Right */}
              <Box ml="auto">
                <SolidButton href="/contact" size="small">
                  Let's Work
                </SolidButton>
              </Box>
              {/* <ExpandableSearchField /> */}
            </Hidden>
          </Toolbar>
        </AppBar>
      </Slide>
      <ExpandedMobileNavbar />
    </>
  );
};

export default Navbar;
