import React from "react";
import { Link as GatsbyLink } from "gatsby";

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
  // console.log({ href });
  return (
    // @ts-ignore
    <MaterialLink
      color="textPrimary"
      variant="body2"
      component={GatsbyLink}
      to={href}
      // underline="none"
      getProps={isActive}
      {...restProps}
    >
      {children}
    </MaterialLink>
  );
};

export default Link;
