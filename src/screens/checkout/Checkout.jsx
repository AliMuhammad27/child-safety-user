import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { imageUrl } from "../../util/api";
import Toasty from "../../util/toast";
import {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
} from "../../redux/action/cart";
import { createOrder } from "../../redux/action/order";
import { Link } from "react-router-dom";
const Checkout = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems, paymentMethod } = cart;
  console.log("shippingAddress", shippingAddress);
  console.log("PaymentMethod", paymentMethod);
  const userToken = useSelector((state) => state?.auth?.token);
  const userInfo = useSelector((state) => state?.auth?.user);
  console.log("cartItems", cartItems);
  console.log("userInfo", userInfo);
  const removeFromCartHandler = (id) => {
    console.log("removeFromCartHandler", removeFromCartHandler);
    dispatch(removeFromCart(id));
    history.push("/products");
  };

  const subQuantity = async (prod, qty) => {
    console.log("cart?.product", prod, qty);
    qty == 0 || qty <= 0
      ? dispatch(addToCart(prod, Number(qty + 0)))
      : dispatch(addToCart(prod, Number(qty - 1)));
  };

  const [allValues, setAllValues] = useState({
    email: shippingAddress?.email,
    phone: shippingAddress?.phone,
    lastname: shippingAddress?.lastname,
    firstname: shippingAddress?.firstname,

    billingname: shippingAddress?.billingname,
    billingaddress: shippingAddress?.billingaddress,
    billingcity: shippingAddress?.billingcity,
    billingzipcode: shippingAddress?.billingzipcode,
    billingcountry: shippingAddress?.billingcountry,
    billingstate: shippingAddress?.billingstate,
    shippingname: shippingAddress?.shippingname,
    shippingaddress: shippingAddress?.shippingaddress,
    shippingcity: shippingAddress?.shippingcity,
    shippingzipcode: shippingAddress?.shippingzipcode,
    shippingcountry: shippingAddress?.shippingcountry,
    shippingstate: shippingAddress?.shippingstate,

    paymentmethod: paymentMethod?.paymentmethod,
    cardholdername: paymentMethod?.cardholdername,
    cardnumber: paymentMethod?.cardnumber,
    cvvnumber: paymentMethod?.cvvnumber,
    expirydate: paymentMethod?.expirydate,
  });
  const [togglecheckout, settogglecheckout] = useState(0);
  console.log("AllValues", allValues);
  console.log("togglecheckout", togglecheckout);

  // const togglecheckoutHandler = async () => {
  //   console.log("togglecheckoutHandler");
  //   settogglecheckout(togglecheckout + 1);
  // };

  const changeHandler = (e, namee) => {
    setAllValues({
      ...allValues,
      [namee ? namee : e.target.name]: namee ? e : e.target.value,
    });
  };

  const savePaymentMethodHandler = (e) => {
    console.log("savePaymentMethodHandler");
    settogglecheckout(togglecheckout + 1);
    dispatch(
      savePaymentMethod({
        paymentmethod: allValues?.paymentmethod
          ? allValues?.paymentmethod
          : "Visa",
        cardholdername: allValues?.cardholdername,
        cardnumber: allValues?.cardnumber,
        cvvnumber: allValues?.cvvnumber,
        expirydate: allValues?.expirydate,
      })
    );
  };

  const saveShippingAddressHandler = (e) => {
    console.log("saveshippingAddressHandler");
    settogglecheckout(togglecheckout + 1);
    dispatch(
      saveShippingAddress({
        email: allValues?.email,
        phone: allValues?.phone,
        firstname: allValues?.firstname,
        lastname: allValues?.lastname,
        billingname: allValues?.billingname,
        billingaddress: allValues?.billingaddress,
        billingcity: allValues?.billingcity,
        billingzipcode: allValues?.billingzipcode,
        billingcountry: allValues?.billingcountry,
        billingstate: allValues?.billingstate,
        shippingname: allValues?.shippingname,
        shippingaddress: allValues?.shippingaddress,
        shippingcity: allValues?.shippingcity,
        shippingzipcode: allValues?.shippingzipcode,
        shippingcountry: allValues?.shippingcountry,
        shippingstate: allValues?.shippingstate,
      })
    );
  };

  console.log(
    "Itemsprice",
    (cart.itemsPrice = cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    ))
  );
  cart.totalPrice = Number(cart?.itemsPrice);
  console.log("TotalPrice", cart.totalPrice);

  const placeOrderHandler = async () => {
    cart.cartItems = cart?.cartItems?.filter(
      (cartt) => cartt?.qty !== 0 && cart
    );
    try {
      console.log("cart.cartItems", cart?.cartItems);

      dispatch(
        createOrder({
          userid: userInfo?._id,
          orderItems: cart?.cartItems,
          shippingAddress: cart?.shippingAddress,
          paymentMethod: paymentMethod,
          itemsPrice: cart?.itemsPrice,
          totalPrice: cart?.totalPrice,
        })
      );
    } catch (error) {
      Toasty("error", `Order not created`);
    }
  };

  return (
    <div>
      <section className="py-5 mt-150 bg-blueGradient">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 my-3">
              <div className="card-outline p-3">
                {togglecheckout == 0 && (
                  <>
                    <div className="border-bottom">
                      <h4 className="fw-600">Delivery Information</h4>
                    </div>
                    <form action className="defaultForm">
                      <div className="row">
                        <div className="col-lg-12 my-2">
                          <h5 className="fw-600 mb-0">Contact Information</h5>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              placeholder="Enter First Name"
                              value={allValues?.firstname}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Last Name"
                              name="lastname"
                              value={allValues?.lastname}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email Address"
                              value={allValues?.email}
                              name="email"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Tel"
                              value={allValues?.phone}
                              name="phone"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 my-2">
                          <h5 className="fw-600 mb-0">Billing Address</h5>
                        </div>
                        <div className="col-lg-12 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Street Address"
                              value={allValues?.billingaddress}
                              name="billingaddress"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Country"
                              name="billingcountry"
                              value={allValues?.billingcountry}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter City"
                              name="billingcity"
                              value={allValues?.billingcity}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter State"
                              name="billingstate"
                              value={allValues?.billingstate}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter Zip Code"
                              name="billingzipcode"
                              value={allValues?.billingzipcode}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        {/* checkbox */}
                        <div className="col-lg-12 my-2">
                          <h5 className="fw-600 mb-0">Shipping Address</h5>
                        </div>
                        <div className="col-lg-12 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Street Address"
                              value={allValues?.shippingaddress}
                              name="shippingaddress"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Country"
                              name="shippingcountry"
                              value={allValues?.shippingcountry}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter City"
                              name="shippingcity"
                              value={allValues?.shippingcity}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter State"
                              name="shippingstate"
                              value={allValues?.shippingstate}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter Zip Code"
                              value={allValues?.shippingzipcode}
                              name="shippingzipcode"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </>
                )}
                {togglecheckout == 1 && (
                  <>
                    <div className="border-bottom">
                      <h4 className="fw-600">Payment Information</h4>
                    </div>
                    <form action className="defaultForm">
                      <div className="row">
                        <div className="col-lg-12 my-2">
                          <h5 className="fw-600 mb-0">Contact Information</h5>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Card Holder Name"
                              value={allValues?.cardholdername}
                              name="cardholdername"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Card Number"
                              name="cardnumber"
                              value={allValues?.cardnumber}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Mm/YY"
                              name="expirydate"
                              value={allValues?.expirydate}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="CVV"
                              name="cvvnumber"
                              value={allValues?.cvvnumber}
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </>
                )}
                {togglecheckout == 2 && (
                  <>
                    <div className="table-responsive tableCart">
                      <div className="col-12 my-4">
                        {cartItems?.length > 0 ? (
                          <h2>My Cart</h2>
                        ) : (
                          <h2>
                            Your Cart is Empty{" "}
                            <Link to="/products">Go Back</Link>
                          </h2>
                        )}
                      </div>
                      <table className="table">
                        <tbody>
                          {cartItems.map((item, index) => (
                            <tr>
                              <td>
                                <div className="d-flex">
                                  <div className>
                                    <div className="productThumbnail position-relative">
                                      <img
                                        src={`${imageUrl}${item?.image}`}
                                        alt=""
                                        className
                                      />
                                      <button
                                        className="btnCross"
                                        onClick={(e) => {
                                          removeFromCartHandler(item?.product);
                                        }}
                                      >
                                        <i className="fas fa-times" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="ms-3">
                                    <p className="fw-600 mb-0">{item?.name}</p>
                                    <p className="mb-1">
                                      Category {item?.category?.categoryName}
                                    </p>
                                    <p className="mb-1">Size : Medium</p>
                                    <p className="mb-1 d-flex align-items-center">
                                      Color : <span className="" />
                                      {item?.attribute?.attributeType}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <form>
                                  <button
                                    className="value-button"
                                    id="decrease"
                                    value={item?.qty}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log("Clickecd on minus");
                                      subQuantity(item?.product, item?.qty);
                                    }}
                                    value="Decrease Value"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    id="number"
                                    value={item?.qty}
                                    onChange={(e) => {
                                      dispatch(
                                        addToCart(
                                          item?.product,
                                          Number(e.target.value)
                                        )
                                      );
                                    }}
                                  />
                                  <button
                                    className="value-button"
                                    id="increase"
                                    value={item?.qty}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log("Clickecd on plus");
                                      dispatch(
                                        addToCart(
                                          item?.product,
                                          Number(item?.qty + 1)
                                        )
                                      );
                                    }}
                                    value="Increase Value"
                                  >
                                    +
                                  </button>
                                </form>
                              </td>
                              <td>
                                <h4 className="fc-lblue">${item?.price}</h4>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-white py-3">
                {cartItems?.length > 0 &&
                  cartItems.map((item, index) => (
                    <div className="d-flex m-3">
                      <div className>
                        <div className="productThumbnail position-relative">
                          <img
                            src={`${imageUrl}${item?.image[0]}`}
                            alt=""
                            className
                          />
                          <button
                            className="btnCross"
                            onClick={(e) => {
                              removeFromCartHandler(item?.product);
                            }}
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="ms-3">
                        <p className="fw-600 mb-0">{item?.name}</p>
                        <h1 className="fw-600 fc-lblue">${item?.price}</h1>
                      </div>
                    </div>
                  ))}
                <h4 className="mx-3">Summary</h4>
                <div className="d-flex justify-content-between px-3">
                  <div className>
                    <p className="fc-gray">Sub Total</p>
                  </div>
                  <div className>
                    <p className="fw-600">
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item?.qty * item?.price,
                        0
                      )}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-3">
                  <div className>
                    <p className="fc-gray">Shipping Fee</p>
                  </div>
                  <div className>
                    <p className="fw-600">$0</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between border-bottom px-3">
                  <div className>
                    <p className="fc-gray">Discount</p>
                  </div>
                  <div className>
                    <p className="fw-600">$0</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-3 mt-2">
                  <div className>
                    <p className="fc-gray fw-600">Total</p>
                  </div>
                  <div className>
                    <p className="fw-600">
                      $
                      {cartItems.reduce(
                        (acc, item) => acc + item?.qty * item?.price,
                        0
                      )}
                    </p>
                  </div>
                </div>
                <div className="px-3 mb-3">
                  <Link
                    to="#"
                    className="btn btn-primary2 w-100"
                    // data-bs-toggle="modal"
                    // data-bs-target="#confirmOrder"
                    onClick={() => {
                      togglecheckout == 0 &&
                      allValues?.email &&
                      allValues?.phone &&
                      allValues?.firstname &&
                      allValues?.lastname &&
                      allValues?.billingaddress &&
                      allValues?.billingcity &&
                      allValues?.billingzipcode &&
                      allValues?.billingcountry &&
                      allValues?.billingstate &&
                      allValues?.shippingaddress &&
                      allValues?.shippingcity &&
                      allValues?.shippingzipcode &&
                      allValues?.shippingcountry &&
                      allValues?.shippingstate
                        ? saveShippingAddressHandler()
                        : togglecheckout == 1 &&
                          allValues?.cardholdername &&
                          allValues?.cardnumber &&
                          allValues?.cvvnumber
                        ? savePaymentMethodHandler()
                        : togglecheckout == 2
                        ? placeOrderHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          );
                    }}
                  >
                    {togglecheckout == 2 ? <>Confirm Order</> : <>Continue</>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="confirmOrder"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content position-relative">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body text-center p-lg-5 p-3">
              <img src="img/assets/alert.png" alt="" className="img-fluid" />
              <h2 className="mt-3 mb-2">CONFIRM ORDER</h2>
              <p className="mt-3 fw-600">
                Are you sure you want to place order ?
              </p>
              <button
                className="btn btn-primary mt-3 px-5"
                data-bs-target="#orderPlaced"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
              <button className="btn btn-red mt-3 px-5" data-bs-dismiss="modal">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="orderPlaced"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content position-relative">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body text-center p-lg-5 p-3">
              <img src="img/assets/gift.png" alt="" className="img-fluid" />
              <h2 className="mt-3 mb-2">ORDER PLACED</h2>
              <p className="mt-3 fw-600">Order Placed Successfully</p>
              <button
                className="btn btn-primary mt-3 px-5"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
