import React from 'react';
import { isEmpty } from 'lodash';

export default (Component) => (props) => {
  const { id, members, membersLimit, name, onDelete } = props;
  const attributes = [
    {
      label: 'Limit:',
      value: `${membersLimit} member${membersLimit > 1 ? 's' : ''}`,
    },
  ];
  const body = !isEmpty(members) ?
    <div>
      <h4>Members</h4>
      <ul>
        {members.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
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
