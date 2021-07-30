import { makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(18),
    "& .MuiButton-root": {
      "&:hover": {
        textDecoration: "none",
        backgroundColor: "white",
        color: "#5b69b4",
        border: "1px solid",
      },
    },
  },
  table: {
    minWidth: `700px`,
  },
  grid: {
    padding: "10px",
  },
  shoppingCartIcon: {
    width: "14rem",
    height: "12rem",
    color: indigo[200],
  },
  iconTitle: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3),
  },
  Button: {
    width: "14%",
    borderRadius: "20px",
    backgroundColor: "#5b69b4",
    color: "white",
    margin: theme.spacing(5, 0),
  },
  finalButton: {
    width: "43%",
    borderRadius: "20px",
    backgroundColor: "#5b69b4",
    color: "white",
    margin: theme.spacing(5, 0),
  },
  table: {
    marginTop: theme.spacing(4),
  },
  total: {
    fontSize: "1.5rem",
  },
}));
