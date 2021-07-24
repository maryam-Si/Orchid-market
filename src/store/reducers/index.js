import { combineReducers } from "redux";

import loadingReducer from "./LoadingReducer";
import productReducer from "./productReducer";
import { orderReducer } from "./orderReducer";

const RootReducer = combineReducers({
  isLoading: loadingReducer,
  allProducts: productReducer,
  allOrders: orderReducer,
});

export default RootReducer;
