import { CssBaseline, GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <>
    <CssBaseline />
    <MuiGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          height: '100%',
        },
        body: {
          color: 'white',
          margin: 0,
          height: '100%',
          fontFamily: 'Arial, sans-serif',
        },
        h1: {
          fontSize: '2rem',
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
          },
        },
        h3: {
          fontSize: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '1.2rem',
          },
        },
        container: {
          padding: '0 16px',
          '@media (min-width:600px)': {
            padding: '0 32px',
          },
        },
        '.MuiCard-root': {
          margin: '16px 0',
          transition: 'transform 0.2s',
          '@media (max-width:600px)': {
            margin: '8px 0',
          },
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },

        '.MuiContainer-root': {
          minHeight: '100vh',
          backgroundColor: 'black',
          color: 'white',
        },
      }}
    />
  </>
);

export default GlobalStyles;
