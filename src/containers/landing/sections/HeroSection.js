import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Typewriter from "typewriter-effect";
import { Typography } from "@material-ui/core";
import { SolidButton, TextButton } from "@components/form/Button";
import { AnchorArrowDownIcon, GlobeIcon } from "@content/assets/CustomIcon";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const LEFT_SECTION_INNER_SPACING = 7;

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: theme.palette.common.white,
    height: "calc(100vh - 68px)",
    padding: theme.spacing(14),
    position: "relative",
  },
  leftGridItem: {
    marginTop: theme.spacing(6),
  },
  rightGridItem: {
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    userSelect: "none",
    // marginLeft: theme.spacing(6),
  },
  typewriterEffectWrapper: {
    color: theme.palette.primary.dark,
    display: "inline-block",
  },
  typewriterEffectCursor: {
    color: theme.palette.primary.dark,
  },
  primaryButtonStyles: {
    marginRight: theme.spacing(1),
  },
  heading: {
    // fontWeight: 900,
  },
  subHeading: {
    // width: "85%",
    margin: theme.spacing(1, 0, LEFT_SECTION_INNER_SPACING),
  },
  secondaryText: {
    marginLeft: theme.spacing(1),
  },

  swiper: {
    height: "503px",
    width: "422px",
    background: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
  },
  swiperSlide: {
    background: theme.palette.grey[100],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "&>img": {
      height: "60%",
      display: "block",
      objectFit: "cover",
    },
  },
  scrollDownButton: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const content = {
  heading: (
    <>
      Reliable manufacturer <br /> of{" "}
    </>
  ),
  subHeading: (
    <>
      Our team comprising of 500+ highly skilled engineers <br /> and workers is here to fulfil
      needs for your business.
    </>
  ),
  primaryButton: "Browser Products",
  secondaryButton: "Contact Us",
  secondaryText: (
    <>
      Trusted by over 160+ beloved clients of ours from <br /> all the leading countries in the
      world
    </>
  ),
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

  const handlePrimaryButtonClick = () => {
    // TODO: scroll to products section
  };
  const handleSecondaryButtonClick = () => {
    // TODO: scroll to contact us section
  };

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={6} className={classes.leftGridItem}>
        <Typography variant="h3" className={classes.heading} component="h1">
          {content.heading}
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
        </Typography>

        <Typography variant="subtitle1" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
        <SolidButton
          size="medium"
          className={classes.primaryButtonStyles}
          onClick={handlePrimaryButtonClick}
        >
          {content.primaryButton}{" "}
        </SolidButton>
        <TextButton size="medium" onClick={handleSecondaryButtonClick}>
          {content.secondaryButton}
        </TextButton>
        <br />
        <Box display="flex" mt={LEFT_SECTION_INNER_SPACING}>
          <GlobeIcon />
          <Typography className={classes.secondaryText} color="textSecondary">
            {content.secondaryText}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5} className={classes.rightGridItem}>
        <Box h="400px">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            className={classes.swiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {content.images.map(({ original_url, name }) => (
              <SwiperSlide className={classes.swiperSlide} key={name}>
                <img src={original_url} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
      <IconButton aria-label="Scroll Down" className={classes.scrollDownButton} color="default">
        <AnchorArrowDownIcon />
      </IconButton>
    </Grid>
  );
};

export default HeroSection;

// DONE: Add data for all the content of page
// DONE: Base Grid UI
// DONE: Heading UI
// DONE: Subheading UI
// DONE: Buttons UI
// DONE: Secondary Text
// DONE: Image Carousel UI (Slider)

// TODO: Buttons Functionality
// TODO: Scroll down functionality
// TODO: Make Mobile version
