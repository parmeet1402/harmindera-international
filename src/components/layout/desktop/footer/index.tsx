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
    {
      links: [
        {
          label: "About",
          link: "/about",
        },
      ],
    },
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
      icon: <MailOutlineOutlined />,
      links: [{ label: "hello@harmindera.co", link: "" }],
    },
    {
      icon: <PhoneOutlined />,
      links: [
        { label: "+91 9876100890", link: "" },
        { label: "+91 9876600890", link: "" },
        { label: "+91 9356210290", link: "" },
      ],
    },
    {
      icon: <PhoneOutlined />,
      links: [
        { label: "+91 9876100890", link: "" },
        { label: "+91 9876600890", link: "" },
        { label: "+91 9356210290", link: "" },
      ],
    },
    {
      icon: <RoomOutlined />,
      links: [{ label: "122-B Model House, Model Town,Ludhiana, 141002", link: "" }],
    },
  ],
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark2,
    color: theme.palette.secondary.main,
    padding: "20px",
  },
  gridRoot: {
    // backgroundColor: "red",
    maxWidth: "900px",
    width: "90%",
    margin: "0 auto",
  },
  linkStyles: {
    // margin: "12px",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main,

    "&#active-link--nav": {
      color: theme.palette.secondary.main,
    },

    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const Footer = () => {
  const { root, gridRoot, linkStyles } = useStyles();
  return (
    <Container classes={{ root }}>
      <Grid classes={{ root: gridRoot }} container justify="center" spacing={4}>
        <Grid item xs={3}>
          <Grid container direction="column" alignItems="center" style={{ margin: "0 20px" }}>
            <Logo variant="light" />
            <Grid>
              <IconButton
                colorOverrides={{
                  icon: {
                    color: "text",
                    colorVariant: "primary",
                    hover: "text",
                    hoverVariant: "primary",
                  },
                }}
              >
                <WhatsApp />
              </IconButton>
              <IconButton
                colorOverrides={{
                  icon: {
                    color: "text",
                    colorVariant: "primary",
                    hover: "text",
                    hoverVariant: "primary",
                  },
                }}
              >
                <RoomOutlined />
              </IconButton>
              <IconButton
                colorOverrides={{
                  icon: {
                    color: "text",
                    colorVariant: "primary",
                    hover: "text",
                    hoverVariant: "primary",
                  },
                }}
              >
                <PhoneOutlined />
              </IconButton>
              <IconButton
                colorOverrides={{
                  icon: {
                    color: "text",
                    colorVariant: "primary",
                    hover: "text",
                    hoverVariant: "primary",
                  },
                }}
              >
                <MailOutlineOutlined />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid direction="column" container>
            <Typography variant="h6">Quick links</Typography>
            {data.quickLinks.map(item => {
              return (
                <Grid>
                  {item.icon ? item.icon : <></>}
                  <Grid direction="column">
                    {item.links.map(link => (
                      <Link href={link.link} classes={{ root: linkStyles }}>
                        {link.label}
                      </Link>
                    ))}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Services</Typography>
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
                      {link.label}
                    </Link>
                  ))}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Reach us</Typography>
          {data.reachUs.map(item => {
            return (
              <Grid container direction="row">
                {item.icon ? item.icon : <></>}
                <Grid container direction="column">
                  {item.links.map(link => (
                    <Link
                      href={link.link}
                      classes={{
                        root: linkStyles,
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
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
