import { noop } from "lodash";
import React from "react";
import { Container, Control } from "./styles";

const Field = ({ autoComplete, className, name, onChange, placeholder, type, value }) => (
  <Container className={className}>
    <Control
      autoComplete={autoComplete}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </Container>
);

Field.defaultProps = {
  autoComplete: 'off',
  className: null,
  onChange: noop,
  placeholder: '',
  type: 'text',
  value: '',
};

export default Field;

