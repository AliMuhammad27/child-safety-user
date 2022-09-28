import React from "react";

const Wishlist = () => {
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-3 text-center">
            <h2>My Whishlist</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 my-2">
            <a href="#_">
              <div className="cardProduct">
                <div className="cardImg position-relative">
                  <button className="iconWhishlist">
                    <i className="fa fa-heart" />
                  </button>
                  <img src="img/products/1.png" alt="" className="img-fluid" />
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
                  <button
                    type="button"
                    className="btn btn-cart position-relative mt-2"
                  >
                    <span className>
                      <svg
                        className="svg-inline--fa fa-shopping-cart fa-w-18"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                        />
                      </svg>
                      {/* <i class="fas fa-shopping-cart"></i> Font Awesome fontawesome.com */}{" "}
                      Add To Cart
                    </span>
                  </button>
                </div>
                {/* CARD DESC END */}
              </div>
            </a>
          </div>
          <div className="col-lg-3 my-2">
            <a href="#_">
              <div className="cardProduct">
                <div className="cardImg position-relative">
                  <button className="iconWhishlist">
                    <i className="fa fa-heart" />
                  </button>
                  <img src="img/products/1.png" alt="" className="img-fluid" />
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
                  <button
                    type="button"
                    className="btn btn-cart position-relative mt-2"
                  >
                    <span className>
                      <svg
                        className="svg-inline--fa fa-shopping-cart fa-w-18"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                        />
                      </svg>
                      {/* <i class="fas fa-shopping-cart"></i> Font Awesome fontawesome.com */}{" "}
                      Add To Cart
                    </span>
                  </button>
                </div>
                {/* CARD DESC END */}
              </div>
            </a>
          </div>
          <div className="col-lg-3 my-2">
            <a href="#_">
              <div className="cardProduct">
                <div className="cardImg position-relative">
                  <button className="iconWhishlist">
                    <i className="fa fa-heart" />
                  </button>
                  <img src="img/products/1.png" alt="" className="img-fluid" />
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
                  <button
                    type="button"
                    className="btn btn-cart position-relative mt-2"
                  >
                    <span className>
                      <svg
                        className="svg-inline--fa fa-shopping-cart fa-w-18"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                        />
                      </svg>
                      {/* <i class="fas fa-shopping-cart"></i> Font Awesome fontawesome.com */}{" "}
                      Add To Cart
                    </span>
                  </button>
                </div>
                {/* CARD DESC END */}
              </div>
            </a>
          </div>
          <div className="col-lg-3 my-2">
            <a href="#_">
              <div className="cardProduct">
                <div className="cardImg position-relative">
                  <button className="iconWhishlist">
                    <i className="fa fa-heart" />
                  </button>
                  <img src="img/products/1.png" alt="" className="img-fluid" />
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
                  <button
                    type="button"
                    className="btn btn-cart position-relative mt-2"
                  >
                    <span className>
                      <svg
                        className="svg-inline--fa fa-shopping-cart fa-w-18"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-cart"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                        />
                      </svg>
                      {/* <i class="fas fa-shopping-cart"></i> Font Awesome fontawesome.com */}{" "}
                      Add To Cart
                    </span>
                  </button>
                </div>
                {/* CARD DESC END */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
