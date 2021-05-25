import React from "react";
import {
  Button as MaterialButton,
  ButtonProps,
  IconButton as MaterialIconButton,
  IconButtonProps,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";

export type Color = "primary" | "secondary" | "warning" | "success" | "error";
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

interface IconBaseButtonColor {
  color: Color;
  variant: ColorVariant;
  hover: ColorVariant;
}

type Size = "large" | "medium" | "small";

interface IconBaseButtonProps {
  // iconColor?: IconBaseButtonColor;

  // shape: "circle" | "rounded";
  // colors?: {
  //   icon?: IconBaseButtonColor;
  //   background?: IconBaseButtonColor;
  // };
  // icon?: IconBaseButtonColor;
  // iconSize?: Size;
  // buttonSize?: Size;
  // background?: IconBaseButtonColor;
  // transparent?: boolean;

  iconColor?: Color;
  iconColorVariant?: ColorVariant;
  solidBackground?: boolean;
  backgroundColor?: Color;
  backgroundColorVariant?: ColorVariant;

  // Required
  "aria-label": string;
}

const useIconStyles = makeStyles(theme => ({
  root: {
    color: (props: {
      iconColor: Color;
      iconColorVariant: ColorVariant;
      solidBackground: boolean;
    }) =>
      props.solidBackground
        ? theme.palette.common.white
        : theme.palette[props.iconColor][props.iconColorVariant],

    backgroundColor: (props: {
      backgroundColor: Color;
      backgroundColorVariant: ColorVariant;
      solidBackground: boolean;
    }) =>
      props.solidBackground
        ? theme.palette[props.backgroundColor][props.backgroundColorVariant]
        : "transparent",

    "&:hover": {
      backgroundColor: (props: {
        iconColor: Color;
        iconColorVariant: ColorVariant;
        solidBackground: boolean;
        backgroundColor: Color;
        backgroundColorVariant: ColorVariant;
      }) =>
        props.solidBackground
          ? theme.palette[props.backgroundColor].dark
          : fade(theme.palette[props.backgroundColor][props.backgroundColorVariant] || "", 0.04),
    },
  },
  label: {},
}));

const IconBaseButton: React.FC<IconBaseButtonProps & IconButtonProps> = props => {
  const {
    iconColor = "primary",
    iconColorVariant = "main",
    backgroundColor = "primary",
    backgroundColorVariant = "main",
    solidBackground = false,
    ...restProps
  } = props;
  const { root, label } = useIconStyles({
    iconColor,
    iconColorVariant,
    solidBackground,
    backgroundColor,
    backgroundColorVariant,
    ...restProps,
  });
  return <MaterialIconButton classes={{ root, label }} {...restProps}></MaterialIconButton>;
};

export { SolidButton, OutlinedButton, TextButton, RoundedButton, IconBaseButton };
export default ButtonBase;
