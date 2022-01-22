import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

const useStyles = makeStyles(theme => ({
  container: {
    // height: "calc(100vh - 68px)",
    height: "100vh",
    textAlign: "center",
    // background: "red",
    background: `linear-gradient(180deg, rgba(49, 98, 189, 0) 0%, rgba(49, 98, 189, 0.25) 100%)`,
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
  subHeading: {},

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    rowGap: theme.spacing(5),
    columnGap: theme.spacing(4),

    width: "max-content",
    marginTop: theme.spacing(6),
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
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
      name: "Trending",
      icon: <RickshawIcon />,
      slug: "/categories/auto-parts",
      bgColor: "#9EBEF1",
    },
    {
      name: "Trending",
      icon: <NutIcon />,
      slug: "/categories/nut",
      bgColor: "#8CDBF9",
    },
    {
      name: "Trending",
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
    height: theme.spacing(25),
    width: theme.spacing(28),

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: theme.shape.borderRadius,
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

const CategorySection = () => {
  // const {
  //   allContentfulProductCategory: { nodes: productCategoriesObjects },
  // } = useStaticQuery(graphql`
  //   query CategoryQuery {
  //     allContentfulProductCategory {
  //       nodes {
  //         name
  //       }
  //     }
  //   }
  // `);
  // const productCategories = productCategoriesObjects.map(productCategory => productCategory.name);
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
      <div className={classes.grid}>
        {content.categories.map(category => (
          <CategoryCard key={category.name} data={category} />
        ))}
      </div>
    </Box>
  );
};

export default CategorySection;
