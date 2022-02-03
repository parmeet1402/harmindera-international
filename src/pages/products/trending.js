import React from "react";
import { graphql } from "gatsby";
import SingleProductCategoryContainer from "@containers/single-product-category";
import Layout, { SEO } from "@components/layout";

const TrendingPage = ({
  data: {
    allContentfulProduct: { edges: products },
  },
  ...props
}) => {
  // console.log({ products, categoryName });
  return (
    <Layout>
      <SEO
        title={`Trending Products`}
        description={`List of Trending Products by Harmindra International`}
      />
      <SingleProductCategoryContainer products={products} categoryName={"Trending"} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulProduct(filter: { isTrending: { eq: true } }) {
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

export default TrendingPage;
