import React from "react";
import { graphql } from "gatsby";
import SingleProductCategoryContainer from "@containers/single-product-category";
import Layout, { SEO } from "@components/layout";

const SingleProduct = ({
  data: {
    allContentfulProduct: { edges: products },
  },
  pageContext: { name: categoryName },
  ...props
}) => {
  // console.log({ products, categoryName });
  return (
    <Layout>
      <SEO />
      <SingleProductCategoryContainer products={products} categoryName={categoryName} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    allContentfulProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          id
          name
          slug
          category {
            name
          }
          images {
            original_url
          }
        }
      }
    }
  }
`;

// TODO: Map over products and return a list of products

export default SingleProduct;
