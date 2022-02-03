import React from "react";
import Layout, { SEO } from "@components/layout";
import PageNotFoundContainer from "@containers/page-not-found";

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="Page not found" description="Page not found" />
      <PageNotFoundContainer/>
    </Layout>
  );
};

export default PageNotFound;
