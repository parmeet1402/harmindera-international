import React, { useState } from "react";
import useUIStore from "@zustand/ui";
import TextField from "@components/form/TextField";
import {
  MailOutlineOutlined,
  PhoneOutlined,
  RoomOutlined,
  SearchOutlined,
  WhatsApp,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@components/navigation/Link";
import { IconButton } from "@components/form/Button";
import config from "../../../../config/site";
import { Box, Grid, InputAdornment, Typography } from "@material-ui/core";

interface Props {}

const useStyles = makeStyles(theme => ({
  root: {
    "& h4": {
      marginLeft: "8px",
    },

    "&#active-link--nav": {
      color: theme.palette.primary.main,
    },
  },
  formControlStyles: {
    width: "100%",
    // margin: "0 auto 28px",
    margin: "0 auto 16px",
    "&>div": {
      width: "100%",
      margin: "20px auto",
    },
  },
  boldStyle: {
    fontWeight: "bold",
  },
}));

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact Us", path: "/contact" },
];

// const innerHeight = window.innerHeight;

const ExpandedMobileNavbar = (props: Props) => {
  const { isMobileNavbarExpanded, shrinkMobileNavbar } = useUIStore();
  const { root, formControlStyles, boldStyle } = useStyles();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  if (!isMobileNavbarExpanded) return <></>;

  const isFooterVisible = !isFocused;

  /* height={`${window.innerHeight - 58}px`}
      width="100%"
      position="absolute"
      top="0"
      mt="59px"
      px="16px"
      bgcolor="background.paper" */

  /*   position="absolute"
      height={`${window.innerHeight - 58}px`}
      width="100%"
      top="100px"
      mt="59px"
      px="16px"
      bgcolor="background.paper"
      className="avi" */
  return (
    <Box
      position="absolute"
      height={`${window.innerHeight - 58}px`}
      width="100%"
      top="100px"
      mt="-32px"
      // mt="59px"
      px="16px"
      bgcolor="background.paper"
      className="avi"
    >
      <TextField
        id="nav__search-input-field--mobile"
        placeholder="Search products"
        formControlProps={{ classes: { root: formControlStyles } }}
        inputProps={{ "aria-label": "search" }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        autoComplete="off"
      />
      <div onClick={shrinkMobileNavbar}>
        {links.map(item => (
          <Link
            href={item.path}
            classes={{
              root,
            }}
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
          <Typography variant="h6" classes={{ root: boldStyle }}>
            {config.title}
          </Typography>
          <Typography variant="body2" style={{ width: "70%", marginBottom: "16px" }}>
            17 Sua Road, Dhandari Kalan, Ludhiana, 141002
          </Typography>
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
        </Box>
      )}
    </Box>
  );
};

export default ExpandedMobileNavbar;
