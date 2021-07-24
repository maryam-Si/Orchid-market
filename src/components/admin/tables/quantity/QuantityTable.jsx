import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import {
  changeTextToInput,
  changingValue,
  changeCellToText,
  undoEditing,
  deleteRowFromList,
  addRow,
} from "../../../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Typography } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: `700px`,
  },
  root: {
    "& p.MuiTypography-root.MuiTypography-body1": {
      fontWeight: "500",
      lineHeight: "1.5rem",
      fontSize: "1.7rem",
    },
  },
}));

export default function QuantityTable({ headers, data }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const editedRows = useSelector((state) => state.allProducts.editableRows);
  //////////////////////////////////////////////////////////////

  /**handling pagination */

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data?.length - page * rowsPerPage);

  //////////////////////////////////////////////////////////////////////////////////
  /**  change product's price or stock cell to input*/

  const handleEditing = (feild, id) => {
    let type = feild === "price" ? "editablePrice" : "editableStock";
    let newCell = { ...editedRows[id], [type]: true };
    dispatch(changeTextToInput(id, newCell));
    if (!editedRows[id]) {
      dispatch(addRow(id, newCell));
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////
  /** Change the value of the cells */
  function changeValueOfCell(e, type, id) {
    let editedValue = e.target.value;
    let newRow = { ...editedRows[id], [type]: editedValue };

    dispatch(changingValue(id, newRow));
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  /** back to previous value of price or stock  */
  function undo(e, type, product) {
    if (type === "price") {
      let previous = {
        ...editedRows[product.id],
        ["editablePrice"]: false,
        [type]: product.price || 0,
      };
      if (e.keyCode === 27) {
        dispatch(undoEditing(product.id, previous));
        if (editedRows[product.id].stock === product.stock) {
          dispatch(deleteRowFromList(product.id));
        }
      }
    } else {
      let previous = {
        ...editedRows[product.id],
        ["editableStock"]: false,
        [type]: product.stock || 0,
      };
      if (e.keyCode === 27) {
        dispatch(undoEditing(product.id, previous));
        if (editedRows[product.id].price === (product.price || 0)) {
          dispatch(deleteRowFromList(product.id));
        }
      }
    }
  }

  ///////////////////////////////////////////////////////////////
  /**convert input to text  */
  function changeToText(e, id, type) {
    let newValue = e.target.value;
    if (type === "price") {
      let newRow = {
        ...editedRows[id],
        [type]: newValue,
      };
      dispatch(changeCellToText(id, newRow));
    } else if (type === "stock") {
      let newRow = {
        ...editedRows[id],
        [type]: newValue,
      };
      dispatch(changeCellToText(id, newRow));
    }
  }

  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((th, index) => (
                <StyledTableCell key={index} align="left">
                  {th}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow className={classes.table__row} key={row.id}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell
                    onClick={() => handleEditing("price", row.id)}
                  >
                    {!editedRows[row.id]?.editablePrice ? (
                      <Typography>
                        {(+row.price).toLocaleString("fa-IR") || 0}
                      </Typography>
                    ) : (
                      <TextField
                        classes={{ input: classes.input }}
                        type="text"
                        defaultValue={(+row.price).toLocaleString("fa-IR") || 0}
                        autoFocus
                        onKeyUp={(e) => undo(e, "price", row)}
                        onBlur={(e) => changeToText(e, row.id, "price")}
                      />
                    )}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => handleEditing("stock", row.id)}
                  >
                    {!editedRows[row.id]?.editableStock ? (
                      <Typography>
                        {(+row.stock).toLocaleString("fa-IR") || 0}
                      </Typography>
                    ) : (
                      <TextField
                        classes={{ input: classes.input }}
                        type="text"
                        defaultValue={(+row.stock).toLocaleString("fa-IR") || 0}
                        onKeyUp={(e) => undo(e, "stock", row)}
                        onBlur={(e) => changeToText(e, row.id, "stock")}
                        autoFocus
                      />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
