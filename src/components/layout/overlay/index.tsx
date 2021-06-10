import React, { useState, useEffect } from "react";
import { Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useUIStore from "@zustand/ui";
// interface Props {}

const useStyles = makeStyles(theme => ({
  root: { zIndex: theme.zIndex.backdrop },
}));

const Overlay = () => {
  const { isBackdropVisible } = useUIStore();

  useEffect(() => {
    if (isBackdropVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBackdropVisible]);

  const { root } = useStyles();

  return <Backdrop classes={{ root }} open={isBackdropVisible} />;
};

export default Overlay;
