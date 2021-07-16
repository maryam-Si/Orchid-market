import { ActionTypes } from "../constants/action-types";

const initialState = false;

const { SET_LOADING } = ActionTypes;
function loadingReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}
export default loadingReducer;
