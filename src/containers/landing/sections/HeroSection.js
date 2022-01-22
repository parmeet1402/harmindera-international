import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Typewriter from "typewriter-effect";

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: theme.palette.common.white,
  },
  typewriterEffectWrapper: {
    color: theme.palette.primary.dark,
  },
  typewriterEffectCursor: {
    color: theme.palette.primary.dark,
  },
}));

const content = {
  heading: "Reliable manufacturer of ",
  subHeading:
    "Our team comprising of 500+ highly skilled engineers and workers is here to fulfil needs for your business.",
  primaryButton: "Browser Products",
  secondaryButton: "Contact Us",
  secondaryText:
    "Trusted by over 160+ beloved clients of ours from all the leading countries in the world",
  images: [
    {
      id: "b9314081-f741-5cfb-a4f3-59f6b604af46",
      name: "Hub Bolt - Rear & Front",
      slug: "hub-bolt-rear-and-front",
      original_url:
        "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859552/website/images/gdjqdrjmznzvongsgj1k.png",
    },
    {
      id: "38928bdc-5af6-543e-a0c4-163e6e1d4127",
      name: "Bush-750",
      slug: "bush-750",
      original_url:
        "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859559/website/images/dwcd012jhrtu6xowgfi5.png",
    },
    {
      id: "68219863-c174-52c3-a7eb-63576000cf6e",
      name: "TVS Compact",
      slug: "tvs-compact",
      original_url:
        "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859564/website/images/n9ng7u3hfmyln4stlw0h.png",
    },

    {
      id: "496372e3-f8a6-53dc-9d79-759224cea896",
      name: "Pin-4626",
      slug: "pin-4626",
      original_url:
        "http://res.cloudinary.com/dybvtvzsm/image/upload/v1607859578/website/images/wbeokce8elfui6tuy235.png",
    },
  ],
};

const HeroSection = () => {
  const {
    allContentfulProductCategory: { nodes: productCategoriesObjects },
  } = useStaticQuery(graphql`
    query CategoryQuery {
      allContentfulProductCategory {
        nodes {
          name
        }
      }
    }
  `);
  const productCategories = productCategoriesObjects.map(productCategory => productCategory.name);
  const classes = useStyles();

  return (
    <Grid className={classes.grid}>
      <h2>
        Heading
        <span id="categories"></span>
        <Typewriter
          color="red"
          options={{
            strings: productCategories,
            autoStart: true,
            loop: true,
            cursorClassName: classes.typewriterEffectCursor,
            wrapperClassName: classes.typewriterEffectWrapper,
          }}
        />
      </h2>
    </Grid>
  );
};

export default HeroSection;

// DONE: Add data for all the content of page
// DONE: Add data for images

// TODO: Base Grid UI
// TODO: Heading UI
// TODO: Subheading UI
// TODO: Buttons UI
// TODO: Secondary Text
// TODO: Image Carousel UI (Slider)

// TODO: Buttons Functionality

// TODO: Scroll down functionality

// TODO: Make Mobile version
