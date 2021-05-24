import React from "react";
import "@fontsource/poppins";
import TopLayout from "./plugins/gatsby-plugin-top-layout/TopLayout";

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
