import React from "react";
import { Button as MaterialButton, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export type Color = "primary" | "warning" | "success" | "error";
export type ColorVariant = "lighter" | "light" | "main" | "dark" | "contrastText";

interface BaseButtonProps {
  bgColor?: Color;
  bgColorVariant?: ColorVariant;
  rounded?: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: (props: { rounded: boolean }) => (props.rounded ? "28px" : "10px"),
  },
  solid: {
    backgroundColor: (props: { bgColor: Color; bgColorVariant: ColorVariant; rounded: boolean }) =>
      theme.palette[props.bgColor][props.bgColorVariant],
    color: (props: { bgColor: Color; bgColorVariant: ColorVariant }) =>
      props.bgColorVariant === "lighter"
        ? theme.palette[props.bgColor].main
        : theme.palette[props.bgColor].contrastText,

    "&:hover": {
      backgroundColor: (props: { bgColor: Color }) => theme.palette[props.bgColor].dark,
      color: (props: { bgColor: Color }) => theme.palette[props.bgColor].contrastText,
    },
  },
  outlined: {
    borderColor: "white",
    color: "white",
    "&:hover": {
      background: "white",
      color: (props: { bgColor: Color }) => theme.palette[props.bgColor].main,
    },
  },
  text: {
    color: (props: { bgColor: Color; bgColorVariant: ColorVariant }) =>
      theme.palette[props.bgColor][props.bgColorVariant],
  },
}));

const ButtonBase: React.FC<BaseButtonProps & ButtonProps> = props => {
  const {
    children,
    bgColor = "primary",
    bgColorVariant = "main",
    rounded = false,
    color,
    ...restProps
  } = props;
  const { root, solid, outlined, text } = useStyles({
    bgColor,
    bgColorVariant,
    rounded,
    ...restProps,
  });

  return (
    <MaterialButton classes={{ root, contained: solid, outlined, text }} {...restProps}>
      {children}
    </MaterialButton>
  );
};

const SolidButton: React.FC<BaseButtonProps & ButtonProps> = props => {
  const { children, variant, color, ...restProps } = props;
  return (
    <ButtonBase variant="contained" {...restProps}>
      {children}
    </ButtonBase>
  );
};

const OutlinedButton: React.FC<BaseButtonProps & ButtonProps> = props => {
  const { children, variant, color, ...restProps } = props;
  return (
    <ButtonBase variant="outlined" {...restProps}>
      {children}
    </ButtonBase>
  );
};

const TextButton: React.FC<BaseButtonProps & ButtonProps> = props => {
  const { children, variant, color, ...restProps } = props;
  return (
    <ButtonBase variant="text" {...restProps}>
      {children}
    </ButtonBase>
  );
};

const RoundedButton: React.FC<BaseButtonProps & ButtonProps> = props => {
  const {
    children,
    variant,
    rounded,
    color,
    bgColorVariant,
    bgColor = "primary",
    ...restProps
  } = props;
  return (
    <ButtonBase
      rounded
      variant="contained"
      bgColor={bgColor}
      bgColorVariant={bgColorVariant ? bgColorVariant : bgColor === "primary" ? "lighter" : "main"}
      {...restProps}
    >
      {children}
    </ButtonBase>
  );
};

export { SolidButton, OutlinedButton, TextButton, RoundedButton };
export default ButtonBase;
