import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import service from "./service";
import cart from "./cart";
import order from "./order";
export default combineReducers({
  auth,
  profile,
  service,
  cart,
  order,
});
