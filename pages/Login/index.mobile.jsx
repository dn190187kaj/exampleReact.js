import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { SIGN_UP, FORGOT_PASSWORD } from 'consts/routes';
import { mobile as styles } from './styles';


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
        <div className={classNames(classes.progress, { [classes.hideProgress]: !isFetching })}>
          <CircularProgress {...styles.progress} />
        </div>
        <form className={classNames({ [classes.hideForm]: hideForm })}>
          <h1 className={classes.title}>Login</h1>
          <TextField
            hintText="Email"
            hintStyle={styles.fieldHint}
            onChange={this.changeEmail}
            errorText={emailError}
            errorStyle={styles.fieldError}
            style={styles.field}
            inputStyle={styles.fieldInput}
            underlineStyle={styles.fieldUnderline}
          />
          <TextField
            hintText="Password"
            hintStyle={styles.fieldHint}
            type="password"
            onChange={this.changePassword}
            errorText={passwordError}
            errorStyle={styles.fieldError}
            style={styles.field}
            inputStyle={styles.fieldInput}
            underlineStyle={styles.fieldUnderline}
          />
          <RaisedButton
            label="LOG IN"
            primary
            style={styles.loginBtn}
            labelStyle={styles.loginBtnLabel}
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
    );
  }
}
