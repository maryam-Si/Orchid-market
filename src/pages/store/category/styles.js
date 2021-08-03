import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& .MuiDrawer-paper": {
      zIndex: 1,
      padding: theme.spacing(2),
      marginTop: theme.spacing(15),
      paddingTop: theme.spacing(4),
      width: "20%",
      height: "85vh",
      overflowX: "hidden",
      borderLeft: "1px solid rgb(97 91 91 / 12%)",
    },
    "& .MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "rgb(0 0 0 / 0%)",
      },
    },
    "& .MuiPaper-elevation4": {
      boxShadow:
        " 0px 8px 18px -11px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 1px 0px rgb(0 0 0 / 12%)",
    },
    "& .MuiTypography-body1": {
      color: "palette.background.default",
    },
  },

  content: {
    flexGrow: 1,
    height: "100vh",
    overflowX: "hidden",
    paddingTop: theme.spacing(20),
    flexWrap: "wrap",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
    fontSize: "1rem",
  },
  cardContent: {
    flexGrow: 1,
    fontSize: "1rem",
    fontWeight: "lighter",
  },
  groupTitle: {
    fontSize: "1.4rem",
    textDecoration: "none",
  },
  sidbarItem: {
    margin: theme.spacing(1),
    width: "95%",
    fontWeight: "100",
    textAlign: "left",
  },
  group: {
    margin: theme.spacing(1),
  },
  productName: {
    marginBottom: theme.spacing(1),
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },
  groupTitle: {
    padding: theme.spacing(2),
    textDecoration: "none",
  },
  appBar: {
    marginTop: "128px",
    backgroundColor: "white",
    minHeight: "58px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    margin: 0,
    width: 119,
  },
  searchIcon: {
    color: theme.palette.text.disabled,
  },
}));
