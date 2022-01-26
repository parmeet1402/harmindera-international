import React from "react";
import { graphql } from "gatsby";

const SingleProduct = ({ data }) => {
  console.log(JSON.stringify(data, null, 2));
  // required 
  return <div>Single Product</div>;
};

// DONE: get single product data
export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      name
      brand {
        name
      }
      category {
        name
      }
      finish {
        name
      }
      sizes
      slug
      threadType {
        name
      }
      material {
        name
      }
      images {
        original_url
      }
      headType {
        name
      }
      packagingType {
        name
      }
      quantityUnit {
        unit
      }
      shape {
        name
      }
      whole
    }
  }
`;

export default SingleProduct;
