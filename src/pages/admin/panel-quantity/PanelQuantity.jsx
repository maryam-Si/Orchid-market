import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../../components/admin/Header";
import {
  getAllProducts,
  addRow,
  makeArrayEmpty,
} from "../../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../store/actions/LoadingActions";
import WithLoading from "../../../components/WithLoading";
import QuantityTable from "../../../components/admin/tables/quantity/QuantityTable";
import { toast } from "react-toastify";
import { changeProduct } from "../../../api/products";

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
  const products = useSelector((state) => state.allProducts.products);
  const rows = useSelector((state) => state.allProducts.editableRows);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      products.map((item) =>
        dispatch(
          addRow(item.id, {
            editablePrice: false,
            editableStock: false,
            price: item.price || 0,
            stock: item.stock || 0,
          })
        )
      );
    }
  }, [products]);
  console.log(rows);
  /** send edited product to db */
  const applyChanges = () => {
    let changedProducts = [];

    products.forEach((product) => {
      if (
        rows[product.id]["editablePrice"] ||
        rows[product.id]["editableStock"]
      ) {
        const editedPrice = rows[product.id].price;
        const editedStock = rows[product.id].stock;
        changedProducts.push({
          ...product,
          price: editedPrice,
          stock: editedStock,
        });
      }
    });
    Promise.all(changedProducts.map((row) => changeProduct(row.id, row))).then(
      (res) => {
        dispatch(setLoading(true));
        setTimeout(() => {
          dispatch(getAllProducts());
          dispatch(makeArrayEmpty());
          dispatch(setLoading(false));
        }, 1000);
      }
    );
  };
  /** */
  return (
    <WithLoading>
      <div className={classes.root}>
        <Header
          title="مدیریت موجودی و قیمت ها"
          btnText=" ذخیره"
          handelClick={applyChanges}
        />
        <div className={classes.table}>
          <QuantityTable
            headers={["نام کالا", "قیمت(تومان) ", "موجودی"]}
            data={products}
          />
        </div>
      </div>
    </WithLoading>
  );
};

export default PanelQuantity;
