import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from './index.mobile';

describe('<ForgotPassword /> mobile version', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      emailError: '',
      forgotPassword: () => Promise.resolve('ok'),
    };
    wrapper = shallow(<ForgotPassword {...props} />);
  });

  it('should render self and subcomponents', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show errors from props', () => {
    wrapper.setProps({
      emailError: 'email error!',
    });
    expect(wrapper.find('#login-input').props().errorText).toEqual('email error!');
  });
});
