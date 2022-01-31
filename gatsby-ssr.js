import "@fontsource/poppins";
import React from "react";

import TopLayout from "./plugins/gatsby-plugin-top-layout/TopLayout";

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};

export const onRouteUpdate = ({ location }) => {
  if (location.hash) {
    setTimeout(() => {
      document
        .querySelector(`${location.hash}`)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }
};
