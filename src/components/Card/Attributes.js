import React from 'react';
import { AttributesContainer, Attribute } from './styles';

export default ({ collection }) => {
  if (!collection) { return null; }

  return (
    <AttributesContainer>
      {collection.map((item, index) => (
        <Attribute key={index}>
          {item.label} {item.value}
        </Attribute>
      ))}
    </AttributesContainer>
  );
}
