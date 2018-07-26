import { colors } from 'theme/values';

export default {
  jss: {
    forgotPasswordPage: {
      textAlign: 'center',
      minHeight: '300px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: colors.grey[200],
    },
    forgotPasswordMainMob: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& h1': {
        fontSize: '30px',
        marginTop: '30px',
        width: '100%',
        fontWeight: 100,
      },
    },
    formField: {
      '& h2': {
        margin: 0,
        fontSize: '16px',
      },
    },
    stage2: {
      width: '80%',
    },
    loginBtn: {
      '& button': {
        verticalAlign: 'middle',
        lineHeight: '36px',
      },
    },
    loginLink: {
      width: '95vw',
      margin: '20px auto 0',
      overflow: 'hidden',
      '& span:first-child': {
        float: 'left',
      },
      '& span:last-child': {
        float: 'right',
      },
      '& a': {
        color: colors.grey[500],
        fontSize: '14px',
        '&:hover': {
          color: colors.purple[200],
        },
      },
    },
  },
  underlineStyle: {
    borderColor: '#8d8d8d',
  },
  loginBtnStyle: {
    width: '45vw',
    height: '36px',
    lineHeight: '36px',
    fontSize: '16px',
    marginTop: '60px',
  },
  textFieldHint: {
    left: '0',
    right: '0',
    bottom: '12px',
  },
  textFieldError: {
    marginTop: '-24px',
    top: '24px',
    fontSize: '12px',
  },
  textField: {
    width: '95vw',
    height: '48px',
    lineHeight: '24px',
    fontSize: '16px',
  },
  textFieldInput: {
    textAlign: 'center',
  },
};
