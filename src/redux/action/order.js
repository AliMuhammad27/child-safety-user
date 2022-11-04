import api from "../../util/api";
import { CART_CLEAR_ITEMS } from "./actionTypes";
import Swal from "sweetalert2";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
} from "./actionTypes";
import { baseURL } from "../../util/api";
import Toasty from "../../util/toast";
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const { data } = await api.post(`${baseURL}/order/createOrder`, order);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    Swal.fire({
      icon: "success",
      title: "",
      text: "Order Created Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });
    localStorage.removeItem("cartItems");
  } catch (error) {
    Toasty("error", `Order not created`);
  }
};

export const payOrder =
  (orderId, paymentResultData, paymentResultDetails) => async (dispatch) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });

      const { data } = await api.post(
        `${baseURL}/order/${orderId}/pay`,
        paymentResultData,
        paymentResultDetails
      );
      console.log("payOrderdata", data);
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      });
      Swal.fire({
        icon: "success",
        title: "",
        text: "Order Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Toasty("error", `Order not Updated`);
    }
  };
