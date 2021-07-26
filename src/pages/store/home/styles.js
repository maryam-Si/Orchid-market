import { makeStyles } from "@material-ui/core/styles";
import "../../../styles/sass/variable.scss";
export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  groupTitle: {
    fontSize: "1.5rem",
    paddingBottom: theme.spacing(8),
    textDecoration: "none",
  },
}));
