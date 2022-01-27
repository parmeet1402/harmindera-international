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
import { Container, Paper } from "@material-ui/core";
import { TextButton } from "@components/form/Button";
import { ArrowIcon } from "@content/assets/CustomIcon";
import Link from "@components/navigation/Link";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    paddingBottom: theme.spacing(8),
    background: theme.palette.common.white,

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingBottom: theme.spacing(20), // TODO: check if 12 is required
      background: theme.palette.grey["100"],
    },
  },

  headingContainer: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(12),
    },
  },

  heading: {
    marginBottom: theme.spacing(1),
    color: theme.palette.common.black,
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
  },
  subHeading: {
    color: theme.palette.text.secondary,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    rowGap: theme.spacing(2),
    columnGap: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",

    // display: "grid",
    // gridTemplateColumns: "repeat(2, 1fr)",
    // gridTemplateRows: "repeat(2, 1fr)",
    // gap: theme.spacing(4),

    // width: "max-content",
    // marginTop: theme.spacing(6),
    // marginLeft: "auto",
    // marginRight: "auto",
    // textAlign: "center",

    "@media only screen and (min-width:550px)": {
      // gridTemplateColumns: "repeat(1, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      gridTemplateColumns: "repeat(2, 1fr)",
      width: "max-content",
    },
    "@media only screen and (min-width:1150px)": {
      rowGap: theme.spacing(5),
      columnGap: theme.spacing(4),
      // gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  card: {
    width: "100%",
    height: "430px",
    padding: theme.spacing(5, 4),
    position: "relative",
    background: theme.palette.grey["100"],
    [theme.breakpoints.up("md")]: {
      width: "clamp(300px,40vw,430px)",
      height: "430px",
      background: theme.palette.common.white,
    },
    "@media only screen and (min-width:1150px)": {
      height: "500px",
    },
  },
  cardLink: {
    position: "absolute",
    bottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    color: theme.palette.primary.main,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid transparent`,
    "&:hover": {
      // background: "red",
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
  cardHeading: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

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

const Card = ({ data }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <Image src={data.image} alt={data.title} />
      <Box textAlign="left" mt={5}>
        <Typography className={classes.cardHeading} variant="h5">
          {data.title}
        </Typography>
        <Typography variant="subtitle1">{data.text}</Typography>
        <Link className={classes.cardLink} href="/about-us" underline="none">
          Read More&nbsp;&nbsp;
          <ArrowIcon direction="right" />
        </Link>
      </Box>
    </Paper>
  );
};
const AboutUsSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="auto">
      <Box className={classes.headingContainer}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
      </Box>
      <div className={classes.grid}>
        {content.aboutCards.map((card, index) => (
          <Card data={card} />
        ))}
      </div>
    </Container>
  );
};

// DONE: add icons
// DONE: static content for the section

// DONE: Create grid ui
// DONE: add Single card UI
// DONE: Map with real data

// TODO: Redirect to sections in about page

export default AboutUsSection;
