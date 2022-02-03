import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { SolidButton } from "@components/form/Button";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  button: {
    marginTop: theme.spacing(12),
  },
  heading: {
    fontSize: "8rem",
    marginBottom: 0,
    [theme.breakpoints.up("lg")]: {
      fontSize: "12rem",
      marginBottom: "-1rem",
    },
  },
}));

const PageNotFoundContainer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.heading}>
        404
      </Typography>
      <Typography variant="h4">Page not found</Typography>
      <SolidButton className={classes.button} href="/">
        Go Home
      </SolidButton>
    </Container>
  );
};

export default PageNotFoundContainer;
