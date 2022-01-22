import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  box: {
    width: "200px",
    height: "200px",
    textAlign: "center",
  },
});

const DevelopColors = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Color 1
      </Typography>
      <Box mb={10}>
        <Grid container spacing={0}>
          <Box className={classes.box} bgcolor="primary.lighter"></Box>
          <Box className={classes.box} bgcolor="primary.light"></Box>
          <Box className={classes.box} bgcolor="primary.main"></Box>
          <Box className={classes.box} bgcolor="primary.dark"></Box>
        </Grid>
      </Box>
      <Typography variant="h3" gutterBottom>
        Text Colors
      </Typography>
      <Box mb={10}>
        <Grid container spacing={3}>
          <Box className={classes.box} bgcolor="success.light"></Box>
          <Box className={classes.box} bgcolor="success.main"></Box>
          <Box className={classes.box} bgcolor="success.dark"></Box>
        </Grid>
      </Box>
      <Typography variant="h3" gutterBottom>
        Success Colors
      </Typography>
      <Box mb={10}>
        <Grid container spacing={3}>
          <Box className={classes.box} bgcolor="success.light"></Box>
          <Box className={classes.box} bgcolor="success.main"></Box>
          <Box className={classes.box} bgcolor="success.dark"></Box>
        </Grid>
      </Box>

      <Typography variant="h3" gutterBottom>
        Error Colors
      </Typography>
      <Box mb={10}>
        <Grid container spacing={3}>
          <Box className={classes.box} bgcolor="error.light"></Box>
          <Box className={classes.box} bgcolor="error.main"></Box>
          <Box className={classes.box} bgcolor="error.dark"></Box>
        </Grid>
      </Box>

      <Typography variant="h3" gutterBottom>
        Warning Colors
      </Typography>
      <Box mb={10}>
        <Grid container spacing={3}>
          <Box className={classes.box} bgcolor="warning.light"></Box>
          <Box className={classes.box} bgcolor="warning.main"></Box>
          <Box className={classes.box} bgcolor="warning.dark"></Box>
        </Grid>
      </Box>
    </>
  );
};

export default DevelopColors;
