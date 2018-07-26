import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { SIGN_UP, FORGOT_PASSWORD } from 'consts/routes';
import { desktop as styles } from './styles';


@injectSheet(styles.jss)
export default class Login extends PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isFetching: PropTypes.bool,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    loginHandler: PropTypes.func,
  };

  static defaultProps = {
    isAuthenticated: false,
    isFetching: false,
    emailError: '',
    passwordError: '',
    loginHandler: () => {},
  };

  state = {
    email: '',
    password: '',
  };

  changeEmail = e => this.setState({ email: e.target.value });
  changePassword = e => this.setState({ password: e.target.value });

  submitData = (event) => {
    event.preventDefault();
    this.props.loginHandler(this.state.email, this.state.password);
  };

  render() {
    const {
      classes, isFetching, isAuthenticated, emailError, passwordError,
    } = this.props;
    const hideForm = isFetching || isAuthenticated;

    return (
      <div className={classes.loginPage}>
        <div className={classes.loginMain}>
          <div className={classNames(classes.progress, { [classes.hideProgress]: !isFetching })}>
            <CircularProgress {...styles.progress} />
          </div>
          <form className={classNames({ [classes.hideForm]: hideForm })}>
            <h1 className={classes.title}>Log In</h1>
            <TextField
              floatingLabelText="Your Email"
              onChange={this.changeEmail}
              errorText={emailError}
              value={this.state.email}
              style={styles.field}
              underlineStyle={styles.underline}
            />
            <TextField
              floatingLabelText="Your Password"
              type="password"
              onChange={this.changePassword}
              errorText={passwordError}
              value={this.state.password}
              style={styles.field}
              underlineStyle={styles.underline}
            />
            <RaisedButton
              className={classes.loginBtn}
              label="LOG IN"
              primary
              type="submit"
              onClick={this.submitData}
            />
            <div className={classes.loginLink}>
              <span className={classes.linkBlock}>
                <Link to={FORGOT_PASSWORD} className={classes.link}>
                  Forgot password?
                </Link>
              </span>
              <span className={classes.linkBlock}>
                <Link to={SIGN_UP} className={classes.link}>
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
