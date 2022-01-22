import React from "react";
import Layout, { SEO } from "@components/layout";
import LandingContainer from "@containers/landing";

const LandingPage = (props: any) => {
  console.log({ props });
  return (
    <Layout>
      <SEO />
      <LandingContainer />
    </Layout>
  );
};

export default LandingPage;
