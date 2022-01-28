import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    background: theme.palette.common.white,
    paddingBlock: "clamp(32px, 6vw, 64px)",
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
        Harmindera International.
      </Typography>
    </Container>
  );
};

export default HeadingSection;
