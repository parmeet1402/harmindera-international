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

const useStyles = makeStyles(theme => ({
  container: {
    // height: "calc(100vh - 68px)",
    height: "110vh",
    position: "relative",
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
  grid: {
    // display: "grid",
    // gridTemplateColumns: "repeat(3, 1fr)",
    // gridTemplateRows: "repeat(2, 1fr)",
    // rowGap: theme.spacing(5),
    // columnGap: theme.spacing(4),
    // width: "max-content",
    // marginTop: theme.spacing(6),
    // marginLeft: "auto",
    // marginRight: "auto",
    // textAlign: "center",
  },
  contentContainer: {
    width: "80%",
    height: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(6),
    position: "relative",

    display: "flex",
    flexDirection: "row",
    // border: "1px solid red",
  },

  leftContentContainer: {
    width: "320px",
    marginLeft: "60px",
    // marginTop: "12px",
    // background: "red",
  },
  rightContentContainer: {
    // background: "green",
    width: "calc(100% - 450px)",
    marginLeft: "auto",
  },
  paper: {
    height: "100%",
    padding: theme.spacing(5),
    textAlign: "left",
  },
  paperHeading: { fontWeight: theme.typography.fontWeightBold },

  contactRow: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    paddingRight: theme.spacing(1),
    margin: theme.spacing(3, 0, 1),
  },

  contactIcon: {},

  contactLinkText: {},
  formControl: {
    width: "calc(50% - 12px)",
  },
  formControlFullField: {
    width: "100%",
    // height: theme.spacing(12),
  },
  textInput: {
    width: "100%",
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
    <Box className={classes.container}>
      <Box pt={12}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
      </Box>
      <Grid direction="row" className={classes.contentContainer}>
        <Grid direction="column" className={classes.leftContentContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54789.801763578675!2d75.84239438757328!3d30.876515636190774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d67dc262cd5%3A0x97cb1643bce70173!2sHarmindera%20International!5e0!3m2!1sen!2sin!4v1642942272698!5m2!1sen!2sin"
            width="319px"
            height="252px"
            style={{ border: 0, borderRadius: 12 }}
            allowfullscreen=""
            loading="lazy"
            aria-hidden="false"
            tabIndex="0"
          />
          <Box display="flex" flexDirection="column" mt={3}>
            <Box className={classes.contactRow}>
              <Box marginRight={1.5}>
                <RoomOutlined fontSize="large" color="secondary" />
              </Box>
              <Box>
                <Typography variant="subtitle2" align="left" color="secondary">
                  {address}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.contactRow}>
              <Box marginRight={1.5}>
                <MailOutlineOutlined fontSize="large" color="secondary" />
              </Box>
              <Box>
                <Typography variant="subtitle2" align="left" color="secondary">
                  {email}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.contactRow}>
              <Box marginRight={1.5}>
                <PhoneOutlined fontSize="large" color="secondary" />
              </Box>
              <Box>
                <Typography variant="subtitle2" align="left" color="secondary">
                  {phoneNumbers[0]}
                </Typography>
                <Typography variant="subtitle2" align="left" color="secondary">
                  {phoneNumbers[1]}
                </Typography>
                <Typography variant="subtitle2" align="left" color="secondary">
                  {phoneNumbers[2]}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.contactRow}>
              <Box marginRight={1.5}>
                <WhatsApp fontSize="large" color="secondary" />
              </Box>
              <Box>
                <Typography variant="subtitle2" align="left" color="secondary">
                  {phoneNumbers[0]}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid direction="column" className={classes.rightContentContainer}>
          <Paper className={classes.paper}>
            <Typography className={classes.paperHeading} variant="h5">
              Request Callback
            </Typography>
            <Box mt={5}>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <TextField
                  label="Your Name"
                  placeholder="Your Name"
                  id="outlined-size-small"
                  variant="outlined"
                  formControlProps={{
                    classes: { root: classes.formControl },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                />
                <TextField
                  label="Email"
                  placeholder="Email"
                  id="outlined-size-small"
                  variant="outlined"
                  formControlProps={{
                    classes: { root: classes.formControl },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <TextField
                  label="Phone"
                  placeholder="Phone"
                  id="outlined-size-small"
                  variant="outlined"
                  formControlProps={{
                    classes: { root: classes.formControl },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                />
                <TextField
                  label="Country"
                  placeholder="Country"
                  id="outlined-size-small"
                  variant="outlined"
                  formControlProps={{
                    classes: { root: classes.formControl },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <TextField
                  label="Your Name"
                  placeholder="Your Name"
                  id="outlined-size-small"
                  variant="outlined"
                  multiline
                  formControlProps={{
                    classes: { root: classes.formControlFullField },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                  rows={8}
                />
              </Box>
            </Box>
            <Box textAlign="center" mt={4}>
              <SolidButton>Send Message</SolidButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsSection;

// TODO: Add Icons
// TODO:
