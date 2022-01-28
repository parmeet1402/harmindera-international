import React from "react";
import Layout, { SEO } from "@components/layout";
import ContactUsContainer from "@containers/contact-us";

const ContactUsPage = () => {
  return (
    <Layout>
      <SEO />
      <ContactUsContainer />
    </Layout>
  );
};

export default ContactUsPage;
