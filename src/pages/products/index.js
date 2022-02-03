import React from "react";
import Layout, { SEO } from "@components/layout";
import AllCategoriesContainer from "@containers/all-categories";

const AllCategories = () => {
  return (
    <Layout>
      <SEO
        title="Products"
        description="Contains all the product categories manufactured by Harmindra International"
      />
      <AllCategoriesContainer />
    </Layout>
  );
};

export default AllCategories;
