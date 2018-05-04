import React from 'react';
import { Container, Message } from './styles';

export default ({ message }) => (
  <Container>
    <Message>
      {message}
    </Message>
  </Container>
)
