import React from "react";
import { mount } from "enzyme";
import { spy } from "sinon";
import Button from "../../../components/Button";
import { Container } from "../../../components/Button/styles";

const props = {
  type: 'submit',
  version: 'orange',
};
let callback;
let wrapper = mount(<Button {...props}>Send</Button>);

describe('<Button />', () => {
  it('renders the <Container /> component', () => {
    expect(wrapper.find(Container).exists()).toBeTruthy();
  });

  it('renders a label', () => {
    expect(wrapper.find(Container).text()).toEqual('Send');
  });

  it('has set `type` prop', () => {
    expect(wrapper.props().type).toEqual('submit');
  });

  it('has set `version` prop', () => {
    expect(wrapper.props().version).toEqual('orange');
  });

  describe('when it is disabled', () => {
    beforeEach(() => {
      callback = spy();
      wrapper.setProps({ disabled: true, onClick: callback });
    });

    it('has set `disabled` prop to `true`', () => {
      expect(wrapper.props().disabled).toEqual(true);
    });

    it('does not trigger click', () => {
      wrapper.find(Container).simulate('click');
      expect(callback.calledOnce).toBeFalsy();
    });
  });

  describe('when it is enabled', () => {
    beforeEach(() => {
      callback = spy();
      wrapper.setProps({ disabled: false, onClick: callback });
    });

    it('has set `disabled` prop to `false`', () => {
      expect(wrapper.props().disabled).toEqual(false);
    });

    it('triggers click', () => {
      wrapper.find(Container).simulate('click');
      expect(callback.calledOnce).toBeTruthy();
    });
  });
});


