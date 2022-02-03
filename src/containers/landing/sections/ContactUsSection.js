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
import TextField from "@components/form/TextField";
import { SolidButton } from "@components/form/Button";
import { Container, Hidden } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useContactUsStore from "@zustand/contact";
import { useForm } from "react-hook-form";
import isEmpty from "lodash/isEmpty";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useQuery } from "react-query";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  link: {
    color: theme.palette.primary.main,
    [theme.breakpoints.up("lg")]: {
      color: theme.palette.common.white,
    },
  },
  domLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      color: theme.palette.common.white,
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const content = {
  heading: "Contact Us",
  subHeading: "Let’s get in touch with us",
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactUsSection = ({ productName = "" }) => {
  const classes = useStyles();
  const { data: countryName } = useQuery("country-ip", () => {
    return fetch(`https://api.ipregistry.co/?key=${process.env.GATSBY_IP_KEY}`).then(res =>
      res.json().then(data => data.location.country.name),
    );
  });

  const {
    register,
    watch,
    formState: { errors, ...formState },

    handleSubmit,
    reset,
    setValue,
  } = useForm({
    mode: "all",
  });
  const contactUsFormState = watch(); // when pass nothing as argument, you are watching everything

  useEffect(() => {
    if (countryName) {
      setValue("country", countryName);
    }
  }, [countryName]);

  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   country: "",
  //   message: "",
  // });

  // const formState = useContactUsStore(state => state.formState);
  // const updateFormState = useContactUsStore(state => state.updateFormState);

  // console.log({ formState, errors, contactUsFormState, restArgs });

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

  useEffect(() => {
    if (productName) {
      setValue("message", `Hey, I want to know about ${productName}`);
    }
  }, [productName]);

  // console.log({ address, email, phoneNumbers });

  const theme = useTheme();
  const isMediumDevicesAndUp = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktopDeviceAndUp = useMediaQuery(theme.breakpoints.up("lg"));
  const iconColorVariant = isDesktopDeviceAndUp ? "secondary" : "default";
  const textColorVariant = isDesktopDeviceAndUp ? "secondary" : "primary";

  const [isLoading, setIsLoading] = useState(false);
  const [isAlertShown, setIsAlertShown] = useState(false);

  const handleFormSubmission = values => {
    console.log({ ...values });
    // DONE: Submit data to netlify forms
    setIsLoading(true);
    // DONE: Submit the results to netlify's form data
    // fetch("https://getform.io/f/015e1f0e-13a0-4852-9860-1348ae28918e", {
    //   method: "POST",
    //   data: values,
    // });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form-contacts", ...values }),
    })
      .then(() => {
        setIsLoading(false);
        setIsAlertShown(true);
        reset();
      })
      .catch(() => {
        console.log({ error });
        setIsLoading(false);
      });
    // DONE: Show Toast

    // // TODO: Reset the form
    // setTimeout(() => {
    //   setIsLoading(false);
    //   setIsAlertShown(true);
    //   reset();
    // }, 3000);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertShown(false);
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
      <Grid container spacing={2} className={classes.contentContainer}>
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
                <IconButton
                  aria-label="Location"
                  color={iconColorVariant}
                  href="https://goo.gl/maps/6io3YtPEfc6h9mAu5"
                  target="_blank"
                >
                  <RoomOutlined color={textColorVariant} />
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={10} md={11} lg={10}>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  <a
                    href="https://goo.gl/maps/6io3YtPEfc6h9mAu5"
                    target="_blank"
                    className={classes.domLink}
                  >
                    {address}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} alignItems="center" className={classes.contactItemListRow}>
              <Grid item xs={3} sm={2} md={1} lg={2}>
                <IconButton aria-label="Phone" color={iconColorVariant} href="tel:+919876100890">
                  <PhoneOutlined color={textColorVariant} />
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={10} md={11} lg={10}>
                {/* <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  {phoneNumbers[0]}
                </Typography> */}
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  <a
                    href={`tel:${phoneNumbers[0].replaceAll(" ", "")}`}
                    className={classes.domLink}
                    underline="hover"
                    target="_blank"
                  >
                    {phoneNumbers[0]}
                  </a>
                </Typography>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  <a
                    href={`tel:${phoneNumbers[1].replaceAll(" ", "")}`}
                    className={classes.domLink}
                    underline="hover"
                    target="_blank"
                  >
                    {phoneNumbers[1]}
                  </a>
                </Typography>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
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
            </Grid>
            <Grid container item xs={12} alignItems="center" className={classes.contactItemListRow}>
              <Grid item xs={3} sm={2} md={1} lg={2}>
                <IconButton
                  aria-label="Email"
                  color={iconColorVariant}
                  href={`mailto:${email}${
                    productName
                      ? `?subject=Query for ${productName}&body=Hey,%0A%0AI want to know about ${productName} `
                      : ""
                  }`}
                >
                  <MailOutlineOutlined color={textColorVariant} />
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={10} md={11} lg={10}>
                <Typography variant="subtitle1" align="left" color={textColorVariant}>
                  <a
                    href={`mailto:${email}${
                      productName
                        ? `?subject=Query for ${productName}&body=Hey,%0A%0AI want to know about ${productName} `
                        : ""
                    }`}
                    className={classes.domLink}
                    underline="hover"
                  >
                    {email}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            {!isMediumDevicesAndUp && (
              <Grid
                container
                item
                xs={12}
                alignItems="center"
                className={classes.contactItemListRow}
              >
                <Grid item xs={3} sm={2} md={1} lg={2}>
                  <IconButton
                    aria-label="Email"
                    color={iconColorVariant}
                    href={`https://wa.me/${phoneNumbers[0].replaceAll("+91 ", "91")}${
                      productName ? `?text=Hey,%0A%0AI want to know about ${productName} ` : ""
                    }`}
                  >
                    <WhatsApp color={textColorVariant} />
                  </IconButton>
                </Grid>
                <Grid item xs={9} sm={10} md={11} lg={10}>
                  <Typography variant="subtitle1" align="left" color={textColorVariant}>
                    <a
                      href={`https://wa.me/${phoneNumbers[0].replaceAll("+91 ", "91")}${
                        productName ? `?text=Hey,%0A%0AI want to know about ${productName} ` : ""
                      }`}
                      className={classes.domLink}
                      underline="hover"
                    >
                      {phoneNumbers[0]}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Paper
          className={classes.paper}
          // method="post"
          name="form-contacts"
          component="form"
          data-netlify={true}
          onSubmit={handleSubmit(handleFormSubmission)}
          // netlify-honeypot="bot-field"
        >
          {/* <input type="hidden" name="bot-field" /> */}
          <input type="hidden" name="form-name" value="form-contacts" />

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
                  value={contactUsFormState.name}
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
                  error={errors?.["name"]}
                  helperText={errors?.["name"]?.message}
                  disabled={isLoading}
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
                  value={contactUsFormState.email}
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
                  error={errors?.["email"]}
                  helperText={errors?.["email"]?.message}
                  disabled={isLoading}
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
                  value={contactUsFormState.phone}
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
                  error={errors?.["phone"]}
                  helperText={errors?.["phone"]?.message}
                  disabled={isLoading}
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
                  value={contactUsFormState.country}
                  // onChange={e => updateFormState({ country: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                  }}
                  register={register}
                  name="country"
                  formName="contact-us"
                  error={errors?.["country"]}
                  helperText={errors?.["country"]?.message}
                  disabled={isLoading}
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
                  value={contactUsFormState.message}
                  // onChange={e => updateFormState({ message: e.target.value })}
                  validationSchema={{
                    required: "This is required",
                  }}
                  register={register}
                  name="message"
                  formName="contact-us"
                  error={errors?.["message"]}
                  helperText={errors?.["message"]?.message}
                  disabled={isLoading}
                />
              </Grid>
              {/* </Grid> */}
              <Grid className={classes.submitButtonContainer} item xs={12}>
                <SolidButton
                  disabled={
                    !contactUsFormState.name ||
                    !contactUsFormState.email ||
                    !contactUsFormState.phone ||
                    !contactUsFormState.country ||
                    !contactUsFormState.message ||
                    (errors && !isEmpty(errors["contact-us"]))
                  }
                  type="submit"
                  fullWidth
                >
                  {isLoading ? (
                    <CircularProgress size={isDesktopDeviceAndUp ? 28 : 20} color="secondary" />
                  ) : (
                    "Send Message"
                  )}
                </SolidButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isAlertShown}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Thanks for providing with your details, Looking forward to work with you!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUsSection;

// TODO: Add Icons
// TODO:
