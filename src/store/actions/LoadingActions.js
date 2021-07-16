import { ActionTypes } from "../constants/action-types";
const { SET_LOADING } = ActionTypes;

export const setLoading = (state) => ({
  type: SET_LOADING,
  payload: state,
});
