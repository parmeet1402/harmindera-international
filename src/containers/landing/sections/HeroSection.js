import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
import clsx from "clsx";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

// const LEFT_SECTION_INNER_SPACING = 7;

const useStyles = makeStyles(theme => ({
  container: {
    paddingBlock: "max(6vw, 2rem) max(10vw, 2rem)",
    maxHeight: "100vh",
  },
  mediumDevicesAndUp: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  smallDesktopAndUp: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  mobileDevicesOnly: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  primaryMainTextColor: {
    color: theme.palette.primary.main,
  },
  headingSize: {
    // for very small devices, drop the heading size to even further
  },
  subHeading: {
    marginTop: "max(1.5vw, 1.1rem)",
    marginBottom: "max(2vw, 2.5rem)",
    [theme.breakpoints.up("lg")]: {
      marginBlock: "0",
    },
  },
  swiper: {
    userSelect: "none",
    marginInline: "auto clamp(2rem, 0.2vw, 4rem)",
    aspectRatio: 0.83896620278,
    width: `clamp(300px, 30vw + 1rem, 422px)`,
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
  secondaryTextContainer: {
    marginTop: theme.spacing(1),
  },
  secondaryText: {
    marginLeft: theme.spacing(1),
  },
  scrollDownButton: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
}));

const content = {
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
      <Grid container spacing={3}>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              className={clsx({
                [classes.headingSize]: true,
              })}
            >
              Reliable&nbsp;
              <br className={classes.mobileDevicesOnly} />
              manufacturer <br className={classes.mediumDevicesAndUp} />
              of&nbsp;
              <br className={classes.mobileDevicesOnly} />
              <Typewriter
                color="red"
                options={{
                  strings: productCategories,
                  autoStart: true,
                  loop: true,
                  cursorClassName: clsx({
                    [classes.primaryMainTextColor]: true,
                  }),
                  wrapperClassName: clsx({
                    [classes.primaryMainTextColor]: true,
                  }),
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.subHeading}>
              Our team comprising of 500+ highly skilled engineers{" "}
              <br className={classes.mediumDevicesAndUp} />
              and workers is here to fulfil needs for your business.
            </Typography>
          </Grid>
          <Grid container spacing={1} item xs={12}>
            <Grid item xs={12} lg={6}>
              <SolidButton fullWidth onClick={handlePrimaryButtonClick}>
                Browse Products
              </SolidButton>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextButton fullWidth onClick={handlePrimaryButtonClick}>
                Contact Us
              </TextButton>
            </Grid>
          </Grid>
          <Grid
            // container
            spacing={1}
            item
            lg={12}
            className={clsx({
              [classes.smallDesktopAndUp]: true,
            })}
          >
            <Grid item xs={1}>
              <GlobeIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography className={classes.secondaryText} color="textSecondary">
                Trusted by over 160+ beloved clients of ours from <br /> all the leading countries
                in the world
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={clsx({
            [classes.mediumDevicesAndUp]: true,
          })}
          md={6}
          xs={0}
          container
        >
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
        </Grid>
      </Grid>
      <IconButton aria-label="Scroll Down" className={classes.scrollDownButton} color="default">
        <AnchorArrowDownIcon direction="down" />
      </IconButton>
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
