import { lighten } from '@theme-ui/color';
import { swiss } from '@theme-ui/presets';
import type { Theme } from 'theme-ui';

const theme: Theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    secondary: '#ccc',
    lightGray: lighten('black', 0.5) as any
  },
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
    monospace: '"Roboto Mono", monospace'
  },
  styles: {
    ...swiss.styles,
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 2
    },
    flexspace: {
      mx: 'auto'
    },
    navbox: {
      padding: '8px'
    },
    spinner: {
      color: 'primary'
    },
    cart: {
      itemList: {
        flexDirection: 'column'
      },
      item: {
        marginBottom: 4
      },
      itemGrid: {
        alignItems: 'center'
      }
    },
    product: {
      quantity: {
        width: 50
      }
    },
    inputLabel: {
      fontSize: '0.8em',
      color: 'lightGray',
      lineHeight: '1.6'
    },
    pageTitle: {
      fontSize: '3rem',
      marginBottom: '2rem'
    },
    shopName: {
      fontSize: '1.2em',
      span: {
        color: 'primary'
      },
      '&:hover span': {
        color: 'text'
      }
    },
    membershipTerm: {
      fontWeight: 'bold',
      fontSize: '.6em',
      lineHeight: '1.6',
      textTransform: 'uppercase'
    },
    membershipItem: {
      fontFamily: 'Roboto Mono, Menlo, monospace',
      marginBottom: '1rem',
      letterSpacing: '1px',
      '&:last-child': {
        marginBottom: 0
      }
    }
  },
  layout: {
    page: {
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%'
    },
    main: {
      maxWidth: '72rem',
      mx: 'auto',
      py: 3,
      px: 4,
      flex: '1 1 auto'
    },
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4
    },
    footer: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4
    },
    section: {
      my: 4
    },
    cart: {
      px: 10,
      minHeight: '100vh',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      maxWidth: '500px',
      zIndex: 9999,
      overflow: 'auto',
      willChange: 'transform',
      backgroundColor: '#fff',
      flexDirection: 'column',
      boxShadow: '0 2px 6px #777',
      transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    },
    snackbar: {
      position: 'fixed',
      left: '50%',
      top: '10px',
      opacity: 0,
      transform: 'translateX(-50%)',
      zIndex: 100
    },
    loading: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: '0'
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted'
    },
    loyalty: {
      padding: 2,
      border: '1px solid',
      borderColor: '#ccc',
      borderRadius: '4px',
      backgroundColor: 'background'
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'muted'
      }
    },
    login: {
      cursor: 'pointer',
      backgroundColor: 'primary',
      fontSize: '.8em'
    },
    logout: {
      cursor: 'pointer',
      backgroundColor: 'lightGray'
    },
    icon: {
      cursor: 'pointer'
    }
  },
  links: {
    nav: {
      fontFamily: 'body'
    }
  },
  text: {
    ...swiss.text,
    paragraph: {
      my: 2,
      textAlign: 'justify',
      textAlignLast: 'start',
      textJustify: 'auto'
    },
    smallHeading: {
      fontSize: 1,
      fontFamily: 'heading',
      fontWeight: 'heading',
      textTransform: 'uppercase'
    },
    h1: {
      variant: 'text.display'
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2
    }
  },
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary'
    },
    secondary: {
      color: 'highlight',
      bg: 'purple'
    }
  },
  images: {
    avatar: {
      width: 200,
      height: 200,
      borderRadius: 99999,
      backgroundColor: 'muted'
    },
    avatarHeader: {
      width: 35,
      height: 35,
      borderRadius: 99999,
      backgroundColor: 'muted',
      borderColor: 'primary',
      borderWidth: 2,
      borderStyle: 'solid'
    }
  },
  forms: {
    label: {
      fontSize: '0.8em',
      color: 'lightGray',
      lineHeight: '1.6'
    },
    disabledLabel: {
      fontSize: '0.8em',
      color: '#999',
      lineHeight: '1.6'
    },
    input: {
      '&:read-only': {
        color: '#999'
      },
      borderColor: '#ccc'
    },
    textarea: {
      borderColor: '#ccc'
    },
    select: {
      backgroundColor: '#fff',
      borderColor: '#ccc',
      '&:disabled': {
        color: 'gray'
      }
    }
  }
};

export default theme;
