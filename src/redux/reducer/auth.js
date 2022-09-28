import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGUP_FAILED,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  FORGET_PASSWORD,
  VERIFY_CODE,
  RESET_PASSWORD,
} from "../action/actionTypes";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  email: null,
  code: null,
  reset: null,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        email: payload,
        isLoading: false,
      };
    case VERIFY_CODE:
      return {
        ...state,
        code: payload,
        isLoading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        reset: payload,
        isLoading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: payload,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGUP_FAILED:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
