import React from "react";
// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
    background: "red",
  },
  rightContentContainer: {
    background: "green",
    width: "calc(100% - 320px)",
  },
  paper: {
    height: "100%",
  },
}));

const content = {
  heading: "Contact Us",
  subHeading: "We are here to help you",
};

const ContactUsSection = () => {
  const classes = useStyles();

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
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            aria-hidden="false"
            tabIndex="0"
          />
          <Grid direction="column">
            <Grid></Grid>
          </Grid>
        </Grid>
        <Grid direction="column" className={classes.rightContentContainer}>
          <Paper className={classes.paper}>
            <Typography>Request Callback</Typography>
            <Box>
              <Grid></Grid>
              <Grid></Grid>
              <Grid></Grid>
            </Box>
            <Grid>
              <Button>Send Message</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsSection;

// TODO: Add Icons
// TODO:
