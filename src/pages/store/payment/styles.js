import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(18),
    "& .MuiButton-root": {},
  },
  successButton: {
    backgroundColor: theme.palette.success.main,
    color: "white",
    width: "66%",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.success.main,
      border: "1px solid",
    },
  },
  cancelButton: {
    width: "50%",

    backgroundColor: theme.palette.error.dark,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.error.dark,
      border: "1px solid",
    },
    img: {
      marginTop: theme.spacing(2),
    },
  },
}));
