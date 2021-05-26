import React from "react";
import TextField from "@components/form/TextField";
import { InputAdornment } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const DevelopForm = () => {
  return (
    <form
      onSubmit={e => {
        console.log(e);
      }}
    >
      <TextField placeholder="Hey" id="name-input" />
      <TextField
        placeholder="Search"
        error
        // autoFocus
        helperText={"Hey buddy, I am doing good and what about you??"}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        id="name-input"
      />
      <TextField placeholder="Hey" id="name-input" multiline rows={5} />
    </form>
  );
};

export default DevelopForm;
