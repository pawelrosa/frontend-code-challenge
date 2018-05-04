import React, { PureComponent } from 'react';
import Icon from '../../components/Icon';
import { DeleteButtonContainer } from './styles';

export default class extends PureComponent {
  _handleDelete = () => {
    const { id, onDelete } = this.props;

    onDelete(id);
  };
  render() {
    return (
      <DeleteButtonContainer
        onClick={this._handleDelete}
        type="button"
      >
        <Icon
          name="trash"
          size={14}
        />
      </DeleteButtonContainer>
    )
  }
};
