import React, { useEffect, useState } from "react";
import { Grid, Box, Container, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@components/navigation/Link";
import kebabCase from "lodash/kebabCase";

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
    // width: "80%",
    // marginInline: "auto",
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
  const classes = useCardStyles({ variant });
  // console.log({ classes });
  // console.log({ data });
  // check if image is present ?
  const image = data.images
    ? data.images[0].original_url
    : "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png";
  return (
    <Box className={classes.cardContainer}>
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
        <Grid className={classes.listingContainer} container item xs={12} spacing={2}>
          {renderAllProducts()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductListingSection;
