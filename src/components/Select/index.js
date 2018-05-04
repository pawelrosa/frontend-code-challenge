import React from 'react';
import { Container, Control } from './styles';
import { noop } from 'lodash';

const Select = ({ className, onChange, options, multi, name, value }) => (
  <Container
    className={className}
  >
    <Control
      name={name}
      multi={multi}
      value={value}
      onChange={onChange}
      options={options}
    />
  </Container>
);

Select.defaultProps = {
  className: null,
  onChange: noop,
  options: [],
  multi: false,
};

export default Select;


