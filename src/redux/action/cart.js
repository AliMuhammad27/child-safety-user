import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../action/actionTypes";
import { baseURL } from "../../util/api";
export const addToCart = (id, qty, baseprice) => async (dispatch, getState) => {
  console.log("addToCartid", id, qty, baseprice);
  const { data } = await axios.get(
    `${baseURL}/product/getProductDetails/${id}`
  );
  console.log("cartdata", data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data?.product._id,
      name: data?.product.productName,
      image: data?.product.productImage,
      price: Number(data?.product?.price),
      countInStock: data?.product.instock,
      qty: Number(qty),
    },
  });
  console.log("getState().cart.cartItems", getState()?.cart?.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart?.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
