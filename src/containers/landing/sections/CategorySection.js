import React from "react";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {
  Trending as TrendingIcon,
  JCB as JCBIcon,
  Rickshaw as RickshawIcon,
  Bolt as BoltIcon,
  Nut as NutIcon,
  Tractor as TractorIcon,
} from "@content/assets/CustomIcon";
import { Container } from "@material-ui/core";
import Link from "@components/navigation/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import kebabCase from "lodash/kebabCase";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    paddingBottom: theme.spacing(8),
    background: theme.palette.common.white,
    // background: "green",

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(36),
      background: `linear-gradient(180deg, rgba(49, 98, 189, 0) 0%, rgba(49, 98, 189, 0.25) 100%)`,
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
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
  },
  subHeading: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    rowGap: theme.spacing(2),
    columnGap: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",

    "@media only screen and (min-width:550px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      width: "max-content",
      rowGap: theme.spacing(5),
      columnGap: theme.spacing(4),
    },
  },
  breadcrumb: {
    margin: theme.spacing(3, 0, -3),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  breadcrumbLinks: {
    fontSize: "14px",
  },
}));

const content = {
  heading: "Categories",
  subHeading: "We deal in a wide range of products",
  categories: [
    {
      name: "Trending",
      icon: <TrendingIcon />,
      slug: "/categories/trending",
      bgColor: "#A0D69A",
    },
    {
      name: "JCB Parts",
      icon: <JCBIcon />,
      slug: "/categories/jcb",
      bgColor: "#FCA88B",
    },
    {
      name: "Auto Parts",
      icon: <RickshawIcon />,
      slug: "/categories/auto-parts",
      bgColor: "#9EBEF1",
    },
    {
      name: "Nut",
      icon: <NutIcon />,
      slug: "/categories/nut",
      bgColor: "#8CDBF9",
    },
    {
      name: "Bolt",
      icon: <BoltIcon />,
      slug: "/categories/bolt",
      bgColor: "#BCA1F2",
    },
    {
      name: "Agriculture Parts",
      icon: <TractorIcon />,
      slug: "/categories/tractor",
      bgColor: "#A3E3DA",
    },
  ],
};

const useCategoryStyles = makeStyles(theme => ({
  categoryCard: {
    background: props => props.bgColor,
    width: "100%",
    aspectRatio: "1.12",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.up("md")]: {
      height: theme.spacing(25),
      width: theme.spacing(28),
    },
  },
  label: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(1),
  },
}));

const CategoryCard = ({ data }) => {
  const handleCategoryClick = () => {
    console.log(data.slug);
  };
  const classes = useCategoryStyles(data);
  return (
    <Box onClick={handleCategoryClick} className={classes.categoryCard}>
      {data.icon}
      <Typography variant="subtitle1" className={classes.label}>
        {data.name}
      </Typography>
    </Box>
  );
};

const CategorySection = props => {
  const classes = useStyles();

  return (
    <Container name="landing__category-section" className={classes.container} maxWidth="auto">
      {props.showBreadcrumbs && (
        <Breadcrumbs separator=">" aria-label="breadcrumb" className={classes.breadcrumb}>
          <Link className={classes.breadcrumbLinks} color="primary" href="/">
            Home
          </Link>
          <Typography className={classes.breadcrumbLinks} color="textPrimary">
            Products
          </Typography>
        </Breadcrumbs>
      )}
      <Box className={classes.headingContainer}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
      </Box>
      <div className={classes.grid}>
        {content.categories.map(category => (
          <CategoryCard key={category.name} data={category} />
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;
