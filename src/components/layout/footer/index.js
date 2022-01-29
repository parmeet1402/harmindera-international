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

const useStyles = makeStyles(theme => ({
  container: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: "#000",
    // paddingInline: "0px",
    // padding: "24px 0px",
    // paddingBlock: "0px",
    // margin: "0px",
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
    marginLeft: "0.5em",
  },
  flexContainer: {
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
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
      <Grid className={classes.flexContainer} container spacing={4}>
        <Grid item container xs={12} md={6} lg={3}>
          <Grid item xs={12}>
            <Logo variant="light" />
          </Grid>
          <Grid item xs={2}>
            <IconButton
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
          <Grid item xs={2}>
            <IconButton
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
          <Grid item xs={2}>
            <IconButton
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
          <Grid item xs={2}>
            <IconButton
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
        <Grid item container xs={12} md={6} lg={3} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              Quick Links
            </Typography>
          </Grid>
          <Grid item xs={11} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              About
            </Typography>
          </Grid>
          <Grid item xs={11} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              Contact Us
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} lg={3} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              Products
            </Typography>
          </Grid>
          {productCategories.map(({ name }) => (
            <Grid item xs={11} className={classes.subLinks}>
              <Typography variant="body2" color="secondary">
                {name}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={12} md={6} lg={3} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" color="secondary">
              Reach Us
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.subLinks}>
            <MailOutlineOutlined color="secondary" fontSize="small" />
          </Grid>
          <Grid item xs={10} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              {email}
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.subLinks}>
            <PhoneOutlined color="secondary" fontSize="small" />
          </Grid>
          <Grid item xs={10} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              {phoneNumbers[0]}
            </Typography>
            <Typography variant="body2" color="secondary">
              {phoneNumbers[1]}
            </Typography>
            <Typography variant="body2" color="secondary">
              {phoneNumbers[2]}
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.subLinks}>
            <RoomOutlined color="secondary" fontSize="small" />
          </Grid>
          <Grid item xs={10} className={classes.subLinks}>
            <Typography variant="body2" color="secondary">
              {address}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
