import React, { useEffect, useState } from "react";
import { baseURL, imageUrl } from "../../util/api";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
const ProductDetails = ({ match, history }) => {
  const [productdetails, setproductdetails] = useState(null);
  const [images, setimages] = useState("");
  const userToken = useSelector((state) => state?.auth?.token);
  const handleProductDetails = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getProductDetails/${match.params.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("Ressss", res);
      setproductdetails(res?.data?.product);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const addToCartHandler = async (productId, qty) => {
    history.push(`/MyCart/${productId}?qty=${qty}`);
  };

  useEffect(() => {
    handleProductDetails();
  }, [match.params.id]);

  useEffect(() => {
    if (productdetails) {
      setimages(productdetails?.productImage);
    }
  }, [productdetails]);
  console.log("ProductDetails", productdetails);
  console.log("Images", images);
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row justify-content-center singleProduct">
          <div className="col-lg-4 my-3">
            <div className="slider-for">
              <ImageSlider images={images} />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 my-3">
            <div className="row">
              <div className="col-lg-9 my-3">
                <h2>{productdetails?.productName}</h2>
              </div>
              <div className="col-lg-3 text-lg-end my-3">
                <h2 className="fw-600 fc-lblue">${productdetails?.price}</h2>
              </div>
              <div className="col-lg-12 mb-2">
                <p className="fw-600 mb-0">Size</p>
                <label className="containerRadio2">
                  <input type="radio" name="radio" />
                  <div className="checkmark">S</div>
                </label>
                <label className="containerRadio2">
                  <input type="radio" name="radio" />
                  <div className="checkmark">M</div>
                </label>
                <label className="containerRadio2">
                  <input type="radio" name="radio" />
                  <div className="checkmark">L</div>
                </label>
              </div>
              <div className="col-lg-12 mt-4">
                <p className="fw-600">In Stock</p>
                <div className="col-lg-9 my-3">
                  <h2>{productdetails?.instock}</h2>
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      How To Use
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <p>{productdetails?.description}</p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <p>{productdetails?.usage}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <Link
                  className="btn btn-primary my-2 w-sm-100"
                  onClick={(e) => {
                    addToCartHandler(productdetails?._id, 1);
                  }}
                >
                  Add To Cart
                </Link>
                <Link
                  className="btn btn-blueBorder my-2 w-sm-100"
                  style={{ marginLeft: "12px" }}
                >
                  Add to Favorite
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 my-5">
            <div className="owl-carousel owl-theme product-review">
              <div className="item">
                <div className="card-review2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="reviewUserImg">
                            <img
                              src="img/assets/ellipse.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <p className="fw-600">Mark Carson</p>
                        </div>
                      </div>
                    </div>
                    <div className>
                      <p className="fc-gray">5Hrs Ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Aenean Euismod Bibendum Laoreet. Proin
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="card-review2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="reviewUserImg">
                            <img
                              src="img/assets/ellipse.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <p className="fw-600">Mark Carson</p>
                        </div>
                      </div>
                    </div>
                    <div className>
                      <p className="fc-gray">5Hrs Ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Aenean Euismod Bibendum Laoreet. Proin
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="card-review2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="reviewUserImg">
                            <img
                              src="img/assets/ellipse.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <p className="fw-600">Mark Carson</p>
                        </div>
                      </div>
                    </div>
                    <div className>
                      <p className="fc-gray">5Hrs Ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Aenean Euismod Bibendum Laoreet. Proin
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="card-review2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="reviewUserImg">
                            <img
                              src="img/assets/ellipse.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <p className="fw-600">Mark Carson</p>
                        </div>
                      </div>
                    </div>
                    <div className>
                      <p className="fc-gray">5Hrs Ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Aenean Euismod Bibendum Laoreet. Proin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
