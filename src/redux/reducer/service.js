import {
  GET_SERVICES,
  GET_SERVICES_ERROR,
  GET_SERVICE_DETAIL,
  GET_SERVICE_DETAIL_ERROR,
  SERVICE_REQUEST,
  SERVICE_REQUEST_ERROR,
} from "../action/actionTypes";

const initialState = {
  services: null,
  service: null,
  serviceRequest: null,
  serviceBooked: null,
  isLoading: true,
};

const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SERVICES:
      return {
        ...state,
        services: payload,
        isLoading: false,
      };
    case GET_SERVICE_DETAIL:
      return {
        ...state,
        service: payload,
        isLoading: false,
      };
    case SERVICE_REQUEST:
      return {
        ...state,
        serviceRequest: payload,
        isLoading: false,
      };
    case GET_SERVICES_ERROR:
    case GET_SERVICE_DETAIL_ERROR:
    case SERVICE_REQUEST_ERROR:
      return {
        ...state,
        services: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default serviceReducer;
