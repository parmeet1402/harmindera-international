import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
// import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import ButtonComponent from "../components/Button";
// import ButtonBase from "@material-ui/core/ButtonBase";

import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import { SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    backgroundColor: theme.palette.grey["100"],
    borderRadius: "10px",
    padding: "11px 14px",
    width: "424px",
    position: "relative",
    border: `1px solid ${theme.palette.grey["200"]}`,
    transition: theme.transitions.create(["background-color", "border"]),
  },

  focused: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey["400"]}`,
  },

  multiline: {
    padding: "16px 14px",
  },
}))(Input);

const FormHelperTextStyled = withStyles((theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}))(FormHelperText);

const StyledButton = withStyles((theme) => ({
  root: {
    padding: "16px 38px",
  },
  label: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: 500,
  },
  disabled: {
    cursor: "not-allowed",
  },
}))(Button);

const StyledOutlinedButton = withStyles((theme) => ({
  root: {
    padding: "16px 38px",
  },
  outlined: {
    "&:hover": {
      color: theme.palette.primary.main,
      background: theme.palette.common.white,
    },
  },
  label: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: 500,
  },
  disabled: {
    cursor: "not-allowed",
  },
}))(Button);

const StyledRoundedButton = withStyles((theme) => ({
  root: {
    padding: "16px 38px",
    borderRadius: "24px",
    background: theme.palette.primary.lighter,
    boxShadow: theme.shadows[1],
  },
  label: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: 500,
  },
  disabled: {
    cursor: "not-allowed",
  },
}))(Button);

const StyledTextButton = withStyles((theme) => ({
  root: {
    padding: "16px 38px",
  },
  label: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: 500,
  },
  disabled: {
    cursor: "not-allowed",
  },
}))(Button);

const StyledIconButton = withStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
  label: {
    color: theme.palette.common.white,
  },
}))(IconButton);

const StyledIconWithTextButton = withStyles((theme) => ({
  root: {
    padding: "16px 38px",
  },
  label: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: 500,
  },
  disabled: {
    cursor: "not-allowed",
  },
}))(Button);

const DevelopForm = () => {
  return (
    <div style={{ padding: "20px" }}>
      <FormControl>
        {/* <BootstrapInput disableUnderline id="boostrap-input" placeholder="Name" /> */}
        <FormHelperTextStyled error id="my-helper-text">
          Minimum 8 numbers
        </FormHelperTextStyled>
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl>
        {/* <BootstrapInput disableUnderline id="boostrap-input" placeholder="Name" /> */}
      </FormControl>
      <br />
      <br />
      <br />
      <FormControl>
        <BootstrapInput
          disableUnderline
          type="email"
          // id="boostrap-input"
          placeholder="Email Field"
        />
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl>
        <BootstrapInput
          disableUnderline
          type="tel"
          // id="boostrap-input"
          placeholder="Telephone Field"
        />
      </FormControl>
      <br />
      <br />
      <br />
      <FormControl>
        <BootstrapInput
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          }
          type="search"
          // id="boostrap-input"
          placeholder="Search Field"
        />
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl>
        <BootstrapInput
          multiline
          rows={5}
          disableUnderline
          type="search"
          // id="boostrap-input"
          placeholder="Search Field"
        />
        ̣̣
      </FormControl>
      <br />
      <br />
      <ButtonComponent
        onClick={() => {
          console.log("object");
        }}
      >
        Try it for free
      </ButtonComponent>
      <br />
      <br />
      <br />
      <ButtonComponent
        onClick={() => {
          console.log("object");
        }}
      >
        Try it for free
      </ButtonComponent>
      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "rgb(49, 98, 189)" }}>
        <ButtonComponent variant="outlined" color="secondary" onClick={() => console.log("object")}>
          Try it for free
        </ButtonComponent>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <StyledButton variant="contained" color="primary">
        Try it for free
      </StyledButton>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "#3162BD",
        }}
      >
        <StyledOutlinedButton color="secondary" variant="outlined">
          Try it for free
        </StyledOutlinedButton>
      </div>
      <br />
      <br />
      <StyledRoundedButton variant="contained" color="primary">
        Try it for free
      </StyledRoundedButton>
      <br />
      <br />
      <StyledTextButton color="primary">Try it for free</StyledTextButton>
      <br />
      <br />
      <br />
      <br />
      <br />
      <IconButton aria-label="search" color="primary">
        <SearchOutlined fontSize="inherit" />
      </IconButton>
      <br />
      <br />
      <StyledIconButton aria-label="search" color="primary">
        <SearchOutlined fontSize="inherit" />
      </StyledIconButton>
      <br />
      <br />
      <StyledIconWithTextButton color="primary" variant="contained" startIcon={<SearchOutlined />}>
        Search
      </StyledIconWithTextButton>
    </div>
  );
};

export default DevelopForm;

/* 
    Plan
    Form Component Implementation ideas
        - Textfield - DONE
            variants
                - search field - Done
                - email - Done
                - phone number - Done
        - Textarea - Done
        - buttons page - Pending
        - form component - Pending

        / Not required ATM
            - Select Menu 
            - Checkbox          

*/
