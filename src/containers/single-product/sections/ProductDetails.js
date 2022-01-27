import React, { useEffect, useState } from "react";
import { SolidButton } from "@components/form/Button";
import {
  Box,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { ClockIcon, DeliveryTruckIcon, ShieldIcon } from "@content/assets/CustomIcon";

// Format functions
const getStringFromType = (obj, valueKey = "name") => obj[valueKey];

const getStringFromTypeArray = (
  material,
  { separator = ",", valueKey = "name" } = { separator: ", ", valueKey: "name" },
) => {
  const materials = material.map(value => getStringFromType(value, valueKey));
  return materials.join(separator);
};

const useStyles = makeStyles(theme => ({
  container: {
    // background: "red",
  },

  cardContainer: {
    marginTop: theme.spacing(2),
  },
  cardImage: {
    height: "250px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
    background: theme.palette.grey[100],
  },

  nameContainer: {
    marginTop: theme.spacing(2),
  },
  category: {
    color: theme.palette.primary.main,
  },
  product: {
    marginTop: theme.spacing(-1.6),
  },
  label: {
    color: theme.palette.grey["500"],
  },
  detailsRow: {
    width: "85%",
    marginRight: "auto",
    marginLeft: theme.spacing(1),
  },
  ctaButtonContainer: {
    marginLeft: theme.spacing(2),
    marginBlock: theme.spacing(2),
  },
  featureContainer: {
    textAlign: "center",
  },
  sizeRow: {
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  detailsSection: {
    marginTop: theme.spacing(1),
  },
}));

const ProductDetails = ({ product }) => {
  const classes = useStyles();

  console.log({ product });

  const image = product.images
    ? product.images[0].original_url
    : "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png";

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box className={classes.cardContainer}>
            <Box className={classes.card}>
              <img src={image} className={classes.cardImage} alt={product.name} />
            </Box>
          </Box>
        </Grid>
        <Grid container item xs={12} sm={6} spacing={2} className={classes.detailsSection}>
          <Grid item xs={12} className={classes.nameContainer}>
            <Typography className={classes.category}>{product.category.name}</Typography>
            <Typography variant="h3" className={classes.product}>
              {product.name}
            </Typography>
          </Grid>
          {product.material && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Material</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  {getStringFromTypeArray(product.material, { separator: "/" })}
                </Typography>
              </Grid>
            </Grid>
          )}
          {product.brand && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Brand</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{getStringFromType(product.brand)}</Typography>
              </Grid>
            </Grid>
          )}
          {product.finish && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Finish</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{getStringFromTypeArray(product.finish)}</Typography>
              </Grid>
            </Grid>
          )}
          {product.threadType && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Thread Type</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{getStringFromType(product.threadType)}</Typography>
              </Grid>
            </Grid>
          )}
          {product.tensileStrength && product.tensileStrength > 0 && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Tensile Strength</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{product.tensileStrength}</Typography>
              </Grid>
            </Grid>
          )}
          {product.whole && product.whole > 0 && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Whole</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{product.whole}</Typography>
              </Grid>
            </Grid>
          )}
          {product.headType && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Head Type</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{getStringFromType(product.headType)}</Typography>
              </Grid>
            </Grid>
          )}

          {product.shape && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Shape</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{getStringFromType(product.shape)}</Typography>
              </Grid>
            </Grid>
          )}
          {product.packagingQuantity && parseInt(product.packagingQuantity) > 0 && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Packaging</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  {product.packagingQuantity} {product.quantityUnit.unit}/
                  {product.packagingType.name}
                </Typography>
              </Grid>
            </Grid>
          )}

          {product.sizes && (
            <Grid container item xs={12} spacing={2} className={classes.detailsRow}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Sizes</Typography>
              </Grid>
              <Grid item xs={8} className={classes.sizeRow}>
                {product.sizes.map(size => (
                  <Chip size="small" variant="outlined" key={size} label={size} />
                ))}
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} spacing={2} className={classes.ctaButtonContainer}>
            <SolidButton fullWidth>Contact Us</SolidButton>
          </Grid>
          <Grid className={classes.featureContainer} container item xs={12}>
            <Grid container item xs={4}>
              <Grid item xs={12}>
                <ShieldIcon />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Product Quality</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={4}>
              <Grid item xs={12}>
                <DeliveryTruckIcon />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Fast Delivery</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={4}>
              <Grid item xs={12}>
                <ClockIcon />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">24/7 Support</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

// ---- DONE: Add Slideshow Section
// ---- TODO: Add Details Section
// --------DONE: Add Heading and SubHeading Section
// -------- Done: Add List Section
// -------- Done: Add Button Section
// -------- TODO: Add Feature Section

export default ProductDetails;
