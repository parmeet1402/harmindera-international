import React from "react";
import Button, { SolidButton, OutlinedButton, TextButton, RoundedButton } from "@components/Button";
import { Button as MaterialButton, ButtonProps } from "@material-ui/core";

const DevelopForm = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Solid Base Button</h1>
      <h3>Size</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <SolidButton size="large">Try it for free</SolidButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SolidButton>Try it for free</SolidButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SolidButton size="small">Try it for free</SolidButton>
          <br />
          <br />
          <br />
          <SolidButton bgColor="primary">Primary</SolidButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <SolidButton bgColor="warning">Warning</SolidButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <SolidButton bgColor="error">Danger</SolidButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <SolidButton bgColor="success">Success</SolidButton>
          <br />
          <br />
          <br />
          <SolidButton rounded>Rounded</SolidButton>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>Outlined Base Button</h1>
      <div
        style={{
          background: "blue",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <OutlinedButton size="large">Try it for free</OutlinedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <OutlinedButton>Try it for free</OutlinedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <OutlinedButton size="small">Try it for free</OutlinedButton>
          <br />
          <br />
          <br />
          <OutlinedButton bgColor="primary">Primary</OutlinedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <OutlinedButton bgColor="warning">Warning</OutlinedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <OutlinedButton bgColor="error">Danger</OutlinedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <OutlinedButton bgColor="success">Success</OutlinedButton>
          <br />
          <br />
          <br />
          <OutlinedButton rounded>Rounded</OutlinedButton>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>Rounded Base Button</h1>
      <div style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
        <div>
          <RoundedButton size="large">Try it for free</RoundedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <RoundedButton>Try it for free</RoundedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <RoundedButton size="small">Try it for free</RoundedButton>
          <br />
          <br />
          <br />
          <RoundedButton bgColor="primary">Primary</RoundedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <RoundedButton bgColor="warning">Warning</RoundedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <RoundedButton bgColor="error">Danger</RoundedButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <RoundedButton bgColor="success">Success</RoundedButton>
          <br />
          <br />
          <br />
          <RoundedButton rounded>Rounded</RoundedButton>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>Text Button</h1>
      <div style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
        <div>
          <TextButton size="large">Try it for free</TextButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextButton>Try it for free</TextButton>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextButton size="small">Try it for free</TextButton>
          <br />
          <br />
          <br />
          <TextButton bgColor="primary">Primary</TextButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TextButton bgColor="warning">Warning</TextButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TextButton bgColor="error">Danger</TextButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <TextButton bgColor="success">Success</TextButton>
          <br />
          <br />
          <br />
          <TextButton rounded>Rounded</TextButton>
        </div>
      </div>
    </div>
  );
};

export default DevelopForm;
