import React from "react";

// Material UI
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Components
import { Tractor, JCB, Rickshaw, Nut, Bolt } from "@content/assets/CustomIcon";

const useStyles = makeStyles(theme => ({
  card: {
    position: "absolute",
    width: "320px",
    left: "-50%",
    transformOrigin: "-50% -50%",
    boxShadow: theme.shadows[2],
    borderRadius: "4px",
  },
  listItem: {
    height: "39px",
    margin: "8px 12px",
    borderRadius: "4px",
    width: "calc(100% - 2 * 12px)",
  },
  listItemIcon: {
    minWidth: "45px",
  },
}));

const WIDTH = "28";

// TODO: Generate category data
// const { categories } = require("../../../content/data/categories.json");
const categories = [
  { name: "JCB Parts", icon: <JCB width={WIDTH} height={WIDTH} /> },
  { name: "Auto Parts", icon: <Rickshaw width={WIDTH} height={WIDTH} /> },
  { name: "Nut", icon: <Nut width={WIDTH} height={WIDTH} /> },
  { name: "Bolt", icon: <Bolt width={WIDTH} height={WIDTH} /> },
  { name: "Agriculture Parts", icon: <Tractor width={WIDTH} height={WIDTH} /> },
];

interface Props {
  setProductsCardHoverVisible: (bool: boolean) => void;
}

const CategoriesLinksCard = (props: Props) => {
  const classes = useStyles();
  const handleDropdownItemClick = () => {
    props.setProductsCardHoverVisible(false);
  };
  return (
    <Card classes={{ root: classes.card }}>
      <List>
        {categories.map(category => (
          <ListItem
            button
            classes={{ root: classes.listItem }}
            onClick={handleDropdownItemClick}
            key={category.name}
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>{category.icon}</ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CategoriesLinksCard;
