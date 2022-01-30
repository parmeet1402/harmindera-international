import React from "react";
import {
  FormControl,
  FormControlProps,
  Input,
  //   InputAdornment,
  FormHelperText,
  InputProps,
  FormHelperTextProps,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  helperText?: string | React.ReactNode | React.ReactChildren;
  id: string;
  helperTextProps?: FormHelperTextProps;
  formControlProps?: FormControlProps;
  register: (str: string, schema: any) => void;
  validationSchema?: any;
  errors?: {
    message: string;
    type: string;
  };
  formName?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    transition: theme.transitions.create(["background-color", "border"]),
  },
}));

const TextField: React.FC<Props & InputProps> = props => {
  const {
    formControlProps,
    helperTextProps,
    register,
    name,
    formName,
    validationSchema,
    errors,
    ...restProps
  } = props;
  const { root } = useStyles(props);
  const FIELD_NAME = `${formName}.${name}`;
  const errorMessage = errors?.message;
  const errorType = errors?.type;

  return (
    <FormControl error={restProps.error} {...formControlProps}>
      <Input
        disableUnderline
        {...restProps}
        classes={{
          root,
        }}
        {...register(FIELD_NAME, validationSchema)}
      />
      {props.helperText && (
        <FormHelperText error={restProps.error} {...helperTextProps}>
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextField;

/*

TODO: Form Component
 - disable submit
 - HOC Pattern
 - Leverage react hooks form


TODO: Text Input
 - label
 - placeholder
 - name
 - error
 - message
 - message color as per state
 
TODO: Text Area


Can be done late
= Checkbox
= Select Menu
*/
