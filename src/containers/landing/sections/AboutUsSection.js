import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Image from "@components/Image";

const useStyles = makeStyles(theme => ({}));

const content = {
  heading: "About Us",
  subHeading: "Know about the company",
  aboutCards: [
    {
      title: "59+ Years of experience",
      text:
        "Harmindera International was established in the year 1960, as a renowned name in the industry as a manufacturer and supplier of JCB Parts, Auto Parts, Agriculture Parts and Bolts. ",
      linkText: "Read More",
      image: "experience.png",
    },
    {
      title: "Why us?",
      text:
        "We are the preferred choice of our customers owing to the rich customer experience, competitive prices in the industry and fulfilling the commitments through our passion and grit.",
      linkText: "Read More",
      image: "partnership.png",
    },
    {
      title: "Infrastructure",
      text:
        "We at Nirmal Sales frequently keep investing into our manufacruring units to ensure maximum quality and output in the shortest span of time.     ",
      linkText: "Read More",
      image: "conveyor-belt.png",
    },
    {
      title: "Quality",
      text:
        "The firm has an in house quality assurance team whose duty is to closely monitor the manufacturing process and make sure that no compromises are made in the quality of products.",
      linkText: "Read More",
      image: "quality.png",
    },
  ],
};

const AboutUsSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box pt={12}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
      </Box>
      <div className="grid">
        {content.aboutCards.map((card, index) => (
          <div>
            {card.title}
            </div>
        ))}
      </div>
    </Box>
  );
};

// DONE: add icons
// DONE: static content for the section

// TODO: Create grid ui
// TODO: add Single card UI
// TODO: Map with real data

// TODO: Redirect to sections in about page

export default AboutUsSection;
