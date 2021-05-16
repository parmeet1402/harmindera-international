import React from "react";
import TextField from "@material-ui/core/TextField";

const DevelopForm = () => {
  return (
    <div style={{ padding: "20px" }}>
      <TextField id="text-field-for-testing" label="Name" variant="filled" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField id="text-field-for-testing" label="Email Address" type="email" variant="filled" />
      <br />
      <br />
      <br />
      <TextField id="text-field-for-testing" label="Phone Number" type="phone" variant="filled" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField id="text-field-for-testing" label="Country" variant="filled" />
      <br />
      <br />
      <br />
      <TextField id="text-field-for-testing" label="Message" variant="filled" />
      <h2>Heya the form is superb way to get thigs done</h2>
    </div>
  );
};

export default DevelopForm;


