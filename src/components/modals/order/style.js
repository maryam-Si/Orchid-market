import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: "18px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    GridShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative",
    width: "478px",
    textAlign: "center",
    height: "97%",
  },
  closeBtn: {
    position: "absolute",
    top: "2px",
    right: "2px",
  },

  [theme.breakpoints.down("xl")]: {
    saveBtn: {
      fontSize: "0.7rem",
    },
  },
  [theme.breakpoints.down("lg")]: {
    saveBtn: {
      fontSize: "0.7rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    saveBtn: {
      fontSize: "0.7rem",
    },
  },

  [theme.breakpoints.down("sm")]: {
    saveBtn: {
      fontSize: "0.7rem",
    },
  },
  [theme.breakpoints.down("xs")]: {
    saveBtn: {
      fontSize: "0.7rem",
    },
  },
}));

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
