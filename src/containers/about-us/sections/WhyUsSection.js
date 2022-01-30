import React from "react";
import Image from "@components/Image";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(theme => ({
  checkIcon: {
    color: theme.palette.success.main,
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4rem",
      marginLeft: theme.spacing(3),
    },
  },
  container: {
    textAlign: "left",
    maxWidth: "1020px",
    marginBlock: theme.spacing(2, 8),
    [theme.breakpoints.up("md")]: {
      marginBlock: theme.spacing(20, 40),
    },
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
  grid: {
    display: "grid",
    rowGap: "1rem",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateAreas: `"H H H H H H H H"
    "I I I I I I I I"
    "D D D D D D D D"
    "L L L L L L L L"
    `,
    [theme.breakpoints.up("md")]: {
      gridTemplateAreas: `"H H H H H H H H"
      "D D D D D L L L"
      "I I I I I I I I"
      `,
      // columnGap: "1rem",
    },
  },
  headingContainer: {
    gridArea: "H",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  imageContainer: {
    gridArea: "I",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginInline: "auto",
    },
    "&>div": {
      width: "100% !important",
      objectFit: "cover",
      borderRadius: theme.shape.borderRadius,
    },
  },
  descriptionContainer: {
    gridArea: "D",
    [theme.breakpoints.up("md")]: {
      // marginTop: theme.spacing(2),
      marginBottom: theme.spacing(10),
      width: "80%",
      marginInline: "auto",
    },
  },
  listContainer: {
    gridArea: "L",
    [theme.breakpoints.up("md")]: {
      height: "160px",
    },
  },
}));

const WhyUsSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="none">
      <div className={classes.grid}>
        <div id="why-us" className={classes.headingContainer}>
          <Typography variant="h3" className={classes.heading}>
            Why Us?
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <Image src="factory.png" alt="Factory" width="100%" />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography>
            We are the preferred choice of our customers owing to the rich customer experience,
            competitive prices in the industry and fulfilling the commitments through our passion
            and grit. Our wide distribution network across the world enables us to provide our
            esteemed customers with timely deliveries. We have a dedicated sales support team who
            are available 24/7 to resolve your queries and provide you with assistance.
          </Typography>
        </div>
        <Grid container className={classes.listContainer}>
          {/*  <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Rich Customer Experience</Typography>
          </Grid> */}
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Competitive Prices</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Wide distribution network</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Timely Deliveries</Typography>
          </Grid>
          {/* <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Dedicated Sales Support team</Typography>
          </Grid> */}
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Highly Customizable Products</Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default WhyUsSection;
