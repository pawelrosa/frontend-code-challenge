import React from 'react';
import Badge from '../Badge';

export default (Component) => (props) => {
  const { email, id, name, onDelete, teams } = props;
  const attributes = [
    {
      value: <a href={`mailto:${email}`}>{email}</a>,
    },
  ];
  const body = teams ?
    <div>
      {teams.map(({ id, name }) => (
        <Badge key={id}>
          {name}
        </Badge>
      ))}
    </div> :
    null;

  return (
    <Component
      attributes={attributes}
      body={body}
      id={id}
      name={name}
      onDelete={onDelete}
    />
  )
}
