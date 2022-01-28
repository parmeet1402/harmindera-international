import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { SolidButton } from "@components/form/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
  },
  heading: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(6),
      fontWeight: 900,
      fontSize: "1.78rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "2.56rem",
    },
  },
  headingContainer: {
    gridArea: "H",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  buttonContainer: {
    width: "100%",
    marginBlock: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      width: "20rem",
      marginInline: "auto",
      marginBlock: theme.spacing(8, 16),
    },
  },
  // container: {},
}));

const ContactUsSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="none">
      <div className={classes.headingContainer}>
        <Typography variant="h3" className={classes.heading}>
          Let's Work
        </Typography>
      </div>
      <Box className={classes.buttonContainer}>
        <SolidButton fullWidth>Contact Us</SolidButton>
      </Box>
    </Container>
  );
};

export default ContactUsSection;
