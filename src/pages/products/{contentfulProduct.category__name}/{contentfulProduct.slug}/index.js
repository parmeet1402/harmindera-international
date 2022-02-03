import React from "react";
import { graphql } from "gatsby";
import Layout, { SEO } from "@components/layout";
import SingleProductContainer from "@containers/single-product";
import { upgradeToHTTPS } from "@utils/url";

const SingleProduct = ({ data: { contentfulProduct: product } }) => {
  const imgURL = product.images
    ? product.images[0].original_url
    : "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png";
  return (
    <Layout>
      <SEO
        title={`${product.name} - ${product.category.name}`}
        description={`Details of ${product.name} by Harmindra International`}
        image={upgradeToHTTPS(imgURL)}
        article
      />
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
      packagingQuantity
    }
  }
`;

export default SingleProduct;
