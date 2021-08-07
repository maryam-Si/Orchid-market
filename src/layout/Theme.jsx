import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import "../assets/fonts/IRYekan/font.css";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRYekan,sans-serif",
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
theme.typography.h3 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
    fontWeight: "lighter",
  },
};

theme.typography.h4 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.1rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

theme.typography.h5 = {
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: "0.7rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.5rem",
    fontWeight: "lighter",
  },
};

theme.typography.h6 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.2rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    fontWeight: "lighter",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.7rem",
    fontWeight: "lighter",
  },
};

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
