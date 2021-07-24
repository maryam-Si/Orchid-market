import { ActionTypes } from "../constants/action-types";
const { SET_ORDERS, SELECTED_ORDER } = ActionTypes;
const initialState = {
  orders: [],
  order: {},
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDERS:
      return { ...state, orders: payload };
    case SELECTED_ORDER:
      return { ...state, order: payload };
    default:
      return state;
  }
};
