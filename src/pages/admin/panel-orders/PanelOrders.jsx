import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../../components/admin/Header";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../store/actions/LoadingActions";
import WithLoading from "../../../components/WithLoading";
import OrderTable from "../../../components/admin/tables/orders/OrderTable";
import { toast } from "react-toastify";
import { setOrders } from "../../../store/actions/orderAction";
import { getOrders } from "../../../api/order";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
    transform: "translate(0px, 73px)",
    position: "relative",
  },
  table: {
    width: "100%",
    height: "400px",
    margin: `${theme.spacing(5)}px auto 0`,
  },
}));

const PanelQuantity = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrders.orders);
  const [filterOrders, setFilterOrders] = useState(null);
  function filtering(v) {
    setFilterOrders(v);
  }

  useEffect(() => {
    dispatch(setLoading(true));
    getOrders()
      .then((res) => {
        dispatch(setOrders(res.data));
      })
      .then(dispatch(setLoading(false)))
      .catch((error) => toast.error("!اطلاعات یافت نشد"));
  }, []);
  console.log(filterOrders);
  /** */
  return (
    <WithLoading>
      <div className={classes.root}>
        <Header
          title="مدیریت سفارش ها"
          isOrderHeader={true}
          recivingStatus={filtering}
        />
        <div className={classes.table}>
          <OrderTable
            headers={["نام کاربر", "مجموع مبلغ(تومان) ", "زمان ثبت سفارش"]}
            data={orders}
            filterMode={filterOrders}
          />
        </div>
      </div>
    </WithLoading>
  );
};

export default PanelQuantity;
