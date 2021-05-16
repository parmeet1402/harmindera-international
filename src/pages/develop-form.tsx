import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormHelperText from "@material-ui/core/FormHelperText";
import { fade, withStyles } from "@material-ui/core/styles";
import { SearchOutlined } from "@material-ui/icons";

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
const DevelopForm = () => {
  return (
    <div style={{ padding: "20px" }}>
      <FormControl>
        <BootstrapInput disableUnderline id="boostrap-input" placeholder="Name" />
        <FormHelperTextStyled error id="my-helper-text">
          Minimum 8 numbers
        </FormHelperTextStyled>
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl>
        <BootstrapInput disableUnderline id="boostrap-input" placeholder="Name" />
      </FormControl>
      <br />
      <br />
      <br />
      <FormControl>
        <BootstrapInput
          disableUnderline
          type="email"
          id="boostrap-input"
          placeholder="Email Field"
        />
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl>
        <BootstrapInput
          disableUnderline
          type="tel"
          id="boostrap-input"
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
          id="boostrap-input"
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
          id="boostrap-input"
          placeholder="Search Field"
        />
      </FormControl>
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
