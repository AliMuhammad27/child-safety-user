import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
} from "../action/actionTypes";
const initialState = {
  loading: false,
  success: null,
  order: null,
  error: null,
};
const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export default orderReducer;
