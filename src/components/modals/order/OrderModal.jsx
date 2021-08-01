import React from "react";
import {
  Button,
  Typography,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useDispatch } from "react-redux";
import { useStyles, StyledTableCell, StyledTableRow } from "./style";
import { changeOrder, getOrders } from "../../../api/order";
import { setLoading } from "../../../store/actions/LoadingActions";
import { setOrders } from "../../../store/actions/orderAction";
import { toast } from "react-toastify";

function OrderModal({ title, btnText, onClose, orderDetail }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  function changeStatus() {
    const changedOrder = { ...orderDetail, orderStatus: "delivered" };
    changeOrder(orderDetail.id, changedOrder);
    dispatch(setLoading(true));
    setTimeout(() => {
      getOrders()
        .then((res) => {
          dispatch(setOrders(res.data));
        })
        .then(dispatch(setLoading(false)))
        .catch((error) => toast.error("!اطلاعات یافت نشد"));

      dispatch(setLoading(false));
    }, 1000);
    onClose();
  }
  return (
    <div className={classes.paper}>
      <Grid container justifyContent="space-between" alignItems="center">
        <h2 id="transition-modal-title" className={classes.formTitle}>
          {title}
        </h2>
        <CancelIcon
          color="error"
          className={classes.closeBtn}
          onClick={onClose}
        />
      </Grid>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item container justifyContent="space-around">
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              نام مشتری:
            </Typography>
          </Grid>
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              {orderDetail?.customerName}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-around">
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              آدرس:
            </Typography>
          </Grid>
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              {orderDetail?.address}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-around">
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              تلفن:
            </Typography>
          </Grid>
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              {orderDetail?.telephone}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-around">
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              زمان تحویل:
            </Typography>
          </Grid>
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              {orderDetail?.deliveryTime}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-around">
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              زمان سفارش:
            </Typography>
          </Grid>
          <Grid display="inline">
            <Typography variant="h6" component={"span"}>
              {orderDetail?.orderTime}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container lg={12} className={classes.table}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">کالا</StyledTableCell>
                  <StyledTableCell align="left">قیمت</StyledTableCell>

                  <StyledTableCell align="left">تعداد</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetail.productList.map((row) => (
                  <StyledTableRow className={classes.table__row} key={row.id}>
                    <StyledTableCell>
                      <Typography variant="h6">{row.name}</Typography>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography variant="h6">
                        {(+row.price).toLocaleString("fa-IR")}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography variant="h6">
                        {(+row.number).toLocaleString("fa-IR")}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={12}>
          {orderDetail.orderStatus === "waiting" ? (
            <Button
              type="submit"
              variant="contained"
              className={classes.saveBtn}
              color="primary"
              onClick={() => changeStatus()}
            >
              <Typography variant="h6">{btnText}</Typography>
            </Button>
          ) : (
            <Grid item container justifyContent="space-around" lg={6}>
              <Typography variant="h6">زمان تحویل :</Typography>
              <Typography variant="h6">{orderDetail.deliveryTime}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderModal;
