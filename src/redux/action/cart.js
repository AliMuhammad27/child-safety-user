import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import { baseURL } from "../utils/api";

export const addToCart = (id, qty, baseprice) => async (dispatch, getState) => {
  console.log("addToCartid", id, qty, baseprice);
  const { data } = await axios.get(`${baseURL}/product/productDetails/${id}`);
  console.log("cartdata", data);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data?.product._id,
      name: data?.product.title,
      image: data?.product.productimage,
      price: Number(baseprice),
      countInStock: data?.product.countInStock,
      qty: Number(qty),
    },
  });
  console.log("getState().cart.cartItems", getState()?.cart?.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
