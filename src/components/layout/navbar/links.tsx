import React, { useState } from "react";
import Link from "@components/navigation/Link";
import { Card, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown, SearchOutlined } from "@material-ui/icons";
import { Tractor, JCB, Rickshaw, Nut, Bolt } from "@content/assets/CustomIcon";

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

const WIDTH = "28";

const categories = [
  { name: "JCB Parts", icon: <JCB width={WIDTH} height={WIDTH} /> },
  { name: "Auto Parts", icon: <Rickshaw width={WIDTH} height={WIDTH} /> },
  { name: "Nut", icon: <Nut width={WIDTH} height={WIDTH} /> },
  { name: "Bolt", icon: <Bolt width={WIDTH} height={WIDTH} /> },
  { name: "Agriculture Parts", icon: <Tractor width={WIDTH} height={WIDTH} /> },
];

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
    display: "flex",

    "& > li": {
      position: "relative",
      listStyle: "none",
    },
  },
  cardStyles: {
    position: "absolute",
    width: "320px",
    left: "-50%",
    transformOrigin: "-50% -50%",
    boxShadow: theme.shadows[2],
    borderRadius: "4px",
  },
  listItemRoot: {
    height: "39px",
    margin: "8px 12px",
    borderRadius: "4px",
    width: "calc(100% - 2 * 12px)",
  },
  listItemIconRoot: {
    minWidth: "45px",
  },
}));

const Links = () => {
  const { root, navStyles, cardStyles, listItemRoot, listItemIconRoot } = useStyles();
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

  const handleDropdownItemClick = () => {
    setProductsCardHoverVisible(false);
  };
  return (
    <nav className={navStyles}>
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
                root,
              }}
            >
              {label}
            </Link>
            {index === 2 && isProductsCardHoverVisible && (
              <Card classes={{ root: cardStyles }}>
                <List>
                  {categories.map(category => (
                    <ListItem
                      button
                      classes={{ root: listItemRoot }}
                      onClick={handleDropdownItemClick}
                      key={category.name}
                    >
                      <ListItemIcon classes={{ root: listItemIconRoot }}>
                        {category.icon}
                      </ListItemIcon>
                      <ListItemText primary={category.name} />
                    </ListItem>
                  ))}
                  {/* <Divider />
                  <ListItem button classes={{ root: listItemRoot }}>
                    <ListItemIcon classes={{ root: listItemIconRoot }}>
                      <SearchOutlined />
                    </ListItemIcon>
                    <ListItemText primary={"View all"} />
                  </ListItem> */}
                </List>
              </Card>
            )}
          </li>
        );
      })}
    </nav>
  );
};

export default Links;
