import React from "react";
import Layout, { SEO } from "@components/layout";
import AboutUsContainer from "@containers/about-us/index";

const AboutUsPage = () => {
  return (
    <Layout>
      <SEO title="About Us" description="Brief information about Harmindra International" />
      <AboutUsContainer />
    </Layout>
  );
};

export default AboutUsPage;
