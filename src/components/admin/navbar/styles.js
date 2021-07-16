import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},

  toolbar: {
    justifyContent: "space-between",
    position: "relative",
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    right: `${2}px`,
  },
  title: {
    color: theme.palette.primary.main,
  },

  list: {
    width: 250,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  fullList: {
    width: "auto",
  },
  appBar: {
    backgroundColor: theme.palette.grey[50],
    boxShadow: "none",
    borderBottom: `${theme.palette.grey[400]} ${1}px solid`,
    height: "5rem",
  },
  returnBtn: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  [theme.breakpoints.down("xl")]: {
    button: {
      padding: "6px 62px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    button: {
      padding: "6px 22px",
    },
  },
  [theme.breakpoints.down("md")]: {},
}));
