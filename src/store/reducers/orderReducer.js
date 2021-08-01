import { ActionTypes } from "../constants/action-types";
const { SET_ORDERS, SELECTED_ORDER, ADD_ORDER, MAKE_NEW_ORDER } = ActionTypes;
const initialState = {
  orders: [],
  selectedOrder: {},
  newOrder: {},
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDERS:
      return { ...state, orders: payload };
    case SELECTED_ORDER:
      return { ...state, selectedOrder: payload };
    case MAKE_NEW_ORDER:
      return { ...state, newOrder: payload };
    case ADD_ORDER:
      return { ...state, orders: [...state.orders, payload] };

    default:
      return state;
  }
};
