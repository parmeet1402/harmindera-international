import React from "react";
import Link from "@components/navigation/Link";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "12px",
    fontWeight: theme.typography.fontWeightBold,

    "&#active-link--nav": {
      color: theme.palette.primary.main,
    },

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  navStyles: {
    marginLeft: theme.spacing(4),
  },
}));

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  {
    label: (
      <span style={{ display: "inline-flex", alignItems: "center" }}>
        Products <KeyboardArrowDown />
      </span>
    ),
    link: "/products",
  },
  { label: "Contact Us", link: "/contact" },
];

const Links = props => {
  const { root, navStyles } = useStyles(props);
  return (
    <nav className={navStyles}>
      {links.map(item => {
        const { label, link } = item;
        return (
          <Link
            key={link}
            href={link}
            classes={{
              root,
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Links;
