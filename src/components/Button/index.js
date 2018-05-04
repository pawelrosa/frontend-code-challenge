import React from "react";
import { Container } from "./styles";
import { noop } from "lodash";

const Button = ({ children, className, disabled, onClick, type, version }) => (
  <Container
    className={className}
    disabled={disabled}
    onClick={disabled ? noop : onClick}
    type={type}
    version={version}
  >
    {children}
  </Container>
);

Button.defaultProps = {
  className: null,
  disabled: false,
  onClick: noop,
  type: 'button',
  version: 'purple',
};

export default Button;
