import { combineReducers } from "redux";

import loadingReducer from "./LoadingReducer";
import productReducer from "./productReducer";
import { orderReducer } from "./orderReducer";
import cartReducer from "./cartReducer";

const RootReducer = combineReducers({
  isLoading: loadingReducer,
  allProducts: productReducer,
  allOrders: orderReducer,
  cart: cartReducer,
});

export default RootReducer;
