import React, { PureComponent } from 'react';
import { ButtonContainer } from './styles';

export default class extends PureComponent {
  _handleClick = () => {
    const { activeTab, index } = this.props;

    activeTab(index);
  };

  render() {
    const { children, isActive, version } = this.props;

    return (
      <ButtonContainer
        isActive={isActive}
        onClick={this._handleClick}
        type="button"
        version={version}
      >
        {children}
      </ButtonContainer>
    )
  }
};
