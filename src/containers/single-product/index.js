import React from "react";
import { ProductDetails } from "./sections";
import { ContactUsSection } from "@containers/landing/sections";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  contactUsContainer: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(20),
    },
  },
}));

const SingleProductContainer = ({ product }) => {
  const classes = useStyles();
  return (
    <>
      <ProductDetails product={product} />
      <Box className={classes.contactUsContainer}>
        <ContactUsSection />
      </Box>
    </>
  );
};

// DONE: Add Breadcrumb section -- make it global
// DONE: ProductDetails Section
// TODO: add Contact us section -- make it global
// TODO: Option to prefill contact us message

export default SingleProductContainer;
