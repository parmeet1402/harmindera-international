import React from "react";
import { IconButton as MaterialIconButton, IconButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export type Color = "primary" | "warning" | "success" | "error";
export type ColorVariant = "lighter" | "light" | "main" | "dark" | "contrastText";

interface IconBaseButtonProps {
  bgColor?: Color;
  bgColorVariant?: ColorVariant;
  rounded?: boolean;
}

const IconBaseButton = (props: IconBaseButtonProps) => {
  return (
    <MaterialIconButton>
      <span>dsaf</span>
    </MaterialIconButton>
  );
};



export default IconBaseButton;
