import React, { useState } from "react";
import {
  InputAdornment,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchOutlined, InboxOutlined } from "@material-ui/icons";
import TextField from "@components/form/TextField";
import { TextButton } from "@components/form/Button";

/* interface Props {
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
} */

const useStyles = makeStyles(theme => ({
  formControlStyles: {
    marginLeft: "auto",
  },
  searchRootFocusedStyles: {
    height: "48px",
    transition: theme.transitions.create(["width", "transform"]),
    width: "36ch",
    /* Prevent changing color and border of search field */
    border: "none !important",
    backgroundColor: `${theme.palette.grey["100"]} !important`,
    transform: "translateX(-100px)",
  },
  searchRootStyles: {
    height: "48px",
    transition: theme.transitions.create(["width", "transform"]),
    width: "30ch",
    transform: "translateX(0)",
  },
  cardRootStyles: {
    position: "absolute",
    background: theme.palette.background.paper,
    borderRadius: "0 0 4px 4px",
    paddingTop: "64px",
    right: "4px",
    width: "470px",
    top: 0,
    opacity: 1,
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(["opacity"]),
  },
  cardRootHiddenStyles: {
    position: "absolute",
    background: theme.palette.background.paper,
    borderRadius: "0 0 4px 4px",
    paddingTop: "64px",
    right: "4px",
    width: "470px",
    top: 0,
    opacity: 0,
    pointerEvents: "none",
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(["opacity"]),
  },
  showUpButton: {
    position: "absolute",
    opacity: 1,
    transform: "scale(1)",
    transition: theme.transitions.create(["opacity", "transform"]),
    right: 10,
  },
  hideDownButton: {
    position: "absolute",
    opacity: 0,
    right: 10,
    transform: "scale(0.8)",
    pointerEvents: "none",

    transition: theme.transitions.create(["opacity", "transform"]),
  },
}));

const ExpandableSearchField = () => {
  const [isFocused, setIsFocused] = useState(false);
  // const { setIsFocused, isFocused } = props;

  const {
    searchRootFocusedStyles,
    formControlStyles,
    searchRootStyles,
    cardRootHiddenStyles,
    cardRootStyles,
    showUpButton,
    hideDownButton,
  } = useStyles();

  return (
    <>
      <Card classes={{ root: isFocused ? cardRootStyles : cardRootHiddenStyles }}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText primary="TVS FLange" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText primary="Search for TVS" />
          </ListItem>
        </List>
        {/* Categories */}
        {/* Search */}
        {/* Search for particular query */}
        {/* Enable Overlay mode */}
      </Card>
      <TextField
        id="nav__search-input-field"
        placeholder="Search Products"
        formControlProps={{ classes: { root: formControlStyles } }}
        classes={{
          root: isFocused ? searchRootFocusedStyles : searchRootStyles,
          focused: searchRootFocusedStyles,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="search"
        inputProps={{ "aria-label": "search" }}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
      />
      <TextButton
        classes={{
          root: isFocused ? showUpButton : hideDownButton,
        }}
        size="small"
        bgColor="text"
        bgColorVariant="primary"
      >
        Cancel
      </TextButton>
    </>
  );
};

export default ExpandableSearchField;
