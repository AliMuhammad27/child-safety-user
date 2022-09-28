import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row pt-5 pb-3 align-items-center borderBtm mb-4">
          <div className="col-lg-6 offset-lg-3 text-lg-start text-center mb-lg-2 my-2">
            <img src="img/logo.png" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-between">
              <div className>
                <a href="#">
                  <img src="img/icons/f1.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className>
                <a href="#">
                  <img src="img/icons/f2.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className>
                <a href="#">
                  <img src="img/icons/f3.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className>
                <a href="#">
                  <img src="img/icons/f4.png" alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="cardContact p-4">
              <h5 className="fw-600 mb-4">Newsletter</h5>
              <form action>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="my-3">
                  <a href="#" className="btn btn-primary2 w-100">
                    Submit
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 my-2">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <div className="iconRounded">
                  <i className="fas fa-phone-alt" />
                </div>
              </div>
              <div className="flex-grow-1 ms-2">
                <p className="fw-600 mb-0">02030 063061</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <div className="iconRounded">
                  <i className="fas fa-at" />
                </div>
              </div>
              <div className="flex-grow-1 ms-2">
                <p className="fw-600 mb-0">info@ngtgroupllc.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="flex-shrink-0">
                <div className="iconRounded">
                  <i className="fas fa-location-arrow" />
                </div>
              </div>
              <div className="flex-grow-1 ms-2">
                <p className="fw-600 mb-0">
                  1825 Grassland Pkwy, Suite B Alpharetta, GA 30004
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 my-2">
            <h5 className="fw-600 mb-4">Quicklinks</h5>
            <ul className="ps-0">
              <li>
                <a href="#">Tips &amp; Tricks</a>
              </li>
              <li>
                <a href="#">Who we Are</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
              <li>
                <a href="#">Enroll</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 my-2">
            <h5 className="fw-600 mb-4">Legal</h5>
            <ul className="ps-0">
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center py-3">
            <p className="fw-600 mb-0">
              © 2022 Child Safety Squad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
