import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    textAlign: "center",
    background: theme.palette.primary.light,
  },
  heading: {
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white,
  },
  subHeading: {
    color: theme.palette.common.white,
  },
  tabRow: {
    marginTop: theme.spacing(9),
  },
  tab: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: "none",
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.light,
    padding: theme.spacing(2),
    "&hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  inactiveTab: {
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    "&hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
}));

const content = {
  heading: "Products",
  subHeading: "We serve premium quality products",
};

const SingleProduct = ({ data }) => {
  return (
    <Box>
      Single Product Single Product
      <span>dsf</span>
      Single Product
    </Box>
  );
};

const ProductsSection = () => {
  const {
    allContentfulProduct: { edges },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProduct {
        edges {
          node {
            id
            name
            brand {
              name
            }
            category {
              name
            }
            finish {
              name
            }
            sizes
            slug
            threadType {
              name
            }
            material {
              name
            }
            images {
              original_url
            }
            headType {
              name
            }
            packagingType {
              name
            }
            quantityUnit {
              unit
            }
            shape {
              name
            }
            whole
          }
        }
      }
    }
  `);

  const [dataByCategory, setDataByCategory] = useState({
    "JCB Parts": [],
    "Auto Parts": [],
    Nut: [],
    Bolt: [],
    "Agriculture Products": [],
  });

  const [activeTab, setActiveTab] = useState("JCB Parts");

  useEffect(() => {
    if (edges && edges.length > 0) {
      let obj = {
        "JCB Parts": [],
        "Auto Parts": [],
        Nut: [],
        Bolt: [],
        "Agriculture Products": [],
      };

      edges.forEach(edge => {
        switch (edge.node.category.name) {
          case "Nut":
            obj.Nut.push(edge.node);
            break;
          case "Auto Parts":
            obj["Auto Parts"].push(edge.node);
            break;
          case "JCB Parts":
            obj["JCB Parts"].push(edge.node);
            break;
          case "Agriculture Products":
            obj["Agriculture Products"].push(edge.node);
            break;
          case "Bolt":
            obj["Bolt"].push(edge.node);
            break;
          default:
            break;
        }
      });
      // TODO: do a deep comparison and only do state update if required
      setDataByCategory(obj);
    }
  }, [edges]);

  // console.log({ edges });

  // TODO: filter data

  // const [activeTab, setActiveTab] = useState("jcb");
  const classes = useStyles();

  const handleTabChange = name => {
    setActiveTab(name);
  };

  return (
    <Box className={classes.container}>
      <Box pt={12}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
      </Box>
      <Grid className={classes.tabRow}>
        {Object.keys(dataByCategory).map(name => (
          <Chip
            variant={activeTab === name ? "default" : "outlined"}
            size="small"
            label={name}
            onClick={() => handleTabChange(name)}
            clickable
            classes={{
              root: classes.tab,
              outlined: classes.inactiveTab,
            }}
            // className={classes.tab}
            // color="secondary"
          />
        ))}
      </Grid>
      {/* <div className={classes.grid}>
      {content.categories.map(category => (
        <CategoryCard key={category.name} data={category} />
      ))}
    </div> */}
    </Box>
  );
};

export default ProductsSection;

// DONE: load data by every product
// TODO: add Tabs UI and state
// TODO: add Single Product Component UI
// TODO: Add carousel Functionality
// TODO: Add functionality of redirection
// TODO: Add Button for View All
