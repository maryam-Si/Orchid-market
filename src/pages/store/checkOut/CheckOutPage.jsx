import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
} from "@material-ui/core/";
import {
  digitsArToFa,
  digitsArToEn,
  digitsEnToFa,
  digitsFaToEn,
  digitsEnToAr,
} from "@persian-tools/persian-tools";
import { useStyles } from "./styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { makeNewOrder } from "../../../store/actions/orderAction";
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
const validationSchema = yup.object({
  name: yup
    .string("نام خود را وارد کنید")
    .required("فیلد اجباری")
    .typeError("نام نامعتبر است"),
  lastName: yup
    .string("نام خانوادگی خود را وارد کنید")
    .required("فیلد اجباری")
    .typeError("نام خانوادگی نامعتبر است"),
  address: yup
    .string("آدرس خود را وارد کنید")
    .required("فیلد اجباری")
    .typeError("آدرس نامعتبر است"),
  phone: yup
    .string("جهت هماهنگی ارسال سفارش")
    .required("فیلد اجباری")
    .typeError("شماره نامعتبر است")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/,
      "شماره نامعتبر است"
    ),
});

export default function CheckOutPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedDate, handleDateChange] = useState(moment());

  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const history = useHistory();
  const prices = shoppingCart?.map((item) => item.price * item.number);
  const result = prices.reduce((a, b) => a + b);
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      address: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const fullName = `${values.name}  ${values.lastName}`;
      const orderTime = new Date().toLocaleDateString("fa-IR");

      const newOrder = {
        customerName: fullName,
        address: values.address,
        telephone: digitsEnToFa(values.phone),
        deliveryTime: selectedDate.format("jYYYY/jMM/jDD"),
        orderTime: orderTime,
        productList: shoppingCart,
        totalPrice: result,
        orderStatus: "waiting",
      };
      dispatch(makeNewOrder(newOrder));
      history.push("/payment");
    },
  });

  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <Container maxWidth="xl" className={classes.root}>
        <Typography align="left" variant="h4">
          نهایی کردن خرید
        </Typography>

        <Grid container justifyContent="center" alignItems="center">
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Grid
              justifyContent="center"
              alignItems="center"
              direction="column"
              spacing={3}
              item
              container
              xl={12}
            >
              <Grid
                item
                container
                xl={12}
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Grid item xl={5}>
                  <TextField
                    id="name"
                    name="name"
                    label="نام :"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>

                <Grid item xl={5}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="نام خانوادگی :"
                    fullWidth
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
              </Grid>
              <Grid item container xl={12} justifyContent="space-between">
                <Grid item xl={5}>
                  <TextField
                    id="address"
                    name="address"
                    label="آدرس :"
                    fullWidth
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xl={5}>
                  <TextField
                    id="phone"
                    name="phone"
                    label=" شماره تماس :"
                    fullWidth
                    value={digitsArToEn(formik.values.phone)}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
              </Grid>
              <Grid item container xl={12} justifyContent="flex-start">
                <DatePicker
                  clearable
                  okLabel="تأیید"
                  cancelLabel="لغو"
                  clearLabel="پاک کردن"
                  labelFunc={(date) =>
                    date ? date.format("jYYYY/jMM/jDD") : ""
                  }
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Grid>
              <Grid item xl={12} container justifyContent="center">
                <Button color="primary" variant="contained" type="submit">
                  پرداخت
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </MuiPickersUtilsProvider>
  );
}
