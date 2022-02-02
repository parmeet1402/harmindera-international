import React from "react";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Star as StarIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    maxWidth: "1020px",
    marginBlock: theme.spacing(2, 8),
    [theme.breakpoints.up("md")]: {
      marginBlock: theme.spacing(20, 40),
    },
  },
  headingContainer: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(6),
      fontWeight: 900,
      fontSize: "1.78rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "2.56rem",
      marginBottom: theme.spacing(8),
    },
  },
  subHeading: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "1.1rem",
    color: theme.palette.common.black,
    [theme.breakpoints.up("md")]: {
      fontSize: "0.78rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "1.06rem",
      marginBottom: theme.spacing(1),
      height: "60px",
      //   "-webkit-line-clamp": "2",
    },
  },
  listItemContainer: {
    // marginLeft: theme.spacing(0.5),
    marginBlock: theme.spacing(0.8),
    color: theme.palette.grey["500"],
    fontSize: "0.5rem",

    [theme.breakpoints.up("md")]: {
      fontSize: "0.5rem",
      marginInline: "auto",
      paddingInline: "0.5rem",
      marginBlock: 0,
    },
    "@media only screen and (min-width: 1150px)": {
      //   paddingInline: "1rem",
    },
  },
  starIcon: {
    fontSize: "1.6rem",
    // color: "#f9cb00",
    color: theme.palette.warning.main,
    marginBottom: "-0.2rem",
    marginLeft: "-0.1rem",
    marginRight: "0.3rem",
  },
}));

const InfrastructureSection = () => {
  const classes = useStyles();
  return (
    <Container id="infrastructure" className={classes.container} maxWidth="auto">
      <Grid container style={{ alignItems: "flex-start" }}>
        <Grid item xs={12} className={classes.headingContainer}>
          <Typography variant="h3" className={classes.heading}>
            Infrastructure
          </Typography>
        </Grid>
        <Grid container xs={11} md={4} className={classes.listItemContainer}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.subHeading}>
              <StarIcon className={classes.starIcon} />
              Modern and Well-Equipped Machinery
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              We at Harmindra International frequently keep investing into our manufacturing units
              to ensure maximum quality and output in the shortest span of time.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={11} md={4} className={classes.listItemContainer}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.subHeading}>
              <StarIcon className={classes.starIcon} />
              In House specialized manufacturing facilities
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              There's an in-house highly advanced and efficient CNC machinery unit. The firm also
              houses a top of the line forging workshop.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={11} md={4} className={classes.listItemContainer}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.subHeading}>
              <StarIcon className={classes.starIcon} />
              Highly proficient professionals
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Highly proficient professionals are there in our firm's manufacturing team who not
              only keep the production levels high but also make sure the quality is not compromised
              too.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfrastructureSection;
