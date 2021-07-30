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
}));
