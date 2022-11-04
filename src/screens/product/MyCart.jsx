import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../../redux/action/cart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../util/api";
import Toasty from "../../util/toast";
const MyCart = ({ match, location, history }) => {
  const productId = match?.params?.id;

  const qty = location?.search ? Number(location?.search?.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart);
  const { cartItems } = cart;
  console.log("cartItems", cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const subQuantity = async (prod, qty) => {
    console.log("cart?.product", prod, qty);
    qty == 0 || qty <= 0
      ? dispatch(addToCart(prod, Number(qty + 0)))
      : dispatch(addToCart(prod, Number(qty - 1)));
  };

  const removeFromCartHandler = (id) => {
    console.log("removeFromCartHandler", removeFromCartHandler);
    dispatch(removeFromCart(id));
  };

  const checkCartQty = () => {
    let arr = [];
    cartItems?.length > 0 &&
      cartItems?.map((cart) => {
        cart?.qty > 0 ? arr.push(0) : arr.push(1);
      });
    console.log("arr", arr);
    if (arr?.includes(1)) {
      Toasty("error", `Quantity of all items must be greater than 0`);
    } else {
      history?.push("/Checkout");
    }
  };
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 my-3">
            <div className="card-outline p-3">
              <div className="d-lg-flex justify-content-between border-bottom">
                <div className>{/* <h5 className="fw-600">Cart</h5> */}</div>
                <div className>
                  <button className="btn btn-trans2">
                    <img
                      src="img/icons/cart2.png"
                      alt=""
                      className="img-fluid"
                    />{" "}
                    Update Card
                  </button>
                </div>
              </div>
              <div className="table-responsive tableCart">
                <div className="col-12 my-4">
                  {cartItems?.length > 0 ? (
                    <h2>My Cart</h2>
                  ) : (
                    <h2>
                      Your Cart is Empty <Link to="/products">Go Back</Link>
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
              <div className="my-2">
                <Link to="/products" className="default">
                  {" "}
                  <u> Continue Shopping</u>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className="card-white py-3">
              <h4 className="mx-3">Summary</h4>
              <div className="d-flex justify-content-between px-3">
                <div className>
                  <p className="fc-gray">Sub Total</p>
                </div>
                <div className>
                  <p className="fw-600">
                    ${" "}
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
                    ${" "}
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
                  onClick={() => {
                    checkCartQty();
                  }}
                  className="btn btn-primary2 w-100"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
