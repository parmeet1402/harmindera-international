import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "@content/assets/CustomIcon";
import ExpandableSearchField from "@components/form/ExpandableSearchField";
import Links from "./links";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { IconButton } from "@components/form/Button";
import useUIStore from "@zustand/ui";

const Navbar = () => {
  const theme = useTheme();
  const { isMobileNavbarExpanded, expandMobileNavbar, shrinkMobileNavbar } = useUIStore();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleIconButtonClick = () => {
    if (isMobileNavbarExpanded) {
      shrinkMobileNavbar();
    } else {
      expandMobileNavbar();
    }
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Logo />
        {!isMobile ? (
          <>
            <Links />
            <ExpandableSearchField />
          </>
        ) : (
          <>
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={handleIconButtonClick}
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
  );
};

export default Navbar;