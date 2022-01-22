import React from "react";
import Layout, { SEO } from "@components/layout";
import LandingContainer from "@containers/landing";

const LandingPage = () => {
  return (
    <Layout>
      <SEO />
      <LandingContainer />
    </Layout>
  );
};

export default LandingPage;
