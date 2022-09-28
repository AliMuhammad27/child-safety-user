import { UPDATE_PROFILE, UPDATE_PROFILE_ERROR } from "../action/actionTypes";
const initialState = {
  updatePass: null,
  updateProfile: null,
  isLoading: true,
};
const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        updateProfile: payload,
        isLoading: false,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updatePass: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default profileReducer;
