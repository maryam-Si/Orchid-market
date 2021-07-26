import { ActionTypes } from "../constants/action-types";
const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  ADD_PRODUCT,
  ADD_EDITABLE_ROW,
  CHANGE_TO_INPUT,
  CHANGE_VALUE,
  CHANGE_TO_TEXT,
  DELETE_EDITABLE_ROW,
  UNDO_EDIT,
  DELETE_FROM_LIST,
  EMPTY_LIST,
} = ActionTypes;

const initialState = {
  products: [],
  product: {},
  editableRows: {},
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
    case ADD_EDITABLE_ROW:
      return {
        ...state,
        editableRows: { ...state.editableRows, [payload.id]: payload.row },
      };
    case CHANGE_TO_INPUT:
      return {
        ...state,
        editableRows: {
          ...state.editableRows,
          [payload.id]: payload.updateRow,
        },
      };
    case CHANGE_VALUE:
      return {
        ...state,
        editableRows: {
          ...state.editableRows,
          [payload.id]: payload.changedRow,
        },
      };
    case CHANGE_TO_TEXT:
      return {
        ...state,
        editableRows: {
          ...state.editableRows,
          [payload.id]: payload.updateRow,
        },
      };
    case DELETE_EDITABLE_ROW:
      return {
        ...state,
        editableRows: {
          ...state.editableRows,
          [payload.id]: payload.updateRow,
        },
      };
    case UNDO_EDIT:
      return {
        ...state,
        editableRows: {
          ...state.editableRows,
          [payload.id]: payload.row,
        },
      };

    case DELETE_FROM_LIST:
      delete state.editableRows[payload];
      return state;
    case EMPTY_LIST:
      return {
        ...state,
        editableRows: payload,
      };
    default:
      return state;
  }
};
