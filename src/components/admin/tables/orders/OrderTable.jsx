import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import ModalContainer from "../../../modals/ModalContainer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { setAOrder } from "../../../../store/actions/orderAction";

import OrderModal from "../../../modals/order/OrderModal";

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
  img: {
    width: `${144}px`,
    height: `${137}px`,
    objectFit: "cover",
    objectPosition: "top",
  },
  editIcn: {
    marginRight: `${29}px`,
  },
  showDetail: {
    color: theme.palette.primary.main,
  },
}));

export default function DataTable({ headers, data, filterMode }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(data);
  const selectedItem = useSelector((state) => state.allOrders.order);

  /**
   * modal handling
   */
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    rowsPerPage - Math.min(rowsPerPage, orders?.length - page * rowsPerPage);

  //////////////////////////////////////////////////////////////////////////////////
  /**filter orders */
  const filteredOrders =
    filterMode === "waiting"
      ? data.filter((order) => order.orderStatus === "waiting")
      : data.filter((order) => order.orderStatus === "delivered");
  useEffect(() => {
    if (filterMode) {
      setOrders(filteredOrders);
    } else {
      setOrders(data);
    }
  }, [filterMode, data]);
  ///////////////////////////////////////////////////////////////
  /**show details of each order */
  function showDetails(data) {
    dispatch(setAOrder(data));
    handleOpen();
  }

  /////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((th, index) => (
                <StyledTableCell key={index} align="left">
                  {th}
                </StyledTableCell>
              ))}
              <StyledTableCell align="left"> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow className={classes.table__row} key={row.id}>
                  <StyledTableCell>{row.customerName}</StyledTableCell>
                  <StyledTableCell>
                    {(+row.totalPrice).toLocaleString("fa-IR")}
                  </StyledTableCell>
                  <StyledTableCell>{row.orderTime}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      className={classes.showDetail}
                      component="h3"
                      onClick={() => {
                        showDetails(row);
                      }}
                    >
                      بررسی سفارش
                    </Button>
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
          count={orders?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <ModalContainer open={open} onClose={handleClose}>
        <OrderModal
          title="نمایش سفارش"
          btnText="تحویل داده شد"
          onClose={handleClose}
          orderDetail={selectedItem}
        />
      </ModalContainer>
    </>
  );
}
