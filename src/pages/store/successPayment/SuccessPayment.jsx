import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useStyles } from "./styles";
const SuccessPayment = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h3" align="left">
        نتیجه پرداخت
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} xl={2}>
          <Box className={classes.box}>
            <CheckCircleIcon className={classes.checkCircleIcon} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={4}>
          <Typography>
            با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما
            تماس گرفته خواهد شد.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuccessPayment;
