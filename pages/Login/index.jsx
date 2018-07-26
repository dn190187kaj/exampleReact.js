import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { TICKETS_BASE } from 'consts/routes';
import { IS_MOBILE } from 'consts/browser';
import { loginUser } from 'schemes/user/actions';
import {
  getUserAuthStatus,
  getEmailError,
  getPasswordError,
  isFetching as getUserFetchingStatus,
} from 'schemes/user/selectors';
import { isCompanyFetching as getCompanyFetchingStatus } from 'schemes/company/selectors';
import { getFetchingStatus as getSorucesFetchingStatus } from 'schemes/sources/selectors';
import Desktop from './index.desktop';
import Mobile from './index.mobile';


@connect(
  state => ({
    isAuthenticated: getUserAuthStatus(state),
    isFetching: getUserFetchingStatus(state) ||
                getCompanyFetchingStatus(state) ||
                getSorucesFetchingStatus(state),
    emailError: getEmailError(state),
    passwordError: getPasswordError(state),
  }),
  dispatch => ({
    loginHandler: (email, password) => dispatch(loginUser(email, password)),
    redirect: () => dispatch(push(TICKETS_BASE)),
  }),
)
export default class LoginContainer extends PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isFetching: PropTypes.bool,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    loginHandler: PropTypes.func,
    redirect: PropTypes.func,
  };

  static defaultProps = {
    isAuthenticated: false,
    isFetching: false,
    emailError: '',
    passwordError: '',
    loginHandler: () => {},
    redirect: () => {},
  };

  componentWillMount() {
    const { isAuthenticated, redirect } = this.props;

    if (isAuthenticated) {
      redirect();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
      nextProps.redirect();
    }
  }

  render() {
    const {
      isAuthenticated, isFetching, emailError, passwordError, loginHandler,
    } = this.props;
    const Login = IS_MOBILE ? Mobile : Desktop;

    return (
      <Login
        isAuthenticated={isAuthenticated}
        isFetching={isFetching}
        passwordError={passwordError}
        emailError={emailError}
        loginHandler={loginHandler}
      />
    );
  }
}
