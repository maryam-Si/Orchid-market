import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "./styles";
const FailedPayment = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h3" align="left">
        نتیجه پرداخت
      </Typography>
      <Grid
        container
        alignItems="center"
        className={classes.container}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={6} xl={2}>
          <Box className={classes.box}>
            <CancelIcon className={classes.cancelIcon} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={4}>
          <Typography>
            پرداخت موفقیت آمیز نبود.سفارش شما در انتظار پرداخت است.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FailedPayment;
