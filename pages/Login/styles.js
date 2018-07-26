import { colors } from 'theme/values';
import { THEME_COLORS } from 'theme/colors';


export const desktop = {
  underline: {
    borderColor: '#8d8d8d',
  },
  field: {
    display: 'block',
    margin: 'auto',
    width: 400,
  },
  progress: {
    color: THEME_COLORS.primary,
    size: 100,
    thickness: 5,
    style: {
      display: 'block',
      margin: 'auto',
    },
  },
  jss: {
    loginPage: {
      textAlign: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: colors.grey[200],
    },
    loginMain: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '12vh',
    },
    title: {
      margin: 0,
      fontSize: '48px',
      fontWeight: 400,
    },
    hideForm: {
      display: 'none',
    },
    loginBtn: {
      marginTop: '37px',
      width: '107px',
    },
    loginLink: {
      overflow: 'hidden',
      width: '400px',
      margin: '20px auto 0',
    },
    linkBlock: {
      '&:first-child': {
        float: 'left',
      },
      '&:last-child': {
        float: 'right',
      },
    },
    link: {
      color: '#8d8d8d',
      fontSize: '14px',
      cursor: 'pointer',
      '&:hover': {
        color: '#b15ad6',
      },
    },
    progress: {
      marginTop: 200,
    },
    hideProgress: {
      display: 'none',
    },
  },
};


export const mobile = {
  loginBtn: {
    width: '45vw',
    height: '36px',
    marginTop: '60px',
  },
  loginBtnLabel: {
    lineHeight: '36px',
    fontSize: '16px',
  },
  field: {
    display: 'block',
    margin: 'auto',
    width: '95vw',
    height: '48px',
    lineHeight: '24px',
    fontSize: '16px',
  },
  fieldHint: {
    left: 0,
    right: 0,
    bottom: '12px',
  },
  fieldError: {
    marginTop: '-24px',
    top: '24px',
    fontSize: '12px',
  },
  fieldInput: {
    textAlign: 'center',
  },
  fieldUnderline: {
    borderColor: '#8d8d8d',
  },
  progress: {
    color: THEME_COLORS.primary,
    size: 100,
    thickness: 5,
    style: {
      display: 'block',
      margin: 'auto',
    },
  },
  jss: {
    loginPage: {
      textAlign: 'center',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
      backgroundColor: colors.grey[200],
    },
    title: {
      fontSize: '5vh', // 5vh
      marginTop: '5vh',
      fontWeight: 100,
    },
    hideForm: {
      display: 'none',
    },
    loginBtn: {
      button: {
        verticalAlign: 'top',
      },
    },
    loginLink: {
      width: '95vw',
      margin: '20px auto 0',
      overflow: 'hidden',
    },
    linkBlock: {
      '&:first-child': {
        float: 'left',
      },
      '&:last-child': {
        float: 'right',
      },
    },
    link: {
      color: '#8d8d8d',
      fontSize: '14px',
      '&:hover': {
        color: '#b15ad6',
      },
    },
    progress: {
      marginTop: 200,
    },
    hideProgress: {
      display: 'none',
    },
  },
};
