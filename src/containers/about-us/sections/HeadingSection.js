import React from "react";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    background: theme.palette.common.white,
    paddingBlock: "clamp(32px, 5vw, 64px)",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
}));

const HeadingSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="auto">
      <Typography variant="h2">
        We are
        <br />
      </Typography>
      <Typography variant="h2" color="primary">
        Harmindra International.
      </Typography>
    </Container>
  );
};

export default HeadingSection;
