import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import service from "./service";
export default combineReducers({
  auth,
  profile,
  service,
});
