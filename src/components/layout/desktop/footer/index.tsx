import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@components/navigation/Link";
import { MailOutlineOutlined, PhoneOutlined, RoomOutlined, WhatsApp } from "@material-ui/icons";
import { Logo } from "@content/assets/CustomIcon";
import { IconButton } from "@components/form/Button";

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
    /* {
      links: [
        {
          label: "About",
          link: "/about",
        },
      ],
    }, */
  ],

  services: [
    {
      links: [
        {
          label: "JCB Parts",
          link: "products/jcb-parts",
        },
      ],
    },
    {
      links: [
        {
          label: "Nuts",
          link: "products/nuts",
        },
      ],
    },
    {
      links: [
        {
          label: "Bolts",
          link: "products/bolts",
        },
      ],
    },
    {
      links: [
        {
          label: "Agriculture Products",
          link: "products/agriculture-products",
        },
      ],
    },
    {
      links: [
        {
          label: "Auto Parts",
          link: "products/auto-parts",
        },
      ],
    },
  ],

  reachUs: [
    {
      icon: <MailOutlineOutlined color="secondary" />,
      links: [{ label: "hello@harmindera.co", link: "" }],
    },
    {
      icon: <PhoneOutlined color="secondary" />,
      links: [
        { label: "+91 9876100890", link: "" },
        { label: "+91 9876600890", link: "" },
        { label: "+91 9356210290", link: "" },
      ],
    },

    {
      icon: <RoomOutlined color="secondary" />,
      links: [{ label: "122-B Model House, Model Town,Ludhiana, 141002", link: "" }],
    },
  ],
};

const useStyles = makeStyles(theme => ({
  footerStyles: {
    backgroundColor: theme.palette.background.dark2,
  },
  root: {
    // backgroundColor: theme.palette.background.dark2,
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
  },
  gridRoot: {
    // backgroundColor: "red",
    // maxWidth: "900px",
    // width: "90%",
    margin: "0 auto",
  },
  linkStyles: {
    // margin: "12px",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey["300"],
    marginLeft: "12px",

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
      marginLeft: "8px",
      "&>div>div": {
        marginLeft: "8px",
      },
    },
  },
}));

const Footer = () => {
  const {
    root,
    gridRoot,
    linkStyles,
    footerStyles,
    iconGridStyles,
    iconContainerStyles,
    remainingContainerStyles,
  } = useStyles();
  return (
    <footer className={footerStyles}>
      <Container classes={{ root }}>
        <Grid classes={{ root: gridRoot }} container justify="center" spacing={4}>
          <Grid item>
            <Grid container direction="column">
              <Grid classes={{ root: iconContainerStyles }}>
                <Logo variant="light" />
                <Grid classes={{ root: iconGridStyles }}>
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
          <Grid item classes={{ root: remainingContainerStyles }}>
            <Grid direction="column" container>
              <Typography variant="h5">Quick links</Typography>
              {data.quickLinks.map(item => {
                return (
                  <Grid>
                    {item.icon ? item.icon : <></>}
                    <Grid direction="column">
                      {item.links.map(link => (
                        <Link
                          href={link.link}
                          style={{ marginLeft: "120px" }}
                          classes={{ root: linkStyles }}
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
          <Grid item classes={{ root: remainingContainerStyles }}>
            <Typography variant="h5">Services</Typography>
            {data.services.map(item => {
              return (
                <Grid>
                  {item.icon ? item.icon : <></>}
                  <Grid direction="column">
                    {item.links.map(link => (
                      <Link
                        href={link.link}
                        classes={{
                          root: linkStyles,
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
          <Grid item classes={{ root: remainingContainerStyles }}>
            <Typography variant="h5" style={{ marginBottom: "20px" }}>
              Reach us
            </Typography>
            {data.reachUs.map(item => {
              return (
                <Grid container direction="row" wrap="nowrap">
                  <Link href={item.links[0].link}>{item.icon ? item.icon : <></>}</Link>
                  <Grid container direction="column" style={{ marginBottom: "16px" }}>
                    {item.links.map(link => (
                      <Link
                        href={link.link}
                        classes={{
                          root: linkStyles,
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
    </footer>
  );
};

export default Footer;

// Footer Component
// TODO: Container Styling
// -> Upper Grid
// TODO: Logo and Social Meida
// TODO: Quick Links
// TODO: Services
// TODO: Reach Us
// -> Lower Grid
// TODO: Firm Corporation
// TODO: Links
