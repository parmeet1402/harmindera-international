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

import ItemsCarousel from "react-items-carousel";
import { AnchorArrowDownIcon } from "@content/assets/CustomIcon";
import { OutlinedButton } from "@components/form/Button";

const useStyles = makeStyles(theme => ({
  container: {
    // height: "100vh",
    textAlign: "center",
    background: theme.palette.primary.light,
    paddingBottom: theme.spacing(12),
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

const useCardStyles = makeStyles(theme => ({
  card: {
    height: "302px",
    width: "255px",
    borderRadius: "9px",
    // margin: "47px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  },
  name: {
    color: theme.palette.common.white,
  },
}));

// todo: make it flexible for inverted theme as well
// todo: add default images for each category
const SingleProduct = ({ data }) => {
  const classes = useCardStyles();
  // console.log({ data });
  // check if image is present ?
  const image = data.images
    ? data.images[0].original_url
    : "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png";
  return (
    <Box>
      <Box bgcolor={"white"} className={classes.card}>
        <img src={image} height="200px" alt={data.name} />
      </Box>
      <Box mt={1} textAlign="left">
        <Typography variant="subtitle1" className={classes.name}>
          {data.name}
        </Typography>
        <Typography variant="subtitle2" className={classes.name}>
          {data.category.name}
        </Typography>
      </Box>
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

  // console.log({ edges });

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
    setActiveItemIndex(0);
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const isSmallMobile = false;
  const isMobile = false;

  const getChevronWidth = () => (isSmallMobile ? 40 : isMobile ? 60 : 60);

  const getNumberOfCards = () => (isSmallMobile ? 1 : isMobile ? 2 : 4);

  const renderCategoryCards = () => {
    return dataByCategory[activeTab].map(product => (
      <SingleProduct key={product.name} data={product} />
    ));
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
            key={name}
            variant={activeTab === name ? "default" : "outlined"}
            size="small"
            label={name}
            onClick={() => handleTabChange(name)}
            clickable
            classes={{
              root: classes.tab,
              outlined: classes.inactiveTab,
            }}
          />
        ))}
      </Grid>

      {/* <div className={classes.grid}>
      {content.categories.map(category => (
        <CategoryCard key={category.name} data={category} />
      ))}
    </div> */}
      <div
        style={{
          padding: `0 ${getChevronWidth()}px`,
          maxWidth: "1240px",
          margin: "40px auto 0",
          paddingBottom: "40px",
        }}
      >
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={getNumberOfCards()}
          gutter={10}
          leftChevron={
            <IconButton
              aria-label="Scroll Down"
              className={classes.scrollDownButton}
              color="secondary"
            >
              <AnchorArrowDownIcon color="white" direction="left" />
            </IconButton>
          }
          rightChevron={
            <IconButton
              aria-label="Scroll Down"
              className={classes.scrollDownButton}
              color="secondary"
            >
              <AnchorArrowDownIcon color="white" direction="right" />
            </IconButton>
          }
          outsideChevron
          chevronWidth={getChevronWidth()}
        >
          {renderCategoryCards()}
        </ItemsCarousel>
      </div>
      <OutlinedButton>View All</OutlinedButton>
    </Box>
  );
};

export default ProductsSection;

// DONE: load data by every product
// DONE: add Tabs UI and state
// DONE: add Single Product Component UI
// DONE: Add carousel Functionality
// DONE: Add Button for View All
// TODO: Add functionality of redirection from product cards
// TODO: Add view all button functinoality
