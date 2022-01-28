import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    paddingBlock: theme.spacing(4),
    background: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingBlock: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBlock: theme.spacing(8),
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
