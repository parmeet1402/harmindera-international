import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Typewriter from "typewriter-effect";
import { IconButton, SolidButton, TextButton } from "@components/form/Button";
import { AnchorArrowDownIcon, GlobeIcon } from "@content/assets/CustomIcon";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

// const LEFT_SECTION_INNER_SPACING = 7;

const useStyles = makeStyles(theme => ({
  container: {
    // maxWidth: theme.breakpoints.values.lg,
    "@media only screen and (max-width: 1150px)": {
      maxWidth: theme.breakpoints.values.md,
    },
    "@media only screen and (max-width: 800px)": {
      maxWidth: theme.breakpoints.values.sm,
    },
    "@media only screen and (max-width: 600px)": {
      maxWidth: theme.breakpoints.values.xl,
    },
  },
  grid: {
    backgroundColor: theme.palette.common.white,
    height: "calc(100vh - 68px)",
    position: "relative",
    paddingTop: theme.spacing(16),

    "@media only screen and (max-height: 960px)": {
      paddingTop: theme.spacing(12),
    },
    "@media only screen and (max-height: 768px)": {
      paddingTop: theme.spacing(6),
    },
    "@media only screen and (max-height: 650px)": {
      paddingTop: theme.spacing(2),
    },

    "@media only screen and (max-height: 500px)": {
      paddingTop: 0,
    },
  },
  leftGridItem: {
    marginTop: theme.spacing(6),
    "@media only screen and (max-width: 800px)": {
      marginTop: theme.spacing(1),
      maxWidth: "100%",
      width: "100%",
      flexBasis: "auto",
    },
  },
  rightGridItem: {
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    userSelect: "none",
    "@media only screen and (max-width: 1150px)": {
      marginTop: theme.spacing(6),
    },
    "@media only screen and (max-width: 800px)": {
      display: "none",
    },
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
    "@media only screen and (max-width: 600px)": {
      marginRight: 0,
      width: "100%",
    },
  },
  secondaryButtonStyles: {
    "@media only screen and (max-width: 600px)": {
      width: "100%",
      marginTop: theme.spacing(1),
    },
  },
  heading: {
    "@media only screen and (max-width: 600px)": {
      // "&>br": {
      //   display: "none",
      // },
    },
  },
  subHeading: {
    margin: theme.spacing(1, 0, 7),
    "@media only screen and (max-width: 600px)": {
      "&>br": {
        display: "none",
      },
    },
  },
  secondaryTextContainer: {
    marginTop: theme.spacing(7),
    "@media only screen and (max-width: 600px)": {
      // marginTop: theme.spacing(3),
      marginTop: "0",
      position: "absolute",
      bottom: "100px",
    },
  },
  secondaryText: {
    marginLeft: theme.spacing(1),
    "@media only screen and (max-width: 1150px)": {
      fontSize: "12px",
    },
    "@media only screen and (max-width: 600px)": {
      "&>br": {
        display: "none",
      },
    },
  },

  globeIcon: {
    "@media only screen and (max-width: 1150px)": {
      transform: "scale(0.8)",
      marginTop: "-4px",
    },
  },

  swiper: {
    height: "503px",
    width: "422px",
    background: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    "@media only screen and (max-width: 1150px)": {
      height: "357px",
      width: "300px",
    },
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
      Reliable {window.innerWidth < 500 ? <br /> : null}manufacturer{" "}
      {window.innerWidth < 500 ? null : <br />} of {window.innerWidth < 500 ? <br /> : null}
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
    <Container maxWidth="lg" className={classes.container}>
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
            {content.primaryButton}
          </SolidButton>
          <TextButton
            size="medium"
            onClick={handleSecondaryButtonClick}
            className={classes.secondaryButtonStyles}
          >
            {content.secondaryButton}
          </TextButton>
          <Box display="flex" className={classes.secondaryTextContainer}>
            <GlobeIcon className={classes.globeIcon} />
            <Typography className={classes.secondaryText} color="textSecondary">
              {content.secondaryText}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} className={classes.rightGridItem}>
          <Box>
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
          <AnchorArrowDownIcon direction="down" />
        </IconButton>
      </Grid>
    </Container>
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
