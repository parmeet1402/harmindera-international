import React, { useState, useEffect } from "react";
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
import useUIStore from "@zustand/ui";
/* import { SearchResult, SearchResults } from "./types";

enum _StateMachine {
  "IDLE" = "IDLE",
  "SEARCHING" = "SEARCHING",
  "FETCHED" = "FETCHED",
  "ERROR" = "ERROR",
} */

const useStyles = makeStyles(theme => ({
  formControlStyles: {
    marginLeft: "auto",
    position: "absolute",
    right: "20px",
    zIndex: (props: { isFocused: boolean }) =>
      props.isFocused ? theme.zIndex.expandedSearchBar : theme.zIndex.expandedSearchBar - 2,
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
  cardRootHiddenStyles: {
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

type Category = "autoParts" | "agricultureParts" | "nut" | "bolts" | "jcbParts";

const getCategoryIcon = (category: Category) => {
  /* switch (category) {
    case "autoParts":
      return <AutoParts />;
  } */
};

const generateInitialData = () => {
  return [];
  /* return [
    {
      icon: React.ReactNode,
  label: string,
  redirectURL: string,
  type: "category" | "product" | "search",
  category?: string,
    }
  ] */
};

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
    generateInitialData();
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    showBackdrop();
  };

  const handleBlur = () => {
    setIsFocused(false);
    hideBackdrop();
  };

  const {
    searchRootFocusedStyles,
    formControlStyles,
    searchRootStyles,
    cardRootHiddenStyles,
    cardRootStyles,
    showUpButton,
    hideDownButton,
  } = useStyles({ isFocused });

  /* 



  dataStructure = {
    isLoading: false,
    data: [],
    searchTerm: empty_string
  }


  initialState:{
    isLoading: false,
    data: []
    searchTerm: filled_string
  }

  loadingState: [
    isLoading: true,
    searchTerm: filled_string
  ]

  searchedState: {
    isLoading: false,
    data:[].length,
    searchTErm: filled_string
  }

  noRessultsFound:{
    isLoading: false,
    data: []
    searchTerm: filled_string
  }
  
  */

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
      </Card>
      <TextField
        id="nav__search-input-field"
        placeholder="Search Products"
        formControlProps={{ classes: { root: formControlStyles } }}
        classes={{
          root: isFocused ? searchRootFocusedStyles : searchRootStyles,
          // focused: searchRootFocusedStyles,
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
