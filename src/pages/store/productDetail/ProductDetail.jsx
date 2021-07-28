import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import { getAproductById } from "../../../store/actions/productActions";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ProductDetail() {
  const classes = useStyles();
  const product = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAproductById(id));
  }, []);
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={4} md={4}>
          <Box>
            <img src={product.image} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Paper>{product.name}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
