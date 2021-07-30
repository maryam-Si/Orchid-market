import { ActionTypes } from "../constants/action-types";
import { loadState } from "../../utils/shopingCartInStorage";
const persistedState = loadState("shoppingCart") || [];
const { ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_CART } =
  ActionTypes;

const initialState = {
  shoppingCart: persistedState,
};

export default (state = initialState, { type, payload }) => {
  const cartItems = [...state.shoppingCart];
  switch (type) {
    case ADD_TO_CART:
      const isExistItem = cartItems.find((item) => item.id === payload.id);
      if (isExistItem) {
        let index = state.shoppingCart.findIndex((r) => r.id === payload.id);
        let changedItem = { ...cartItems[index] };
        changedItem.number = changedItem.number + payload.number;
        cartItems[index] = changedItem;
        return { ...state, shoppingCart: cartItems };
      } else {
        return { ...state, shoppingCart: [...state.shoppingCart, payload] };
      }

    case REMOVE_CART:
      const filterList = cartItems.filter((a) => a.id !== payload);
      return { ...state, shoppingCart: filterList };

    case DECREMENT_CART:
      cartItems.map((a) => {
        if (a.id === payload.id) {
          if (a.count > 1) {
            a.count--;
          }
        }
        return a;
      });

      return { ...state, shoppingCart: cartItems };

    case INCREMENT_CART:
      cartItems.map((a) => {
        if (a.id === payload.id) {
          a.count++;
        }
        return a;
      });

      return { ...state, shoppingCart: cartItems };

    default:
      return state;
  }
};
