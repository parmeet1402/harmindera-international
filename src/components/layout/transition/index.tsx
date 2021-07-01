import React, { ReactChild, ReactChildren, ReactNode } from "react";

// Material UI
import makeStyles from "@material-ui/core/styles/makeStyles";

// External
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@reach/router";
import clsx from "clsx";

interface Props {
  children: ReactChildren | ReactChild | ReactNode;
}

const useStyles = makeStyles(theme => ({
  cover: {
    position: "fixed",
    height: "100vh",
    width: "100vw",
    top: "0",
    left: "-100vw",
    zIndex: 2000,
  },
  cover1: {
    backgroundColor: theme.palette.primary.dark,
    zIndex: 2003,
  },
  cover2: {
    backgroundColor: theme.palette.secondary.main,
    zIndex: 2002,
  },
  cover3: {
    backgroundColor: "blue",
    zIndex: 2001,
  },
}));

const Transition = (props: Props) => {
  const { pathname } = useLocation();
  const classes = useStyles();

  const cover1Styles = clsx(classes.cover, classes.cover1);
  const cover2Styles = clsx(classes.cover, classes.cover2);
  const cover3Styles = clsx(classes.cover, classes.cover3);
  const currentScreenWidth = window.innerWidth;

  const variants = {
    initial: {
      x: currentScreenWidth,
    },
    animate: {
      x: 0,
    },
  };

  const duration = 0.5;

  return (
    <AnimatePresence>
      <motion.div
        className={cover1Styles}
        key={`${pathname}-1`}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: duration, easings: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={cover2Styles}
        key={`${pathname}-2`}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: duration, delay: 0.4, easings: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={cover3Styles}
        key={`${pathname}-3`}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: duration, delay: 0.8, easings: "easeInOut" }}
      ></motion.div>
      <>{props.children}</>
    </AnimatePresence>
  );
};

export default Transition;
