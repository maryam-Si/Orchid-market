import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
  Grid,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  digitsArToFa,
  digitsArToEn,
  digitsEnToFa,
  digitsFaToEn,
  digitsEnToAr,
} from "@persian-tools/persian-tools";
import { useStyles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useHistory } from "react-router";
import { removeFromCart } from "../../../store/actions/cartAction";
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

function BasketPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const history = useHistory();
  const [total, setTotal] = useState(null);

  function finalPrice() {
    let prices = shoppingCart?.map((item) => item.price * item.number);
    const result = prices.reduce((a, b) => a + b).toLocaleString("fa-IR");

    return result;
  }

  return (
    <Container maxWidth="xl" className={classes.root}>
      {shoppingCart.length > 0 ? (
        <>
          <Typography variant="h4" align="left">
            سبد خرید
          </Typography>
          <Container style={{ width: "80%" }}>
            <TableContainer component={Paper} className={classes.table}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="left">کالا</StyledTableCell>
                    <StyledTableCell align="left">قیمت</StyledTableCell>
                    <StyledTableCell align="left">تعداد</StyledTableCell>
                    <StyledTableCell align="left"> </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {shoppingCart?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <TableCell align="left" component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">{row.number}</TableCell>
                      <TableCell align="left">
                        <Tooltip title="حذف کالا" placement="top">
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              dispatch(removeFromCart(row.id));
                              console.log(row.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xl={6}>
                <Typography variant="h6" className={classes.total}>
                  مجموع : {finalPrice()} تومان
                </Typography>
              </Grid>
              <Grid item xl={6}>
                <Button className={classes.finalButton}>
                  نهایی کردن سبد خرید
                </Button>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <Paper>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            className={classes.grid}
          >
            <ShoppingBasketIcon className={classes.shoppingCartIcon} />
            <Typography className={classes.iconTitle}>
              سبد خرید شما خالی است
            </Typography>
            <Button
              className={classes.Button}
              onClick={() => history.push("/")}
            >
              بازگشت به خرید
            </Button>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}

export default BasketPage;
