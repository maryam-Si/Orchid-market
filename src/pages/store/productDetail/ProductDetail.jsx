import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import { getAproductById } from "../../../store/actions/productActions";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Divider, TextField } from "@material-ui/core";
import { addproductToCart } from "../../../store/actions/cartAction";
import AddIcon from "@material-ui/icons/Add";
import { saveState } from "../../../utils/shopingCartInStorage";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import { toast } from "react-toastify";
import {
  digitsArToFa,
  digitsArToEn,
  digitsEnToFa,
  digitsFaToEn,
  digitsEnToAr,
} from "@persian-tools/persian-tools";

function ProductDetail() {
  const classes = useStyles();
  const product = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const [productNumber, setProductNumber] = useState(1);
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  useEffect(() => {
    dispatch(getAproductById(id));
  }, []);

  useEffect(() => {
    saveState("shoppingCart", shoppingCart);
  }, [shoppingCart]);

  const handleClick = (e) => {
    e.preventDefault();
    if (productNumber > product.stock) {
      setOpen(true);
    } else {
      setOpen(false);

      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        number: productNumber,
      };
      dispatch(addproductToCart(newItem));
      setOpenSuccess(true);
    }
  };
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          xl={12}
          style={{ marginTop: "20px" }}
        >
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              مقدار شما بیشتر از موجودی انبار است. بیشترین مقداری که می تواند
              اضافه شود {digitsEnToFa(product.stock?.toString() || "")} است.
            </Alert>
          </Collapse>

          <Collapse in={openSuccess}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenSuccess(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              محصول با موفقیت به سبدخرید اضافه شد.
            </Alert>
          </Collapse>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          xl={4}
          className={classes.imgContainer}
        >
          <Box className={classes.box}>
            <img src={product.image} alt="" className={classes.img} />
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs={12}
          sm={8}
          md={8}
          xl={8}
          justifyContent="space-between"
        >
          <Grid item xl={7}>
            <Typography variant="h3" className={classes.brand}>
              {product.brand}
            </Typography>
            <Typography variant="h6" className={classes.productName}>
              {product.name}
            </Typography>
            <Divider className={classes.divider} />
            {product.stock > 0 ? (
              <Typography className={classes.stock}>موجود در انبار</Typography>
            ) : (
              <Typography>موجود نیست</Typography>
            )}
            <Typography className={classes.productPrice}>
              {(+product.price).toLocaleString("fa-IR")}
              <span style={{ fontSize: "1rem", fontWeight: "100" }}>تومان</span>
            </Typography>
            <form onSubmit={handleClick}>
              <Grid
                item
                container
                justifyContent="flex-start"
                alignItems="center"
                direction="row"
                lg={3}
                xl={12}
              >
                <TextField
                  id="standard-number"
                  label="تعداد"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ width: "20%" }}
                  autoFocus
                  value={productNumber}
                  onChange={(e) => setProductNumber(Number(e.target.value))}
                />
                {product.stock > 0 ? (
                  <Button type="submit" className={classes.Button}>
                    <AddIcon className={classes.addIcon} />
                    <Typography className={classes.buttonText}>
                      افزودن به سبد خرید
                    </Typography>
                  </Button>
                ) : (
                  <Typography className={classes.redButton}>
                    موجود نیست
                  </Typography>
                )}
              </Grid>
            </form>
          </Grid>
          <Grid item xl={4} className={classes.description}>
            <Typography className={classes.descriptionTitle}>
              توضیحات
            </Typography>
            <Divider />

            <Box className={classes.descriptionContainer}>
              <Typography variant="h6">{product.description}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
