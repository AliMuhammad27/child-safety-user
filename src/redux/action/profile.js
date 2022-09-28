import api from "../../util/api";
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
} from "./actionTypes";
import { loadUser } from "./auth";
import customModal from "../../components/modals/customModal";
export const updateProfile = (formData) => async (dispatch) => {
  try {
    const res = await api.post(`/auth/editUserProfile`, formData);
    console.log("Res", res.data);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(loadUser());
    customModal(res?.data?.msg);
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const updatePassword =
  (existingpassword, newpassword, confirm_password) => async (dispatch) => {
    const body = { existingpassword, newpassword, confirm_password };
    try {
      const res = await api.post(`auth/UserverifyAndResetPassword`, body);
      console.log("Res", res.data);
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      });
      customModal(res?.data?.message);
    } catch (err) {
      dispatch({
        type: UPDATE_PASSWORD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
