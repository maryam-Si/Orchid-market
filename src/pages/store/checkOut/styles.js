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
  form: {
    minWidth: `700px`,
  },
  input: {
    width: "40%",
  },
}));
