import React from "react";
import { ProductListingSection } from "./sections";

const SingleProductCategoryContainer = ({ products, categoryName }) => {
  return (
    <>
      <ProductListingSection products={products} categoryName={categoryName} />
    </>
  );
};

export default SingleProductCategoryContainer;
