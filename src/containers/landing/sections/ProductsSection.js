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
import { Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    // height: "100vh",
    // textAlign: "center",
    textAlign: "left",
    paddingBottom: theme.spacing(8),
    background: theme.palette.common.white,
    // background: "red",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      // paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(20),
      background: theme.palette.primary.light,
    },
  },
  headingContainer: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(12),
    },
  },
  heading: {
    marginBottom: theme.spacing(1),
    color: theme.palette.common.black,
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      color: theme.palette.common.white,
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
  },
  subHeading: {
    color: theme.palette.common.white,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  tabRow: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    overflowX: "auto",
    paddingBlock: "0.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(9),
      marginLeft: theme.spacing(0),
      display: "block",
    },
  },
  tab: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: "none",
    color: theme.palette.common.black,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    fontSize: "0.66rem",
    [theme.breakpoints.up("md")]: {
      color: theme.palette.primary.light,
      fontSize: "1rem",
    },
    "&hover": {
      backgroundColor: theme.palette.grey["200"],
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.common.white,
      },
    },
  },
  inactiveTab: {
    color: theme.palette.grey["500"],
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.white,
    },
    "&hover": {
      backgroundColor: theme.palette.grey["100"],
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.common.white,
      },
    },
  },
}));

const content = {
  heading: "Products",
  subHeading: "We serve premium quality products",
};

const useCardStyles = makeStyles(theme => ({
  cardContainer: {
    // width: "80%",
    // marginInline: "auto",
  },
  card: {
    width: "100%",
    paddingTop: "110%",
    position: "relative",
    borderRadius: "9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    background: props =>
      props.variant === "dark" ? theme.palette.grey[100] : theme.palette.common.white,
  },
  ratioContainer: {
    width: "100%",
  },

  cardImage: {
    height: "200px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  name: {
    color: props =>
      props.variant === "dark" ? theme.palette.common.black : theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
  },
  categoryName: {
    color: props =>
      props.variant === "dark" ? theme.palette.common.black : theme.palette.common.white,
  },
  chevronWrapper: {
    WebkitTapHighlightColor: "transparent",
  },
}));

// todo: make it flexible for inverted theme as well
// todo: add default images for each category
const SingleProduct = ({ data, variant }) => {
  const classes = useCardStyles({ variant });
  console.log({ classes });
  // console.log({ data });
  // check if image is present ?
  const image = data.images
    ? data.images[0].original_url
    : "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png";
  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.card}>
        <img src={image} className={classes.cardImage} alt={data.name} />
      </Box>
      <Box mt={1} textAlign="left">
        <Typography variant="h6" className={classes.name}>
          {data.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.categoryName}>
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

  const theme = useTheme();
  const isWidthMoreThan550px = useMediaQuery("(min-width:550px)");
  const isMediumDeviceAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktopDeviceAndUp = useMediaQuery(theme.breakpoints.up("lg"));

  const isSmallMobile = false;
  const isMobile = false;

  const getChevronWidth = () =>
    isDesktopDeviceAndUp ? 60 : isMediumDeviceAndUp ? 40 : isWidthMoreThan550px ? 20 : 12;
  const getNumberOfCards = () =>
    isDesktopDeviceAndUp ? 4 : isMediumDeviceAndUp ? 2 : isWidthMoreThan550px ? 2 : 1;

  const variant = isMediumDeviceAndUp ? "light" : "dark";

  const renderCategoryCards = () => {
    return dataByCategory[activeTab].map(product => (
      <SingleProduct key={product.name} variant={variant} data={product} />
    ));
  };

  return (
    <Container name="landing__products-section" className={classes.container} maxWidth="auto">
      <Box className={classes.headingContainer}>
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
          maxWidth: "1340px",
          margin: "40px auto 0",
          paddingBottom: "40px",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={getNumberOfCards()}
          gutter={isDesktopDeviceAndUp ? 47 : isMediumDeviceAndUp ? 22 : 10}
          showSlither={isMediumDeviceAndUp ? false : true}
          leftChevron={
            <IconButton aria-label="Scroll Down" color="secondary">
              <AnchorArrowDownIcon
                color={variant === "dark" ? "black" : "white"}
                direction="left"
              />
            </IconButton>
          }
          rightChevron={
            <IconButton aria-label="Scroll Down" color="secondary">
              <AnchorArrowDownIcon
                color={variant === "dark" ? "black" : "white"}
                direction="right"
              />
            </IconButton>
          }
          outsideChevron
          chevronWidth={getChevronWidth()}
        >
          {renderCategoryCards()}
        </ItemsCarousel>
      </div>
    </Container>
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

// TODO: Mobile hooks integeration
// TODO: Functionality of dark and light variants
// TODO: Enable outside chevron on desktop devices
