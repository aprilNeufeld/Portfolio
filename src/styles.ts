import { createTheme, responsiveFontSizes, adaptV4Theme } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme(
    adaptV4Theme({
      palette: {
        primary: {
          main: '#755b96',
          dark: '#6500C1',
        },
        secondary: {
          main: '#6bd6dd',
        },
      },
      typography: {
        caption: {
          color: '#A4A4A4',
          fontSize: '1rem',
          display: 'inline-block',
        },
        overline: {
          fontSize: '2rem',
        },
      },
    }),
  ),
);
