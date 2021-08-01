import { ActionTypes } from "../constants/action-types";
const { SET_ORDERS, SELECTED_ORDER, ADD_ORDER, MAKE_NEW_ORDER } = ActionTypes;

export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    payload: orders,
  };
};

export const setAOrder = (order) => {
  return {
    type: SELECTED_ORDER,
    payload: order,
  };
};

export const makeNewOrder = (order) => {
  return {
    type: MAKE_NEW_ORDER,
    payload: order,
  };
};

export const addAorder = (order) => {
  return {
    type: ADD_ORDER,
    payload: order,
  };
};
