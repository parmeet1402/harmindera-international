import React from "react";
import Button from "@components/form/Button";

const LandingPage = () => {
  return (
    <div>
      <Button isRounded onClick={() => console.log("asdf")}>
        Try it for free
      </Button>
      <h2>Landing Page</h2>
    </div>
  );
};

export default LandingPage;
