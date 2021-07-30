import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiButton-root": {
      "&:hover": {
        textDecoration: "none",
        backgroundColor: "white",
        color: "blue",
        border: "1px solid",
        "& .makeStyles-addIcon-26": {
          color: "white",
          backgroundColor: "blue",
        },
      },
    },
    "& .MuiDivider-root": {
      border: "none",
      height: "1.6px",
      margin: theme.spacing(2, 0),
      backgroundColor: theme.palette.primary.light,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    objectFit: "contain",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  container: {
    marginTop: theme.spacing(15),
  },
  imgContainer: {
    padding: theme.spacing(8),
  },
  brand: {
    textAlign: "left",
    fontSize: "2.3rem",
    fontWeight: "bold",
    padding: theme.spacing(1),
    color: theme.palette.grey[900],
  },
  stock: {
    fontSize: "0.7rem",
    color: theme.palette.grey[500],
    textAlign: "left",
    padding: theme.spacing(2),
  },
  productName: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  productPrice: {
    padding: theme.spacing(1),
    textAlign: "left",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: "0.7rem",
    fontWeight: "lighter",
  },
  Button: {
    width: "33%",
    borderRadius: "20px",
    backgroundColor: "#5b69b4",
    color: "white",
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(1.5),
  },
  redButton: {
    textAlign: "left",
    width: "33%",
    fontSize: "2.3rem",
    fontWeight: "bold",
    padding: theme.spacing(1),
    color: theme.palette.secondary.contrastText,
  },
  addIcon: {
    borderRadius: "50%",
    backgroundColor: "white",
    color: theme.palette.primary.main,
    width: "1.8rem",
    height: "1.7rem",
    margin: "1px 14px 0px 0px",
  },
  description: {
    marginTop: theme.spacing(4),
    textAlign: "left",
    padding: "3px",
  },
  descriptionTitle: { fontSize: "1.3rem", color: theme.palette.grey[900] },
  descriptionContainer: {
    height: "200px",
    width: "20%",
  },
}));
