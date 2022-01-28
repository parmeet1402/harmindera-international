import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Image from "@components/Image";
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
      marginBottom: theme.spacing(6),
      width: "80%",
      marginInline: "auto",
    },
  },
  listContainer: {
    gridArea: "L",
    [theme.breakpoints.up("md")]: {
      height: "250px",
    },
  },
}));

const QualitySection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="none">
      <div className={classes.grid}>
        <div className={classes.headingContainer}>
          <Typography variant="h3" className={classes.heading}>
            Quality Products
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <Image src="factory.png" alt="Factory" width="100%" />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography>
            For our firm, quality is at the top of our priority list and this is why the firm has an
            in house quality assurance team whose duty is to closely monitor the manufacturing
            process and make sure no compromises are made in terms of quality or consistency. As per
            client requirements these benchmarks and constraints can be adjusted as well. Owing to
            their excellent quality, our entire product range is used in varied industrial
            applications like mining, automobile, construction, etc. In order to achieve the maximum
            client satisfaction, we keep our products and their delivery options highly customizable
            and flexible.
          </Typography>
        </div>
        <Grid container className={classes.listContainer}>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Flawless Quality</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>In-house Quality testing unit</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Highly Customizable Products</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Supervision of quality controllers</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Client friendly policies</Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>
          <Grid item xs={11} md={10}>
            <Typography>Right Packing</Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default QualitySection;
