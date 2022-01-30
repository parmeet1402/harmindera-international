import React, { useState, useEffect } from "react";
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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useContactUsStore from "@zustand/contact";
import { useForm } from "react-hook-form";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "left",
    paddingBottom: theme.spacing(8),
    background: theme.palette.common.white,

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingBottom: theme.spacing(20), // TODO: check if 12 is required
    },
    [theme.breakpoints.up("lg")]: {
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
    },
    "@media only screen and (min-width: 1150px)": {
      fontSize: "3.23rem",
    },
    [theme.breakpoints.up("lg")]: {
      color: theme.palette.common.white,
    },
  },
  subHeading: {
    color: theme.palette.text.secondary,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      color: theme.palette.common.white,
    },
  },
  mapContainer: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      height: "270px",
      width: "428px",
      margin: "32px auto",
    },

    "&>iframe": {
      width: "100%",
      height: "clamp(200px,60vw,400px)",
      [theme.breakpoints.up("lg")]: {
        height: "100%",
        width: "100%",
      },
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    background: theme.palette.grey["100"],
    padding: theme.spacing(2, 0, 6, 2),

    [theme.breakpoints.up("md")]: {
      background: theme.palette.common.white,
    },

    [theme.breakpoints.up("lg")]: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%",

      padding: theme.spacing(2, 2, 4, 4),
      height: "100%",
    },
  },
  paperHeading: {
    paddingBlock: theme.spacing(3, 4),
    paddingInline: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },

  paperForm: {
    //
    // width: "100%",
  },

  formControlFullField: {
    width: "100%",
    // background: "white",
    // height: theme.spacing(12),
  },
  textInput: {
    width: "100%",
    background: "white",
  },
  submitButtonContainer: {
    marginTop: theme.spacing(4),
  },
  contentContainer: {
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-evenly",
      marginTop: theme.spacing(8),
      maxWidth: "1200px",
      margin: "0 auto",
    },
  },
  contactItemList: {
    margin: "0",
  },
  contactItemListRow: {
    [theme.breakpoints.up("lg")]: {
      padding: "12px 0px !important",
    },
  },
}));

const content = {
  heading: "Contact Us",
  subHeading: "Let’s get in touch with us",
};

const ContactUsSection = () => {
  const classes = useStyles();
  const {
    register,
    watch,
    formState: { errors, ...formState },
    setFocus,
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const { "contact-us": contactUsFormState = {}, ...restArgs } = watch(); // when pass nothing as argument, you are watching everything

  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   country: "",
  //   message: "",
  // });

  // const formState = useContactUsStore(state => state.formState);
  // const updateFormState = useContactUsStore(state => state.updateFormState);

  console.log({ formState, errors, contactUsFormState, restArgs });

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

  // console.log({ address, email, phoneNumbers });

  const theme = useTheme();
  const isDesktopDeviceAndUp = useMediaQuery(theme.breakpoints.up("lg"));
  const iconColorVariant = isDesktopDeviceAndUp ? "secondary" : "default";
  const textColorVariant = isDesktopDeviceAndUp ? "secondary" : "primary";

  const handleFormSubmission = values => {
    console.log({ values });
    // TODO: Submit data to netlify forms

    // TODO: Submit the results to netlify's form data

    // TODO: Show Toast

    // TODO: Reset the form
  };

  //   https://goo.gl/maps/oNn9TP1dHEURTFGk8
  return (
    <Container name="landing__contact-us" className={classes.container} maxWidth="auto">
      <Box className={classes.headingContainer}>
        <Typography variant="h2" component="h2" className={classes.heading}>
          {content.heading}
        </Typography>
        <Typography variant="h4" component="span" className={classes.subHeading}>
          {content.subHeading}
        </Typography>
      </Box>
      {/* Create a grid for containing both form and aside */}
      <Grid
        container
        spacing={2}
        className={classes.contentContainer}
        component="form"
        onSubmit={handleSubmit(handleFormSubmission)}
      >
        <Grid item xs={12} md={12} lg={5}>
          <Grid item className={classes.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4463.520174099868!2d75.9130532!3d30.858677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d67dc262cd5%3A0x97cb1643bce70173!2sHarmindera%20International!5e1!3m2!1sen!2sin!4v1643485718341!5m2!1sen!2sin"
              // width="319px"
              // height="252px"
              style={{ border: 0, borderRadius: 12 }}
              allowfullscreen=""
              loading="lazy"
              aria-hidden="false"
              tabIndex="0"
            />
          </Grid>
          <Grid container item xs={12} md={12} className={classes.contactItemList} spacing={3}>
            <Grid container item xs={12} alignItems="center" className={classes.contactItemListRow}>
              <Grid item xs={3} sm={2} md={1} lg={2}>
                <IconButton aria-label="Location" color={iconColorVariant}>
                  <RoomOutlined color={textColorVariant} />
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={10} md={11} lg={10}>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  {address}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} alignItems="center" className={classes.contactItemListRow}>
              <Grid item xs={3} sm={2} md={1} lg={2}>
                <IconButton aria-label="Phone" color={iconColorVariant}>
                  <PhoneOutlined color={textColorVariant} />
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={10} md={11} lg={10}>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  {phoneNumbers[0]}
                </Typography>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  {phoneNumbers[1]}
                </Typography>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  {phoneNumbers[2]}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} alignItems="center" className={classes.contactItemListRow}>
              <Grid item xs={3} sm={2} md={1} lg={2}>
                <IconButton aria-label="Email" color={iconColorVariant}>
                  <MailOutlineOutlined color={textColorVariant} />
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={10} md={11} lg={10}>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  {email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Paper className={classes.paper}>
          <Grid container item xs={12}>
            <Typography variant="h5" className={classes.paperHeading}>
              Contact Form
            </Typography>
            <Grid container item xs={12} spacing={2} className={classes.paperForm}>
              {/* <Grid container item xs={12} lg={6}> */}
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Your Name"
                  placeholder="Your Name"
                  id="outlined-size-small"
                  variant="outlined"
                  fullWidth
                  formControlProps={{
                    classes: { root: classes.formControlFullField },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                  // value={formState.name}
                  // onChange={e => updateFormState({ name: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                    pattern: {
                      value: /^[a-z ,.'-]+$/gi,
                      message: "Please enter a valid name",
                    },
                  }}
                  register={register}
                  name="name"
                  formName="contact-us"
                  error={errors?.["contact-us"]?.["name"]}
                  helperText={errors?.["contact-us"]?.["name"]?.message}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Email Address"
                  placeholder="Email Address"
                  id="outlined-size-small"
                  variant="outlined"
                  fullWidth
                  formControlProps={{
                    classes: { root: classes.formControlFullField },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                  type="email"
                  // value={formState.email}
                  // onChange={e => updateFormState({ email: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  register={register}
                  name="email"
                  formName="contact-us"
                  error={errors?.["contact-us"]?.["email"]}
                  helperText={errors?.["contact-us"]?.["email"]?.message}
                />
              </Grid>
              {/* </Grid> */}
              {/* <Grid container item xs={12} lg={6}> */}
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Phone"
                  placeholder="Phone"
                  id="outlined-size-small"
                  variant="outlined"
                  fullWidth
                  formControlProps={{
                    classes: { root: classes.formControlFullField },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                  // value={formState.phone}
                  // onChange={e => updateFormState({ phone: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                    pattern: {
                      value: /^[0-9 +'-]+$/gi,
                      message: "Invalid Phone Number",
                    },
                    minLength: {
                      value: 8,
                      message: "Must be at least 8 digits",
                    },
                  }}
                  register={register}
                  name="phone"
                  formName="contact-us"
                  error={errors?.["contact-us"]?.["phone"]}
                  helperText={errors?.["contact-us"]?.["phone"]?.message}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Country"
                  placeholder="Country"
                  id="outlined-size-small"
                  variant="outlined"
                  fullWidth
                  formControlProps={{
                    classes: { root: classes.formControlFullField },
                  }}
                  classes={{
                    root: classes.textInput,
                  }}
                  // value={formState.country}
                  // onChange={e => updateFormState({ country: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                  }}
                  register={register}
                  name="country"
                  formName="contact-us"
                  error={errors?.["contact-us"]?.["country"]}
                  helperText={errors?.["contact-us"]?.["country"]?.message}
                />
              </Grid>
              {/* </Grid> */}
              {/* <Grid container item xs={12} lg={6}> */}
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  placeholder="Message"
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
                  // value={formState.message}
                  // onChange={e => updateFormState({ message: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                  }}
                  register={register}
                  name="message"
                  formName="contact-us"
                  error={errors?.["contact-us"]?.["message"]}
                  helperText={errors?.["contact-us"]?.["message"]?.message}
                />
              </Grid>
              {/* </Grid> */}
              <Grid className={classes.submitButtonContainer} item xs={12}>
                <SolidButton fullWidth>Send Message</SolidButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {/* </Box> */}
    </Container>
  );
};

export default ContactUsSection;

// TODO: Add Icons
// TODO:
