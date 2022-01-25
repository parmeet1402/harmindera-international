import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MailOutlineOutlined from "@material-ui/icons/MailOutlineOutlined";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import RoomOutlined from "@material-ui/icons/RoomOutlined";
import WhatsApp from "@material-ui/icons/WhatsApp";
// import { TextField } from "@material-ui/core";
import TextField from "@components/form/TextField";
import { SolidButton } from "@components/form/Button";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    paddingBottom: theme.spacing(8),
    background: theme.palette.common.white,

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingBottom: theme.spacing(20), // TODO: check if 12 is required
      background: theme.palette.grey["100"],
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
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
  },
  subHeading: {
    color: theme.palette.text.secondary,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  mapContainer: {
    marginBottom: theme.spacing(2),
    "&>iframe": {
      width: "100%",
      height: "60vw",
    },
  },
}));

const content = {
  heading: "Contact Us",
  subHeading: "We are here to help you",
};

const ContactUsSection = () => {
  const classes = useStyles();

  const {
    site: {
      siteMetadata: { address, email, phoneNumbers },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          address
          email
          phoneNumbers
        }
      }
    }
  `);

  console.log({ address, email, phoneNumbers });

  //   https://goo.gl/maps/oNn9TP1dHEURTFGk8
  return (
    <Container className={classes.container}>
      <Box className={classes.headingContainer}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
        {/* Create a grid for containing both form and aside */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item className={classes.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54789.801763578675!2d75.84239438757328!3d30.876515636190774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d67dc262cd5%3A0x97cb1643bce70173!2sHarmindera%20International!5e0!3m2!1sen!2sin!4v1642942272698!5m2!1sen!2sin"
                // width="319px"
                // height="252px"
                style={{ border: 0, borderRadius: 12 }}
                allowfullscreen=""
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
              />
            </Grid>
            <Grid container item xs={12} md={6} spacing={3}>
              <Grid container item xs={12} alignItems="center">
                <Grid item xs={3}>
                  <IconButton aria-label="Location" color="default">
                    <RoomOutlined color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle1" align="left" color="primary">
                    {address}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} alignItems="center">
                <Grid item xs={3}>
                  <IconButton aria-label="Phone" color="default">
                    <PhoneOutlined color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle1" align="left" color="primary">
                    {phoneNumbers[0]}
                  </Typography>
                  <Typography variant="subtitle1" align="left" color="primary">
                    {phoneNumbers[1]}
                  </Typography>
                  <Typography variant="subtitle1" align="left" color="primary">
                    {phoneNumbers[2]}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} alignItems="center">
                <Grid item xs={3}>
                  <IconButton aria-label="Email" color="default">
                    <MailOutlineOutlined color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle1" align="left" color="primary">
                    {email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            Right
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUsSection;

// TODO: Add Icons
// TODO:
