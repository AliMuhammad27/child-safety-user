import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../../redux/action/cart";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../util/api";
const MyCart = ({ match, location }) => {
  const productId = match?.params?.id;

  const qty = location?.search ? Number(location?.search?.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state?.cart);
  //   const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    console.log("removeFromCartHandler", removeFromCartHandler);
    dispatch(removeFromCart(id));
  };
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 my-3">
            <div className="card-outline p-3">
              <div className="d-lg-flex justify-content-between border-bottom">
                <div className>
                  <h5 className="fw-600">Cart</h5>
                </div>
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
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className>
                            <div className="productThumbnail position-relative">
                              <img
                                src="img/assets/productThumb.png"
                                alt=""
                                className
                              />
                              <button className="btnCross">
                                <i className="fas fa-times" />
                              </button>
                            </div>
                          </div>
                          <div className="ms-3">
                            <p className="fw-600 mb-0">Shoes Reival</p>
                            <p className="mb-1">Category A</p>
                            <p className="mb-1">Size : Medium</p>
                            <p className="mb-1 d-flex align-items-center">
                              Color : <span className="productColor ms-2" />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <form>
                          <div
                            className="value-button"
                            id="decrease"
                            onclick="decreaseValue()"
                            value="Decrease Value"
                          >
                            -
                          </div>
                          <input type="number" id="number" defaultValue={0} />
                          <div
                            className="value-button"
                            id="increase"
                            onclick="increaseValue()"
                            value="Increase Value"
                          >
                            +
                          </div>
                        </form>
                      </td>
                      <td>
                        <h4 className="fc-lblue">$31</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className>
                            <div className="productThumbnail position-relative">
                              <img
                                src="img/assets/productThumb.png"
                                alt=""
                                className
                              />
                              <button className="btnCross">
                                <i className="fas fa-times" />
                              </button>
                            </div>
                          </div>
                          <div className="ms-3">
                            <p className="fw-600 mb-0">Shoes Reival</p>
                            <p className="mb-1">Category A</p>
                            <p className="mb-1">Size : Medium</p>
                            <p className="mb-1 d-flex align-items-center">
                              Color : <span className="productColor ms-2" />
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <form>
                          <div
                            className="value-button"
                            id="decrease"
                            onclick="decreaseValue()"
                            value="Decrease Value"
                          >
                            -
                          </div>
                          <input type="number" id="number" defaultValue={0} />
                          <div
                            className="value-button"
                            id="increase"
                            onclick="increaseValue()"
                            value="Increase Value"
                          >
                            +
                          </div>
                        </form>
                      </td>
                      <td>
                        <h4 className="fc-lblue">$31</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-2">
                <a href="index.php" className="default">
                  {" "}
                  <u> Continue Shopping</u>
                </a>
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
                  <p className="fw-600">$20</p>
                </div>
              </div>
              <div className="d-flex justify-content-between px-3">
                <div className>
                  <p className="fc-gray">Shipping Fee</p>
                </div>
                <div className>
                  <p className="fw-600">$20</p>
                </div>
              </div>
              <div className="d-flex justify-content-between border-bottom px-3">
                <div className>
                  <p className="fc-gray">Discount</p>
                </div>
                <div className>
                  <p className="fw-600">$20</p>
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className>
                  <p className="fc-gray fw-600">Total</p>
                </div>
                <div className>
                  <p className="fw-600">$20</p>
                </div>
              </div>
              <div className="px-3 mb-3">
                <a href="#" className="btn btn-primary2 w-100">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
