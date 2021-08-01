import React, { useEffect } from "react";

import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import payment from "../../../assets/images/payment.jpg";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setOrders, addAorder } from "../../../store/actions/orderAction";
import { addOrder, getOrders } from "../../../api/order";
import { makeBasketEmpty } from "../../../store/actions/cartAction";

function PaymentPage() {
  const classes = useStyles();
  const orders = useSelector((state) => state.allOrders.orders);
  const newOrder = useSelector((state) => state.allOrders.newOrder);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    getOrders().then((res) => {
      dispatch(setOrders(res.data));
    });
  }, []);

  function failureAction() {
    history.push("/payment/failure");
  }
  function successAction() {
    addOrder(newOrder).then((res) => {
      dispatch(addAorder(res.data));
      dispatch(makeBasketEmpty());
      history.push(`/payment/success/order/${orders.length + 1}`);
    });
  }
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container alignItems="center" className={classes.container}>
        <Grid item xs={12} xl={12}>
          <img src={payment} className={classes.img} alt="check" />
        </Grid>
        <Grid
          container
          item
          justifyContent="flex-end"
          alignItems="center"
          xs={12}
          xl={6}
        >
          <Grid item xl={4}>
            <Button className={classes.successButton} onClick={successAction}>
              پرداخت
            </Button>
          </Grid>

          <Grid item xl={2}>
            <Button className={classes.cancelButton} onClick={failureAction}>
              انصراف
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentPage;
