import { noop } from "lodash";
import React from "react";
import Counter from "../Counter";
import Field from "../Field";
import Select from "../Select";
import { Container, Error, Label } from "./styles";

const Input =
  ({ error, label, max, min, multi, name, onChange, options, placeholder, type, value }) => {
    const commonProps = {
      name,
      value,
    };
    let Control;
    let controlProps;

    switch (type) {
      case 'number':
        Control = Counter;
        controlProps = {
          ...commonProps,
          onChange,
          min,
          max,
        };
        break;
      case 'select':
        Control = Select;
        controlProps = {
          ...commonProps,
          multi,
          onChange,
          options,
        };
        break;
      default:
        Control = Field;
        controlProps = {
          ...commonProps,
          onChange,
          placeholder,
          type,
        };
    }
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <Control {...controlProps} />
        {error && <Error>{error}</Error>}
      </Container>
    );
  };

Input.defaultProps = {
  label: null,
  max: 100,
  min: 0,
  multi: false,
  onChange: noop,
  options: [],
  placeholder: '',
  type: 'text',
  value: '',
};

export default Input;
