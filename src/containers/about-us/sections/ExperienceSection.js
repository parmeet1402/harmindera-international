import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "@components/Image";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
  },
  heading: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    rowGap: "1rem",
  },
  headingContainer: {
    gridColumn: "span 6",
  },
  imageContainer: {
    gridColumn: "span 6",
    width: "100%",
    "&>div": {
      width: "100% !important",
      objectFit: "cover",
    },
  },
  descriptionContainer: {
    gridColumn: "span 6",
  },
}));

const ExperienceSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="auto">
      <div className={classes.grid}>
        <div className={classes.headingContainer}>
          <Typography variant="h2" component="h2" className={classes.heading}>
            58+ Years of Industrial Experience
          </Typography>
        </div>
        <div className={classes.imageContainer}>
          <Image src="factory.png" width="100%" />
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
