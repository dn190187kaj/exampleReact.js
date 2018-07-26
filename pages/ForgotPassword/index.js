import React from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from 'schemes/user/actions';
import { getEmailError } from 'schemes/user/selectors';
import { IS_MOBILE } from 'consts/browser';
import Desktop from './index.desktop';
import Mobile from './index.mobile';

export const ForgotPasswordContainer = (props) => {
  const ForgotPassword = IS_MOBILE ? Mobile : Desktop;
  return (
    <ForgotPassword {...props} />
  );
};

export default connect(
  state => ({
    emailError: getEmailError(state),
  }),
  dispatch => ({
    forgotPassword: email => dispatch(forgotPassword(email)),
  }),
)(ForgotPasswordContainer);
