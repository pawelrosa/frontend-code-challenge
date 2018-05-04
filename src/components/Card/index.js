import React from 'react';
import Attributes from './Attributes';
import DeleteButton from './DeleteButton';
import { Actions, Body, Container, Header, Name, Row } from './styles';
import withPerson from './withPerson';
import withTeam from './withTeam';

const Card = ({ attributes, body, id, name, onDelete }) => (
  <Container>
    <Header>
      <Row>
        <Name>{name}</Name>
        <Actions>
          <DeleteButton
            id={id}
            onDelete={onDelete}
          />
        </Actions>
      </Row>
      <Attributes collection={attributes} />
    </Header>
    {body && <Body>{body}</Body>}
  </Container>
);

const TeamCard = withTeam(Card);
const PersonCard = withPerson(Card);

export default Card;
export { PersonCard, TeamCard };
