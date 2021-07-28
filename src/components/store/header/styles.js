import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-container": {
      flexWrap: "nowrap",
    },
    "& .MuiPaper-root MuiDrawer-paper .MuiDrawer-paperAnchorRight .MuiDrawer-paperAnchorDockedRight .MuiPaper-elevation0":
      {
        zIndex: 1,
        padding: theme.spacing(2),
        marginTop: theme.spacing(3),
      },
  },
  logo: {},
  toolbar: {
    justifyContent: "space-between",
    position: "relative",
    alignItems: "center",
    display: "flex",
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
    height: "8rem",
    boxShadow: "0 1px 1px rgb(0 0 0 / 8%)",
    backgroundColor: "#fafafa",
  },
  navbar: {
    color: theme.palette.grey[900],
    textDecoration: "none",
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
