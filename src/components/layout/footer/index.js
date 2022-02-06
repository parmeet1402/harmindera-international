import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MailOutlineOutlined from "@material-ui/icons/MailOutlineOutlined";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import RoomOutlined from "@material-ui/icons/RoomOutlined";
import WhatsApp from "@material-ui/icons/WhatsApp";

// Components
import { IconButton } from "@components/form/Button";
import Link from "@components/navigation/Link";
import { Logo } from "@content/assets/CustomIcon";

import kebabCase from "lodash/kebabCase";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#000",
    overflow: "hidden",
    paddingBlock: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      paddingBlock: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBlock: theme.spacing(8),
    },
  },
  subLinks: {
    marginLeft: "0.3rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "0.4rem",
    },
  },
  subLinkValues: {
    marginLeft: "0.5rem",
    marginBottom: "0.3rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "2rem",
    },
    "@media only screen and (min-width: 900px)": {
      marginLeft: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "1rem",
    },
  },
  flexContainer: {
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  iconContainer: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.common.white,
  },
  domLink: {
    textDecoration: "none",
    color: theme.palette.common.white,
    position: "relative",
    "&:hover": {
      textDecoration: "underline",
      // "&::after": {
      //   content: '""',
      //   position: "absolute",
      //   left: 0,
      //   bottom: 0,
      //   width: "100%",
      //   height: "1px",
      //   background: theme.palette.common.white,
      // },
    },
  },
}));

const Footer = props => {
  const classes = useStyles();
  const {
    site: {
      siteMetadata: { address, email, phoneNumbers },
    },
    allContentfulProductCategory: { nodes: productCategories },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            address
            email
            phoneNumbers
          }
        }
        allContentfulProductCategory {
          nodes {
            name
          }
        }
      }
    `,
  );

  return (
    <Container className={classes.container} component="footer" maxWidth="none">
      <Grid className={classes.flexContainer} container spacing={6}>
        <Grid item container xs={12} md={6} lg={12}>
          <Grid item xs={12}>
            <Link href="/" underline="none">
              <Logo variant="light" />
            </Link>
          </Grid>
          <Grid item xs={2} lg={1} className={classes.iconContainer}>
            <IconButton
              href={`https://wa.me/${phoneNumbers[0].replaceAll("+91 ", "91")}`}
              target="_blank"
              colorOverrides={{
                icon: {
                  color: "secondary",
                  colorVariant: "main",
                  hover: "secondary",
                  hoverVariant: "main",
                },
              }}
            >
              <WhatsApp />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={1} className={classes.iconContainer}>
            <IconButton
              href="https://goo.gl/maps/NbTXbrxUJ6coPinGA"
              target="_blank"
              colorOverrides={{
                icon: {
                  color: "secondary",
                  colorVariant: "main",
                  hover: "secondary",
                  hoverVariant: "main",
                },
              }}
            >
              <RoomOutlined />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={1} className={classes.iconContainer}>
            <IconButton
              href="tel:+919876100890"
              colorOverrides={{
                icon: {
                  color: "secondary",
                  colorVariant: "main",
                  hover: "secondary",
                  hoverVariant: "main",
                },
              }}
            >
              <PhoneOutlined />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={1} className={classes.iconContainer}>
            <IconButton
              href={`mailto:${email}`}
              colorOverrides={{
                icon: {
                  color: "secondary",
                  colorVariant: "main",
                  hover: "secondary",
                  hoverVariant: "main",
                },
              }}
            >
              <MailOutlineOutlined />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} lg={4} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              Quick Links
            </Typography>
          </Grid>
          <Grid item xs={11} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              <Link href="/about" className={classes.link} underline="hover">
                About
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={11} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              <Link href="/contact" className={classes.link} underline="hover">
                Contact Us
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} lg={4} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              Products
            </Typography>
          </Grid>
          {productCategories.map(({ name }) => (
            <Grid item xs={11} className={classes.subLinks}>
              <Typography variant="body2" color="secondary">
                <Link
                  href={`/products/${kebabCase(name)}`}
                  className={classes.link}
                  underline="hover"
                >
                  {name}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={12} md={6} lg={4} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              Reach Us
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.subLinks}>
            <MailOutlineOutlined color="secondary" fontSize="small" />
          </Grid>
          <Grid item xs={10} md={9} className={`${classes.subLinks} ${classes.subLinkValues}`}>
            <Typography variant="body2" color="secondary" style={{ marginTop: "4px" }}>
              <a href={`mailto:${email}`} className={classes.domLink} underline="hover">
                {email}
              </a>
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.subLinks}>
            <PhoneOutlined color="secondary" fontSize="small" />
          </Grid>
          <Grid item xs={10} md={9} className={`${classes.subLinks} ${classes.subLinkValues}`}>
            <Typography variant="body2" color="secondary" style={{ marginTop: "4px" }}>
              <a
                href={`tel:${phoneNumbers[0].replaceAll(" ", "")}`}
                className={classes.domLink}
                underline="hover"
                target="_blank"
              >
                {phoneNumbers[0]}
              </a>
            </Typography>
            <Typography variant="body2" color="secondary" style={{ marginTop: "4px" }}>
              <a
                href={`tel:${phoneNumbers[1].replaceAll(" ", "")}`}
                className={classes.domLink}
                underline="hover"
                target="_blank"
              >
                {phoneNumbers[1]}
              </a>
            </Typography>
            <Typography variant="body2" color="secondary" style={{ marginTop: "4px" }}>
              <a
                href={`tel:${phoneNumbers[2].replaceAll(" ", "")}`}
                className={classes.domLink}
                underline="hover"
                target="_blank"
              >
                {phoneNumbers[2]}
              </a>
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.subLinks}>
            <RoomOutlined color="secondary" fontSize="small" />
          </Grid>
          <Grid item xs={10} md={9} className={`${classes.subLinks} ${classes.subLinkValues}`}>
            <Typography variant="body2" color="secondary" style={{ marginTop: "4px" }}>
              <a
                href="https://goo.gl/maps/NbTXbrxUJ6coPinGA"
                target="_blank"
                className={classes.domLink}
              >
                {address}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
