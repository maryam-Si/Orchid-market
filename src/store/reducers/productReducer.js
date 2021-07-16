import { ActionTypes } from "../constants/action-types";
const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  ADD_PRODUCT,
  EDITED_PRODUCT,
} = ActionTypes;

const initialState = {
  products: [],
  product: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    case SELECTED_PRODUCT:
      return { ...state, product: payload };
    case REMOVE_SELECTED_PRODUCT:
      return { ...state, product: {} };

    default:
      return state;
  }
};
