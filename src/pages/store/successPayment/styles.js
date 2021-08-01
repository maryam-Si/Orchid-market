import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(20),
    "& .MuiButton-root": {},
  },
  checkCircleIcon: {
    width: "5em",
    height: "5em",
    color: theme.palette.success.main,
  },
  container: {
    overflow: "hidden",
  },
}));
