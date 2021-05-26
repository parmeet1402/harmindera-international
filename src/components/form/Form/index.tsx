import React from "react";
/* eslint-disable */
interface Props {
  children: React.ReactNode | React.ReactChildren;
  handleSubmit: (e: React.SyntheticEvent) => void;
  noValidate?: boolean;
}
/* eslint-enable */

const Form = (props: Props) => {
  const { children, handleSubmit, noValidate = true, ...restProps } = props;

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form onSubmit={onSubmit} noValidate={noValidate} {...restProps}>
      {children}
    </form>
  );
};

export default Form;
