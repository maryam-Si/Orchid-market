import { ActionTypes } from "../constants/action-types";
import { getProducts, addProduct, changeProduct } from "../../api/products";
const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} = ActionTypes;

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const addAProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const selectAProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};

/**
 * async Actions...
 */

export const getAllProducts = () => async (dispatch, getState) => {
  const res = await getProducts();
  dispatch(setProducts(res.data));
};

export const setProduct = (product) => async (dispatch, getState) => {
  const res = await addProduct(product);
  dispatch(addAProduct(res.data));
};

export const editAProductById = (id, product) => async (dispatch, getState) => {
  changeProduct(id, product);
};
