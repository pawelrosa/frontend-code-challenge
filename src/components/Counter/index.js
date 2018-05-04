import React from 'react';
import NumericInput from 'react-numeric-input';
import { Container } from './styles';

const Counter = ({ max, min, name, onChange, value }) => (
  <Container>
    <NumericInput
      onChange={onChange}
      max={max}
      min={min}
      name={name}
      value={value}
    />
  </Container>
);

Counter.defaultProps = {
  value: '',
};

export default Counter;
