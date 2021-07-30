import { ActionTypes } from "../constants/action-types";
const { ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_CART } =
  ActionTypes;

export const addproductToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const incrementCart = (id) => ({
  type: INCREMENT_CART,
  payload: id,
});

export const decrementCart = (id) => ({
  type: DECREMENT_CART,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_CART,
  payload: id,
});
