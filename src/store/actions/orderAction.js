import { ActionTypes } from "../constants/action-types";
const { SET_ORDERS, SELECTED_ORDER } = ActionTypes;

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
