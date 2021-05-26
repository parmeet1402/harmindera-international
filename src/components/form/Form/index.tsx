import React from "react";

interface Props {
  children: React.ReactNode | React.ReactChildren;
  handleSubmit: (e: React.SyntheticEvent) => void;
  noValidate?: boolean;
}

const Form = (props: Props) => {
  const { children, handleSubmit, noValidate = true, ...restProps } = props;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.handleSubmit(e);
  };

  return (
    <form onSubmit={onSubmit} noValidate={noValidate} {...restProps}>
      {props.children}
    </form>
  );
};

export default Form;
