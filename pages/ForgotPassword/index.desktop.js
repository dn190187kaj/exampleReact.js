import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';
import injectSheet from 'react-jss';

import { LOG_IN, SIGN_UP } from 'consts/routes';

import styles from './styles/desktop';

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

  submitEmail = (event) => {
    event.preventDefault();
    this.props.forgotPassword(this.state.email).then((status) => {
      if (status) {
        this.setState({ stage: 2 });
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { email, stage } = this.state;
    return (
      <div>
        <div className={classes.forgotPasswordMain}>
          <h1>Forgot Password</h1>
          {stage === 1 && (
            <div>
              <form className={classes.formField}>
                <TextField
                  id="login-input"
                  floatingLabelText="Your Email"
                  onChange={e => this.setState({ email: e.target.value })}
                  errorText={this.props.emailError}
                  style={styles.textField}
                  underlineStyle={styles.underlineStyle}
                /><br />
                <RaisedButton
                  className={classes.loginBtn}
                  label="Enter"
                  primary
                  type="submit"
                  onClick={this.submitEmail}
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
            <div className={classes.formField}>
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
