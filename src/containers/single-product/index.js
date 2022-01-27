import React from "react";
import { ProductDetails } from "./sections";

const SingleProductContainer = ({ product }) => {
  return (
    <>
      <div style={{ marginLeft: 24 }}>Row/Row/Row</div>
      <ProductDetails product={product} />
    </>
  );
};

// TODO: Go back feature on mobile version
// TODO: Add Breadcrumb section -- make it global

// TODO: ProductDetails Section

// TODO: add Contact us section -- make it global

export default SingleProductContainer;
