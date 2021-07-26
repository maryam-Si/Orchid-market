import { ActionTypes } from "../constants/action-types";
import { getProducts, addProduct, changeProduct } from "../../api/products";
const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  ADD_PRODUCT,
  ADD_EDITABLE_ROW,
  CHANGE_TO_INPUT,
  CHANGE_VALUE,
  CHANGE_TO_TEXT,
  DELETE_EDITABLE_ROW,
  UNDO_EDIT,
  DELETE_FROM_LIST,
  EMPTY_LIST,
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

export const addRow = (id, row) => {
  return {
    type: ADD_EDITABLE_ROW,
    payload: { id, row },
  };
};
export const makeArrayEmpty = () => {
  return {
    type: EMPTY_LIST,
    payload: [],
  };
};

export const changeTextToInput = (id, updateRow) => {
  return {
    type: CHANGE_TO_INPUT,
    payload: { id, updateRow },
  };
};

export const changeCellToText = (id, updateRow) => {
  return {
    type: CHANGE_TO_TEXT,
    payload: { id, updateRow },
  };
};

export const deleteEditableRow = (id) => {
  return {
    type: DELETE_EDITABLE_ROW,
    payload: id,
  };
};

export const undoEditing = (id, row) => {
  return {
    type: UNDO_EDIT,
    payload: { id, row },
  };
};

export const deleteRowFromList = (id) => {
  return {
    type: DELETE_FROM_LIST,
    payload: id,
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
