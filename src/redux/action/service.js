import api from "../../util/api";
import {
  GET_SERVICES,
  GET_SERVICES_ERROR,
  GET_SERVICE_DETAIL,
  GET_SERVICE_DETAIL_ERROR,
  SERVICE_REQUEST,
  SERVICE_REQUEST_ERROR,
} from "../action/actionTypes";
import customModal from "../../components/modals/customModal";
export const getAllServices =
  (searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/service/logs?searchString=${searchString}&status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_SERVICES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SERVICES_ERROR,
      });
    }
  };
export const getServiceDetails = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/service/serviceDetails/${id}`);
    console.log("Res", res);
    dispatch({
      type: GET_SERVICE_DETAIL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SERVICE_DETAIL_ERROR,
    });
  }
};

export const makeServiceRequest = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(
      `/serviceRequest/createServiceRequest`,
      formData
    );
    console.log("Ress", res);
    dispatch({
      type: SERVICE_REQUEST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SERVICE_REQUEST_ERROR,
    });
  }
};
