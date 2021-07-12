import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  button: {
    padding: `${11}px ${30}px`,
    marginRight: `${54}px`,
  },
  toolbar: { justifyContent: "space-between" },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
  },

  list: {
    width: 250,
  },
  links: {
    marginRight: "2rem",
    // flexGrow: 1,
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
  },
}));
