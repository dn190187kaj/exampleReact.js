import { colors } from 'theme/values';

export default {
  jss: {
    forgotPasswordMain: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: '12vh',
      '& h1': {
        margin: '30px 0 0',
        fontSize: '48px',
        fontWeight: 100,
      },
    },
    formField: {
      textAlign: 'center',
    },
    loginBtn: {
      marginTop: '37px',
      width: '107px',
    },
    loginLink: {
      width: '400px',
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
        cursor: 'pointer',
        '&:hover': {
          color: colors.purple[200],
        },
      },
    },
  },
  underlineStyle: {
    borderColor: colors.grey[500],
  },
  textField: {
    width: '400px',
  },
};
