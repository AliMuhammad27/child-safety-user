import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import service from "./service";
import cart from "./cart";
export default combineReducers({
  auth,
  profile,
  service,
  cart,
});
