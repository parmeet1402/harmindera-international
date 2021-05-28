import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "@content/assets/CustomIcon";
import ExpandableSearchField from "@components/form/ExpandableSearchField";
import Links from "./links";

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Logo />
        <Links />
        <ExpandableSearchField />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
