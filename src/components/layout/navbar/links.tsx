import React, { useState } from "react";
import Link from "@components/navigation/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import CategoriesLinksCard from "./categories-links-card";

// TODO: Setup Links
// const { links } = require("../../../content/data/navbar.json");
const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  {
    label: (
      <span style={{ display: "inline-flex", alignItems: "center", marginTop: "-10px" }}>
        Products <KeyboardArrowDown />
      </span>
    ),
    link: "/products",
  },
  { label: "Contact Us", link: "/contact" },
];

const useStyles = makeStyles(theme => ({
  link: {
    margin: "12px",
    fontWeight: theme.typography.fontWeightBold,

    "&#active-link--nav": {
      color: theme.palette.primary.main,
    },

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  nav: {
    marginLeft: theme.spacing(4),
    display: "flex",

    "& > li": {
      listStyle: "none",
    },
  },
}));

const Links = () => {
  const classes = useStyles();
  const [isProductsCardHoverVisible, setProductsCardHoverVisible] = useState(false);

  const handleMouseEnter = (index: number) => {
    if (index === 2) {
      setProductsCardHoverVisible(true);
    }
  };

  const handleMouseExit = (index: number) => {
    if (index === 2) {
      setProductsCardHoverVisible(false);
    }
  };

  return (
    <nav className={classes.nav}>
      {links.map((item, index) => {
        const { label, link } = item;
        return (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseExit(index)}
            key={link}
          >
            <Link
              href={link}
              classes={{
                root: classes.link,
              }}
            >
              {label}
            </Link>
            {index === 2 && isProductsCardHoverVisible && (
              <CategoriesLinksCard setProductsCardHoverVisible={setProductsCardHoverVisible} />
            )}
          </li>
        );
      })}
    </nav>
  );
};

export default Links;
