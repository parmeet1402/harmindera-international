import React from "react";
import Layout, { SEO } from "@components/layout";
import LandingContainer from "@containers/landing";
import { Helmet } from "react-helmet";

const LandingPage = (props: any) => {
  // console.log({ props });
  return (
    <Layout>
      <SEO />
      <Helmet>
        <meta
          name="google-site-verification"
          content="XGwn9uS-T99EQBc7lhJRjTTnV0C7fd8DHuv2j7fvKf0"
        />
      </Helmet>
      <LandingContainer />
    </Layout>
  );
};

export default LandingPage;
