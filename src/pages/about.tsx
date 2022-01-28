import React from "react";
import Layout, { SEO } from "@components/layout";
import AboutUsContainer from "@containers/about-us/index";

const AboutUsPage = () => {
  return (
    <Layout>
      <SEO />
      <AboutUsContainer />
    </Layout>
  );
};

export default AboutUsPage;
