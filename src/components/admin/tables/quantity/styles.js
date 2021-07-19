import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  table: {
    height: "400px",
    width: "100%",
  },
  root: {
    "& .MuiTypography-body1": {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
      fontWeight: "500",
      lineHeight: "1.5rem",
    },
  },
}));
