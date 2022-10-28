import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import api, { baseURL, imageUrl } from "../../util/api";
import { Link } from "react-router-dom";
const Products = () => {
  const userToken = useSelector((state) => state?.auth?.token);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState("");
  const [searchString, setsearchString] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [category, setcategory] = useState("");
  const [allcategories, setallcategories] = useState("");
  const [productlogs, setproductlogs] = useState([]);
  const getAllCategories = async () => {
    try {
      const res = await api.get("/category/getAllCats");
      console.log(res);
      setallcategories(res?.data?.category);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const getProducts = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/logs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status,
          category,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("Resss", res);
      setproductlogs(res?.data?.product);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [category]);

  console.log("categories", allcategories);
  console.log("SingleCategory", category);
  console.log("products", productlogs);
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 my-2">
            <h2 className="mb-0">EXPLORE RIGHT HERE</h2>
          </div>
          <div className="col-lg-6 ">
            <div className="d-lg-flex justify-content-end align-items-center">
              <div className>
                <ul
                  className="nav nav-pills mb-3 productTabs"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item mt-3" role="presentation">
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
                      Recommended
                    </button>
                  </li>
                  <li className="nav-item mt-3" role="presentation">
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
                      Latest
                    </button>
                  </li>
                  <li className="nav-item mt-3" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Most Reviewed
                    </button>
                  </li>
                </ul>
              </div>
              <div className="text-lg-start text-end">
                <a href="#" className="fw-600 fc-lblue">
                  See All Category
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 my-3">
            <div className="card-white p-4">
              <h5>Filter By</h5>
              <h5 className="fw-600 mt-3">Category</h5>
              <div className="row">
                {allcategories?.length > 0 &&
                  allcategories?.map((allcat) => (
                    <div className="col-xl-6 my-1">
                      <label className="container-check">
                        {allcat?.categoryName}
                        <input
                          type="checkbox"
                          onClick={(e) => {
                            console.log("Clicked on Checkbox");
                            setcategory(allcat._id);
                          }}
                        />
                        <span className="checkmark2" />
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}
              >
                <div className="row">
                  {productlogs &&
                  Object.keys(productlogs).length > 0 &&
                  productlogs.docs.length > 0
                    ? productlogs.docs.map((item, index) => (
                        <div className="col-lg-4 my-3">
                          <div className="cardProduct">
                            <div className="cardImg">
                              <img
                                src={`${imageUrl}${item?.productImage[0]}`}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="cardDesc">
                              <div className="pt-3 ps-3 pe-3">
                                <p className="fw-600 mb-0">
                                  {item?.productName}
                                </p>
                                <p className="fc-gray">@Brandslearning</p>
                                <div className="d-flex justify-content-between">
                                  <div className>
                                    <span className="badgeInStock">
                                      {item?.instock ? (
                                        <>In Stock</>
                                      ) : (
                                        <>out of Stock</>
                                      )}
                                    </span>
                                  </div>
                                  <div className>
                                    <h4 className="fw-600 fc-lblue">
                                      ${item?.price}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <Link
                                to={`/product-details/${item?._id}`}
                                className="btn btn-cart position-relative mt-2"
                              >
                                <span className>
                                  <i className="fas fa-shopping-cart" /> Shop
                                  Now
                                </span>
                              </Link>
                            </div>
                            {/* CARD DESC END */}
                          </div>
                          {/* CARD PRODUCT END */}
                        </div>
                      ))
                    : ""}
                </div>
                {/* MAIN ROW END */}
              </div>
              {/*TAB 1 END */}
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                <div className="row">
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/1.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/2.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/3.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/4.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/5.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex={0}
              >
                <div className="row">
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/1.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                  <div className="col-lg-4 my-3">
                    <div className="cardProduct">
                      <div className="cardImg">
                        <img
                          src="img/products/2.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <div className="pt-3 ps-3 pe-3">
                          <p className="fw-600 mb-0">Shirts And Pants</p>
                          <p className="fc-gray">@Brandslearning</p>
                          <div className="d-flex justify-content-between">
                            <div className>
                              <span className="badgeInStock">In Stock</span>
                            </div>
                            <div className>
                              <h4 className="fw-600 fc-lblue">$56.65</h4>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn btn-cart position-relative mt-2"
                        >
                          <span className>
                            <i className="fas fa-shopping-cart" /> Add To Cart
                          </span>
                        </a>
                      </div>
                      {/* CARD DESC END */}
                    </div>
                    {/* CARD PRODUCT END */}
                  </div>
                  {/* COL-LG-4 END */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
