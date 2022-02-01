import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@components/navigation/Link";
import kebabCase from "lodash/kebabCase";
import { navigate } from "gatsby";

const useStyles = makeStyles(theme => ({
  container: {},
  headingContainer: {
    marginBlock: theme.spacing(10, 7),
  },
  listingContainer: {
    marginBlock: theme.spacing(0, 20),
    marginInline: "auto",
  },
  breadcrumb: {
    margin: theme.spacing(3, 1, 1),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 1, 2),
    },
  },
  breadcrumbLinks: {
    fontSize: "14px",
  },
}));

const useCardStyles = makeStyles(theme => ({
  cardContainer: {
    cursor: "pointer",

    "&:hover img": {
      transform: "translate(-50%, -50%) scale(1.15)",
    },
    "&:hover div:first-of-type": {
      background: props =>
        props.variant === "dark" ? theme.palette.grey[200] : theme.palette.grey[100],
    },
  },
  card: {
    width: "100%",
    paddingTop: "110%",
    position: "relative",
    borderRadius: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    background: props =>
      props.variant === "dark" ? theme.palette.grey[100] : theme.palette.common.white,
    transition: "background 0.3s ease-out",
  },
  ratioContainer: {
    width: "100%",
  },

  cardImage: {
    height: "200px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.3s ease-out",
    objectFit: "contain",
    maxWidth: props => (props.category === "Nut" ? "150px" : "200px"),
  },
  name: {
    color: props =>
      props.variant === "dark" ? theme.palette.common.black : theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
  categoryName: {
    color: props =>
      props.variant === "dark" ? theme.palette.common.black : theme.palette.common.white,
  },
  chevronWrapper: {
    WebkitTapHighlightColor: "transparent",
  },
}));

// todo: make it flexible for inverted theme as well
// todo: add default images for each category
const SingleProduct = ({ data, variant }) => {
  const classes = useCardStyles({ variant, category: data.category.name });
  // console.log({ classes });
  // console.log({ data });
  // check if image is present ?
  const image = data.images
    ? data.images[0].original_url
    : "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png";
  const handleProductCardClick = () => {
    navigate(`/products/${kebabCase(data.category.name)}/${data.slug}`);
  };

  return (
    <Box className={classes.cardContainer} onClick={handleProductCardClick}>
      <Box className={classes.card}>
        <img src={image} className={classes.cardImage} alt={data.name} />
      </Box>
      <Box mt={1} textAlign="left">
        <Typography variant="h6" className={classes.name}>
          {data.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.categoryName}>
          {data.category.name}
        </Typography>
      </Box>
    </Box>
  );
};

const ProductListingSection = ({ products, categoryName }) => {
  const classes = useStyles();

  const renderAllProducts = () =>
    products.map(product => (
      <Grid item xs={12} md={4} lg={3}>
        <SingleProduct data={product.node} variant="dark" />
      </Grid>
    ));

  return (
    <Container>
      <Breadcrumbs separator=">" aria-label="breadcrumb" className={classes.breadcrumb}>
        <Link className={classes.breadcrumbLinks} color="primary" href="/">
          Home
        </Link>
        <Link className={classes.breadcrumbLinks} color="primary" href="/products/">
          Products
        </Link>
        <Typography className={classes.breadcrumbLinks} color="textPrimary">
          {categoryName}
        </Typography>
      </Breadcrumbs>
      <Grid container>
        <Grid item xs={12} className={classes.headingContainer}>
          <Typography align="center" variant="h3">
            {categoryName}
          </Typography>
        </Grid>
        <Grid className={classes.listingContainer} container item xs={12} spacing={4}>
          {renderAllProducts()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductListingSection;
