import React from "react";
import { graphql } from "gatsby";
import Layout, { SEO } from "@components/layout";
import SingleProductContainer from "@containers/single-product";

const SingleProduct = ({ data: { contentfulProduct: product } }) => {
  return (
    <Layout>
      <SEO />
      <SingleProductContainer product={product} />
    </Layout>
  );
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
      packagingQuantity
    }
  }
`;

export default SingleProduct;
