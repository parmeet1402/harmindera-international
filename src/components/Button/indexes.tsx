import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from "@material-ui/styles";

type ButtonProps = {
  size?: "large" | "medium" | "small";
  isRounded?: boolean;
  color?: "primary" | "secondary";
  colorVariant?: "lighter" | "light" | "main" | "dark";
  children?: React.ReactChildren | React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  onClick: Function;
};

// roundedStyles: {
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "24px",
    background: theme.palette.primary.lighter,
    boxShadow: theme.shadows[1],
  },
}));

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = "large",
    isRounded = false,
    // shape = "rectangle",
    color = "primary",
    colorVariant = "main",
    children = <></>,
    variant = "contained",
    disabled = false,
    onClick = () => console.log("sadfads"),
    ...restProps
  } = props;
  const classes = useStyles(props);
  // console.log({ size, isRounded, color, colorVariant, children, variant, disabled, onClick });
  return (
    <MaterialButton
      className={props.isRounded ? classes.root : ""}
      // classes={{ root: classes.rounded }}
      color={color}
      variant={variant}
      {...restProps}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;





// Base Button component
/* 
  children: React.ReactChildren | React.ReactNode;
  size: "large"|"medium" | "small"
  color: "primary" | "secondary" | "white" | "black" | "transparent" | ;
  colorVariant?: "lighter" | "light" | "main" | "dark";
  bgColor: "primary" | "secondary" | "white" | "black" | "transparent" | ;
  bgColorVariant?: "lighter" | "light" | "main" | "dark";
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  onClick: Function;

*/ 

// Vairants can be used to make different components being returned 
