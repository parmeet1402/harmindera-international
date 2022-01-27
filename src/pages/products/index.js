import React from "react";
import Layout, { SEO } from "@components/layout";
import AllCategoriesContainer from "@containers/all-categories";

const AllCategories = () => {
  return (
    <Layout>
      <SEO />
      <AllCategoriesContainer />
    </Layout>
  );
};

export default AllCategories;
