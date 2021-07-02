import React, { useState, useEffect } from "react";

// Material UI
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InboxOutlined from "@material-ui/icons/InboxOutlined";

// Components
import TextField from "@components/form/TextField";
import { TextButton } from "@components/form/Button";

// State
import useUIStore from "@zustand/ui";

// Todo: Setup State Management
/* import { SearchResult, SearchResults } from "./types";
enum _StateMachine {
  "IDLE" = "IDLE",
  "SEARCHING" = "SEARCHING",
  "FETCHED" = "FETCHED",
  "ERROR" = "ERROR",
} */

const useStyles = makeStyles(theme => ({
  formControl: {
    marginLeft: "auto",
    position: "absolute",
    right: "20px",
    zIndex: (props: { isFocused: boolean }) =>
      props.isFocused ? theme.zIndex.expandedSearchBar : theme.zIndex.expandedSearchBar - 2,
  },

  searchRootFocused: {
    height: "48px",
    transition: theme.transitions.create(["width", "transform"]),
    width: "36ch",

    /* Prevent changing color and border of search field */
    border: "none !important",
    backgroundColor: `${theme.palette.grey["100"]} !important`,

    transform: "translateX(-100px)",
  },

  searchRoot: {
    height: "48px",
    transition: theme.transitions.create(["width", "transform"]),
    width: "30ch",
    transform: "translateX(0)",
  },

  cardRoot: {
    position: "absolute",
    zIndex: theme.zIndex.expandedSearchBar,
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

  cardRootHidden: {
    position: "absolute",
    // zIndex: theme.zIndex.expandedSearchBar,
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
    zIndex: theme.zIndex.expandedSearchBar,
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

// TODO: Add global type for category
// type Category = "autoParts" | "agricultureParts" | "nut" | "bolts" | "jcbParts";

// TODO: Get category icon function
/* const getCategoryIcon = (category: Category) => {
  //  switch (category) {
  //   case "autoParts":
  //     return <AutoParts />;
  // } 
}; */

// Todo: Generate initial data
/* const generateInitialData = () => {
  return [];
  //  return [
  //   {
  //     icon: React.ReactNode,
  // label: string,
  // redirectURL: string,
  // type: "category" | "product" | "search",
  // category?: string,
  //   }
  // ] 
}; */

const ExpandableSearchField = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { showBackdrop, hideBackdrop } = useUIStore();
  const [state, setState] = useState({
    isLoading: false,
    searchQuery: "",
    results: [],
    count: { total: 0, category: 0, products: 0 },
  });

  useEffect(() => {
    // generateInitialData();
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    showBackdrop();
  };

  const handleBlur = () => {
    setIsFocused(false);
    hideBackdrop();
  };

  const classes = useStyles({ isFocused });

  return (
    <>
      <Card classes={{ root: isFocused ? classes.cardRoot : classes.cardRootHidden }}>
        <List>
          {[...Array(8)].map(() => (
            <ListItem button>
              <ListItemIcon>
                <InboxOutlined />
              </ListItemIcon>
              <ListItemText primary="TVS FLange" />
            </ListItem>
          ))}
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText primary="Search for TVS" />
          </ListItem>
        </List>
      </Card>
      <TextField
        id="nav__search-input-field"
        placeholder="Search Products"
        formControlProps={{ classes: { root: classes.formControl } }}
        classes={{
          root: isFocused ? classes.searchRootFocused : classes.searchRoot,
          // focused: searchRootFocused,
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        inputProps={{ "aria-label": "search" }}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        autoComplete="off"
      />
      <TextButton
        classes={{
          root: isFocused ? classes.showUpButton : classes.hideDownButton,
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
