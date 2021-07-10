import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import '../assets/fonts/IRYekan/font.css'

export const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: 'IRYekan,sans-serif'
      
    },

    
  });
  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
      fontWeight: 'lighter'
    },
  };

function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default Theme

