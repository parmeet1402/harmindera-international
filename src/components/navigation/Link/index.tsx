import React from "react";
import { Link as GatsbyLink } from "gatsby";
// import GatsbyLink from "gatsby-plugin-transition-link";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Link as MaterialLink, LinkProps } from "@material-ui/core";

interface Props {
  href: string;
  children: React.ReactChildren | React.ReactNode;
}

const isActive = (props: { isCurrent: boolean }) => {
  return props.isCurrent ? { id: "active-link--nav" } : {};
};

const Link = (props: Props & LinkProps) => {
  const { href, children, ...restProps } = props;

  return (
    // @ts-ignore
    <MaterialLink
      color="textPrimary"
      variant="body2"
      component={GatsbyLink}
      // cover
      // direction="left"
      to={href}
      // duration={1}
      underline="none"
      getProps={isActive}
      // bg="#0803FC"
      {...restProps}
    >
      {children}
    </MaterialLink>
  );
};

/* <MaterialLink
      color="textPrimary"
      variant="body2"
      component={AniLink}
      fade
      to={href}
      underline="none"
      getProps={isActive}

      {...restProps}
    >
      {children}
    </MaterialLink> */

export default Link;
