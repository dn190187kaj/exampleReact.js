import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { LOG_IN, SIGN_UP } from 'consts/routes';

import styles from './styles/mobile';

@injectSheet(styles.jss)
export default class ForgotPassword extends PureComponent {
  static propTypes = {
    emailError: PropTypes.string,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    forgotPassword: PropTypes.func,
  };

  static defaultProps = {
    emailError: '',
    forgotPassword: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      stage: 1,
    };
  }

  submitEmail(event) {
    event.preventDefault();
    return this.props.forgotPassword(this.state.email)
      .then((status) => {
        if (status) {
          this.setState({ stage: 2 });
        } else {
          this.setState({ stage: 1 });
        }
      });
  }

  render() {
    const { classes } = this.props;
    const { email, stage } = this.state;
    return (
      <div className={classes.forgotPasswordPage}>
        <div className={classes.forgotPasswordMainMob}>
          <h1>Forgot Password</h1>
          {stage === 1 && (
            <div>
              <form className={classes.formField}>
                <TextField
                  id="login-input"
                  hintText="Your Email"
                  hintStyle={styles.textFieldHint}
                  onChange={e => this.setState({ email: e.target.value })}
                  errorText={this.props.emailError}
                  errorStyle={styles.textFieldError}
                  style={styles.textField}
                  inputStyle={styles.textFieldInput}
                  underlineStyle={styles.underlineStyle}
                /><br />
                <RaisedButton
                  className={classes.loginBtn}
                  label="Enter"
                  primary
                  type="submit"
                  onClick={e => this.submitEmail(e)}
                  style={styles.loginBtnStyle}
                />
                <div className={classes.loginLink}>
                  <span>
                    <Link to={LOG_IN}>
                      Login
                    </Link>
                  </span>
                  <span>
                    <Link to={SIGN_UP}>
                      Register
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          )}
          {stage === 2 && (
            <div className={classNames(classes.stage2, classes.formField)}>
              <h2>
                We&apos;ve just sent you an email with instructions
                to the address - {email}, please check your email.
              </h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}
