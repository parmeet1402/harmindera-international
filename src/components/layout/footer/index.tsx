import React from "react";

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

interface Props {
  name?: string;
}

interface Link {
  label: string;
  link: string;
}

const data = {
  quickLinks: [
    {
      links: [
        {
          label: "About",
          link: "/about",
        },
      ],
    },
    {
      links: [
        {
          label: "Contact Us",
          link: "/contact",
        },
      ],
    },
  ],

  services: [
    {
      links: [
        {
          label: "JCB Parts",
          link: "/products/jcb-parts",
        },
      ],
    },
    {
      links: [
        {
          label: "Nuts",
          link: "/products/nuts",
        },
      ],
    },
    {
      links: [
        {
          label: "Bolts",
          link: "/products/bolts",
        },
      ],
    },
    {
      links: [
        {
          label: "Agriculture Products",
          link: "/products/agriculture-products",
        },
      ],
    },
    {
      links: [
        {
          label: "Auto Parts",
          link: "/products/auto-parts",
        },
      ],
    },
  ],

  reachUs: [
    {
      icon: <MailOutlineOutlined style={{ marginRight: "12px" }} color="secondary" />,
      links: [{ label: "hello@harmindera.co", link: "/" }],
    },
    {
      icon: <PhoneOutlined style={{ marginRight: "12px" }} color="secondary" />,
      links: [
        { label: "+91 9876100890", link: "/" },
        { label: "+91 9876600890", link: "/" },
        { label: "+91 9356210290", link: "/" },
      ],
    },

    {
      icon: <RoomOutlined style={{ marginRight: "12px" }} color="secondary" />,
      links: [{ label: "122-B Model House, Model Town,Ludhiana, 141002", link: "/" }],
    },
  ],
};

const useStyles = makeStyles(theme => ({
  footerStyles: {
    backgroundColor: theme.palette.background.dark2,
  },
  root: {
    color: theme.palette.secondary.main,
    padding: "94px",
    overflowX: "hidden",
    [`${theme.breakpoints.down("md")}`]: {
      padding: "58px 72px",
      "&>div": {
        display: "grid",
        gridTemplateColumns: "1fr",
      },
    },

    [`${theme.breakpoints.down("sm")}`]: {
      padding: "50px 60px",
    },

    [`${theme.breakpoints.down("xs")}`]: {
      padding: "24px 0px",
    },
    // ["@media (max-width:480px)"]: {
    //   padding: "12px 0px",
    // },
  },
  gridRoot: {
    margin: "0 auto",
    width: "calc(100% - 60px)",
    // justifyContent:"space"
    ["@media (max-width:480px)"]: {
      width: "calc(100% - 20px)",
    },
  },
  linkStyles: {
    fontWeight: theme.typography.fontWeightBold,
    color: `${theme.palette.grey["300"]} !important`,
    marginLeft: "2px",
    marginBottom: "4px",

    "&#active-link--nav": {
      color: theme.palette.secondary.main,
    },

    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  iconGridStyles: {
    marginTop: "12px",
  },
  iconContainerStyles: {
    textAlign: "center",
    marginLeft: "-50%",
    [`${theme.breakpoints.down("md")}`]: {
      textAlign: "left",
      marginLeft: "0",
    },
  },
  remainingContainerStyles: {
    [`${theme.breakpoints.down("md")}`]: {
      padding: "32px 0 !important",

      "&>div>div": {
        marginLeft: "4px",
      },
    },
  },
  firstContainerStyles: {
    [`${theme.breakpoints.down("md")}`]: {
      padding: "32px 0 !important",
    },
  },
  copyrightTextStyles: {
    flexGrow: 1,
    marginLeft: "12ch",
    [`${theme.breakpoints.down("sm")}`]: {
      marginLeft: 0,
      width: "fit-content",
    },
  },
  footerLowerSectionStyles: {
    color: "white",
    padding: "0 0 20px",
    flexDirection: "row",
    [`${theme.breakpoints.down("sm")}`]: {
      flexDirection: "column",
      marginLeft: "64px",
      width: "calc(100% - 64px)",
    },
    [`${theme.breakpoints.down("xs")}`]: {
      marginLeft: "32px",
      width: "calc(100% - 32px)",
    },
    ["@media (max-width:480px)"]: {
      marginLeft: "12px",
    },
  },
  footerTermsStyles: {
    display: "inline-flex",
    marginLeft: "-12ch",
    [`${theme.breakpoints.down("sm")}`]: {
      marginLeft: 0,
      width: "fit-content",
    },
  },
  privacyPolicyTextStyles: {
    marginRight: "26ch",
    [`${theme.breakpoints.down("sm")}`]: {
      marginRight: 0,
    },
  },
  // footerLowerSectionStyles: {
  //   color: "white",
  //   padding: "0 0 20px",
  //   direction: "row",
  //   [`${theme.breakpoints.down("sm")}`]: {
  //     padding: "0 20px",
  //   },
  // },
}));

const Footer = (props: Props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <Container>
        <Container classes={{ root: classes.root }}>
          <Grid classes={{ root: classes.gridRoot }} container justify="space-between" spacing={4}>
            <Grid item classes={{ root: classes.firstContainerStyles }}>
              <Grid container direction="column">
                <Grid classes={{ root: classes.iconContainerStyles }}>
                  <Logo variant="light" size="large" />
                  <Grid classes={{ root: classes.iconGridStyles }}>
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
              </Grid>
            </Grid>
            <Grid item classes={{ root: classes.remainingContainerStyles }}>
              <Grid direction="column" container>
                <Typography variant="h5" style={{ marginBottom: "20px" }}>
                  Quick links
                </Typography>
                {data.quickLinks.map((item, index) => {
                  return (
                    <Grid key={index}>
                      {item.icon ? item.icon : <></>}
                      <Grid direction="column" container>
                        {item.links.map((link, index) => (
                          <Link key={index} href={link.link} classes={{ root: classes.linkStyles }}>
                            <Typography variant="body2">{link.label}</Typography>
                          </Link>
                        ))}
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item classes={{ root: classes.remainingContainerStyles }}>
              <Typography variant="h5" style={{ marginBottom: "20px" }}>
                Services
              </Typography>
              {data.services.map((item, index) => {
                return (
                  <Grid key={index}>
                    {item.icon ? item.icon : <></>}
                    <Grid direction="column" container>
                      {item.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.link}
                          classes={{
                            root: classes.linkStyles,
                          }}
                        >
                          <Typography variant="body2">{link.label}</Typography>
                        </Link>
                      ))}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item classes={{ root: classes.remainingContainerStyles }}>
              <Typography variant="h5" style={{ marginBottom: "20px" }}>
                Reach us
              </Typography>
              {data.reachUs.map((item, index) => {
                return (
                  <Grid key={index} container direction="row" wrap="nowrap">
                    <Link href={item.links[0].link}>{item.icon ? item.icon : <></>}</Link>
                    <Grid container direction="column" style={{ marginBottom: "16px" }}>
                      {item.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.link}
                          classes={{
                            root: classes.linkStyles,
                          }}
                        >
                          <Typography variant="body2">{link.label}</Typography>
                        </Link>
                      ))}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
        <Grid
          className={classes.footerLowerSectionStyles}
          container
          // direction="row"
          // style={{ color: "white", padding: "0 0 20px" }}
        >
          <Typography
            variant="subtitle2"
            className={classes.copyrightTextStyles}
            // style={{ flexGrow: "1", marginLeft: "12ch" }}
            color="secondary"
          >
            © 2021 Harmindera International. All rights reserved
          </Typography>
          <Box className={classes.footerTermsStyles}>
            <Link href="/terms-and-conditions">
              <Typography variant="subtitle2" color="secondary">
                Terms & Conditions
              </Typography>
            </Link>
            &nbsp; &#124; &nbsp;
            <Link href="/privacy-policy">
              <Typography
                className={classes.privacyPolicyTextStyles}
                variant="subtitle2"
                color="secondary"
              >
                Privacy Policy
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
