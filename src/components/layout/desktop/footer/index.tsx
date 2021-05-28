import React from "react";

interface Props {
  name?: string;
}

const Footer = (props: Props) => {
  console.log(props);
  return <div>Footer Component</div>;
};

export default Footer;
