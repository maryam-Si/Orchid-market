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
  

function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default Theme

