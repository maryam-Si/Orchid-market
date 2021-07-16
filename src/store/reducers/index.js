import { combineReducers } from "redux";

import loadingReducer from "./LoadingReducer";
import productReducer from "./productReducer";

const RootReducer = combineReducers({
  isLoading: loadingReducer,
  allProducts: productReducer,
});

export default RootReducer;
