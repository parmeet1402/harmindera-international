import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MailOutlineOutlined from "@material-ui/icons/MailOutlineOutlined";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import RoomOutlined from "@material-ui/icons/RoomOutlined";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import WhatsApp from "@material-ui/icons/WhatsApp";

// Internal
import config from "../../../../config/site";

// Components
import TextField from "@components/form/TextField";
import Link from "@components/navigation/Link";
import { IconButton } from "@components/form/Button";

// State
import useUIStore from "@zustand/ui";
import { safeWindow } from "@utils/ssr";

interface Props {}

const useStyles = makeStyles(theme => ({
  link: {
    "& h4": {
      marginLeft: "8px",
      fontSize: "1.78rem",
    },

    "&#active-link--nav": {
      color: theme.palette.primary.main,
    },
  },
  formControl: {
    width: "100%",
    margin: "0 auto 16px",
    "&>div": {
      width: "100%",
      margin: "20px auto",
    },
  },
  bold: {
    fontWeight: "bold",
  },
  linksContainer: {
    marginTop: theme.spacing(3),
  },
}));

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact Us", path: "/contact" },
];

const ExpandedMobileNavbar = (props: Props) => {
  const classes = useStyles();
  const {
    site: {
      siteMetadata: { address, email, phoneNumbers },
    },
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
      }
    `,
  );

  const { isMobileNavbarExpanded, shrinkMobileNavbar } = useUIStore();

  // Handle Focus state of search field
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isFooterVisible = !isFocused;

  // Return empty fragment when navbar isn't expanded
  if (!isMobileNavbarExpanded) return <></>;

  return (
    <Box
      position="absolute"
      height={`${safeWindow.innerHeight - 58}px`}
      width="100%"
      top="100px"
      mt="-32px"
      px="16px"
      bgcolor="background.paper"
      className="avi"
    >
      {/* <TextField
        id="nav__search-input-field--mobile"
        placeholder="Search products"
        formControlProps={{ classes: { root: classes.formControl } }}
        inputProps={{ "aria-label": "search" }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        autoComplete="off"
      /> */}

      <div onClick={shrinkMobileNavbar} className={classes.linksContainer}>
        {links.map(item => (
          <Link
            href={item.path}
            classes={{
              root: classes.link,
            }}
            key={item.label}
            underline="none"

            // key={item.path}
            // onClick={shrinkMobileNavbar}
          >
            <Typography variant="h4" gutterBottom>
              {item.label}
            </Typography>
          </Link>
        ))}
      </div>

      {isFooterVisible && (
        <Box position="absolute" bottom="30px" width="80%" ml="2px">
          <Typography variant="h4" classes={{ root: classes.bold }}>
            {config.title}
          </Typography>
          <Typography variant="body2" style={{ width: "90%", marginBottom: "16px" }}>
            {address}
          </Typography>
          <Grid>
            <IconButton
              href={`https://wa.me/${phoneNumbers[0].replaceAll("+91 ", "91")}`}
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
              href="https://goo.gl/maps/NbTXbrxUJ6coPinGA"
              target="_blank"
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
              href="tel:+919876100890"
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
              href={`mailto:${email}`}
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
        </Box>
      )}
    </Box>
  );
};

export default ExpandedMobileNavbar;
