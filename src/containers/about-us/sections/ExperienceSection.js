import React from "react";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "@components/Image";

const useStyles = makeStyles(theme => ({
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
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateAreas: `"H H H H H H"
    "I I I I I I"
    "T T T T T T"`,
    [theme.breakpoints.up("md")]: {
      gridTemplateAreas: `"H H H H H H"
      "T T T I I I"`,
      columnGap: "5rem",
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
    "&>div": {
      width: "100% !important",
      objectFit: "cover",
      borderRadius: theme.shape.borderRadius,
    },
  },
  descriptionContainer: {
    gridArea: "T",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      // textAlign: "center",
      width: "85%",
      marginLeft: "auto",
    },
  },
  midSizeAndHigherDevicesOnly: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const ExperienceSection = () => {
  const classes = useStyles();
  return (
    <Container id="experience" className={classes.container} maxWidth="auto">
      <div className={classes.grid}>
        <div className={classes.headingContainer}>
          <Typography variant="h3" className={classes.heading}>
            58+ Years of <br className={classes.midSizeAndHigherDevicesOnly} /> Industrial
            Experience
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <Image src="factory.png" width="100%" alt="Factory" />
        </div>
        <div className={classes.descriptionContainer}>
          <Typography>
            Nirmal Sales was established in the year 1960, as a renowned name in the industry as a
            manufacturer and supplier of JCB Parts, Auto Parts, Agriculture Parts, Nuts and Bolts.
            Our entire range is held in high regard for its exceptional quality and correctness. The
            products are widely known for its high strength, accurate dimensions, wear and tear
            resistance, flexible delivery and durable finish.{" "}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
