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
          height: '100%', // Garante que o HTML ocupe 100% da altura
        },
        body: {
          color: 'white', // Defina a cor do texto para branco para contraste
          margin: 0,
          height: '100%', // Garante que o body ocupe 100% da altura da página
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
        // Garantir que o layout ocupe toda a altura disponível
        '.MuiContainer-root': {
          minHeight: '100vh',
          backgroundColor: 'black', // Define o fundo preto
          color: 'white',
        },
      }}
    />
  </>
);

export default GlobalStyles;
