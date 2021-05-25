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

type AllColors =
  | "common"
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "grey"
  | "text"
  | "background"
  | "action";

type AllVariants =
  | "lighter"
  | "light"
  | "main"
  | "dark"
  | "contrastText"
  | "primary"
  | "secondary"
  | "disabled"
  | "hint"
  | "black"
  | "white"
  | "paper"
  | "default"
  | "level2"
  | "level1"
  | "active"
  | "hover"
  | "selected"
  | "disabled"
  | "disabledBackground"
  | "focus";

interface IconColorVariants {
  color?: AllColors;
  colorVariant?: AllVariants;
  hover?: AllColors;
  hoverVariant?: AllVariants;
}

interface IconBaseButtonProps {
  variant?: "transparent" | "filled";
  disableElevation?: boolean;

  colorOverrides?: {
    icon?: IconColorVariants;
    background?: IconColorVariants;
  };

  // Required
  // "aria-label": string;
}

const useIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: (props: IconBaseButtonProps & IconButtonProps) =>
      props.variant === "filled"
        ? theme.palette[props.colorOverrides?.background?.color || "primary"][
            props.colorOverrides?.background?.colorVariant || "main"
          ]
        : "transparent",
    color: (props: IconBaseButtonProps & IconButtonProps) =>
      theme.palette[props.colorOverrides?.icon?.color || "primary"][
        props.colorOverrides?.icon?.colorVariant || "main"
      ],
    "&:hover": {
      backgroundColor: (props: IconBaseButtonProps & IconButtonProps) =>
        props.variant === "filled"
          ? theme.palette[props.colorOverrides?.background?.color || "primary"][
              props.colorOverrides?.background?.colorVariant || "main"
            ]
          : "transparent",
      color: (props: IconBaseButtonProps & IconButtonProps) =>
        theme.palette[props.colorOverrides?.icon?.hover || "primary"][
          props.colorOverrides?.icon?.hoverVariant || "main"
        ],
    },
  },
}));

const IconBaseButton: React.FC<IconBaseButtonProps & IconButtonProps> = props => {
  const {
    children,
    disableElevation = false,
    variant = "transparent",
    colorOverrides = {
      icon: {
        color: "primary",
        colorVariant: "main",
        hover: "primary",
        hoverVariant: "main",
      },

      background: {
        color: "primary",
        colorVariant: "main",
        hover: "primary",
        hoverVariant: "main",
      },
    },
    ...restProps
  } = props;
  const { root } = useIconStyles({
    disableElevation,
    variant,
    colorOverrides,
    ...restProps,
  });
  return (
    <MaterialIconButton classes={{ root }} {...restProps}>
      {children}
    </MaterialIconButton>
  );
};

export { SolidButton, OutlinedButton, TextButton, RoundedButton, IconBaseButton };
export default ButtonBase;
