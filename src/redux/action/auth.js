import api from "../../util/api";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGUP_FAILED,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  VERIFY_CODE,
  VERIFY_CODE_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
} from "../action/actionTypes";
import { setAuthToken } from "../../util/setAuthToken";
import customModal from "../../components/modals/customModal";
//loading user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await api.get(`/auth/getUserProfile`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
//login user
export const login = (email, password, history) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post(`/auth/userLogin`, body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    customModal(res?.data?.message);
    history.push("/");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
    });
    Error(err);
  }
};

//SignUp user
export const signUp =
  (firstName, lastName, email, phone, password, confirm_password) =>
  async (dispatch) => {
    const body = {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirm_password,
    };
    try {
      const res = await api.post(`/auth/registerUser`, body);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      customModal(res?.data?.message);
    } catch (err) {
      dispatch({
        type: SIGUP_FAILED,
      });
      Error(err);
    }
  };

//forget Password
export const forgetPassword = (email) => async (dispatch) => {
  const body = { email };
  try {
    const res = await api.post(`/auth//userRecoverPassword`, body);
    console.log("Ress", res.data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: email,
    });
    customModal("Recovery code sent to your registered email", "Recovery code");
  } catch (err) {
    dispatch({
      type: FORGET_PASSWORD_ERROR,
    });
  }
};

//verify code
export const verifyCode = (code) => async (dispatch) => {
  const body = { code };
  try {
    const res = await api.post(`/auth/userVerifyRecoverCode`, body);
    console.log("Ress", res.data);
    dispatch({
      type: VERIFY_CODE,
      payload: code,
    });
    customModal("Recovery code Accepted", "Accepted");
  } catch (err) {
    dispatch({
      type: VERIFY_CODE_ERROR,
    });
  }
};

//final reset
export const verifyAndReset =
  (code, email, password, confirm_password) => async (dispatch) => {
    const body = { code, email, password, confirm_password };
    try {
      const res = await api.post(`/auth/userResetPassword`, body);
      console.log("Ress", res);
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data,
      });
      customModal("Password Reset Successfully", "Reset");
    } catch (err) {
      dispatch({
        type: RESET_PASSWORD_ERROR,
      });
    }
  };

//logout user
export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  customModal("LoggedOut Successfully", "Success");
};
