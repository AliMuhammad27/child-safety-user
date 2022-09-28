import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "../../util/api";
import { Link } from "react-router-dom";
import {
  signUp,
  login,
  logOut,
  forgetPassword,
  verifyCode,
  verifyAndReset,
} from "../../redux/action/auth";
import Toasty from "../../util/toast";
import { closeModals } from "../../util/closeModal";
const Header = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const userInfo = useSelector((state) => state?.auth?.user);
  const useremail = useSelector((state) => state.auth?.email);
  const usercode = useSelector((state) => state.auth?.code);
  const [password1, setpassword1] = useState("");
  const [confirm_password1, setconfirmpassword1] = useState("");
  const [code, setCode] = useState("");
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState();
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirmpassowrd] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
  };
  console.log("assasas", isAuthenticated);
  console.log("userInfo", userInfo);
  return (
    <div>
      {!isAuthenticated ? (
        <>
          <section className="mainMenu">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-xl-block d-none">
                  <nav className="navbar navbar-expand-xl navbar-light">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav mx-auto align-items-center justify-content-between">
                        <li className="nav-item">
                          <div className="navFeature">
                            <div className="nav-link">
                              <form action>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                  />
                                  <button className="btnSearch">
                                    <i className="fas fa-search" />
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item h-50p">
                          <Link
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item h-50p">
                          <Link className="nav-link" to="/productsandpackages">
                            Products &amp; Packages
                          </Link>
                        </li>
                        <li className="nav-item h-50p d-xl-flex d-none">
                          {/* <a class="nav-link" href="#">LogoOooOooOoOoooOooo</a> */}
                          <Link to="/">
                            <img
                              src="img/logo-h.png"
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </li>
                        <li className="nav-item h-50p">
                          <Link className="nav-link" to="/membership">
                            Membership
                          </Link>
                        </li>
                        <li className="nav-item h-50p">
                          <Link className="nav-link" href="#">
                            Blogs
                          </Link>
                        </li>
                        <li className="nav-item h-50p">
                          <div className="navFeature">
                            <Link
                              className="nav-link"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#loginFirst"
                            >
                              Register Now
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="responsive d-xl-none d-block responsive-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex align-items-center">
                    <div className>
                      <i
                        className="fas fa-bars fc-white"
                        onclick="openNavMenu()"
                      />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="inputSearch-responsive form-control"
                          placeholder="Search"
                        />
                        <button className="btn btn-search">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ms-3">
                      <div className="userProfileNav" onclick="openNav()">
                        <img
                          src="img/assets/user.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="mySidenav" className="sidenav">
                    <a
                      href="javascript:void(0)"
                      className="closebtn"
                      onclick="closeNav()"
                    >
                      ×
                    </a>
                    <a href="#">
                      <i className="fas fa-user me-2 fc-lblue" /> Sign In
                    </a>
                    <a href="#">
                      <i className="fas fa-user me-2 fc-lblue" /> Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="mySidenavMenu" className="sidenav">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onclick="closeNavMenu()"
            >
              ×
            </a>
            <a href="#">Home</a>
            <a href="#">Products &amp; Packages</a>
            <a href="#">Membership</a>
            <a href="#">Blogs</a>
          </div>

          <div>
            <div
              className="modal fade"
              id="loginFirst"
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
                    <img
                      src="img/assets/modal-lock.png"
                      alt=""
                      className="img-fluid"
                    />
                    <h5 className="mt-3">Please Login First</h5>
                    <button
                      className="btn btn-primary mt-3"
                      data-bs-target="#signUp"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Login First
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="signUp"
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
                    <h2 className="mt-3 fw-600">Sign up</h2>
                    <p className="fw-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod
                    </p>
                    <form action>
                      <div className="row">
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Name"
                              value={firstName}
                              onChange={(e) => {
                                setfirstname(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Last Name"
                              value={lastName}
                              onChange={(e) => {
                                setlastname(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Email Address"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="tel"
                              value={phone}
                              onChange={(e) => {
                                setphone(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        {/* <div class="col-lg-6">
                  <input id="phone" name="phone" class="form-control" type="tel">
                  <button type="submit">Submit</button>
              </div> */}
                        <div className="col-lg-6 my-2">
                          <div className="position-relative">
                            <input
                              type={passwordShown ? "text" : "password"}
                              className="form-control pe-5"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                            />
                            <button
                              className="btn btn-transparent btn-eye"
                              type="button"
                              onClick={togglePassword}
                            >
                              <i
                                className={
                                  passwordShown
                                    ? "fas fa-eye"
                                    : "fas fa-eye-slash"
                                }
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-6 my-2">
                          <div className="position-relative">
                            <input
                              type={passwordShown1 ? "text" : "password"}
                              className="form-control pe-5"
                              placeholder="Enter Password"
                              value={confirm_password}
                              onChange={(e) => {
                                setconfirmpassowrd(e.target.value);
                              }}
                            />
                            <button
                              className="btn btn-transparent btn-eye"
                              type="button"
                              onClick={togglePassword1}
                            >
                              <i
                                className={
                                  passwordShown
                                    ? "fas fa-eye"
                                    : "fas fa-eye-slash"
                                }
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={(e) => {
                        {
                          firstName.length > 0 &&
                          lastName.length > 0 &&
                          email.length > 0 &&
                          phone.length > 0 &&
                          password.length > 0 &&
                          confirm_password.length > 0
                            ? dispatch(
                                signUp(
                                  firstName,
                                  lastName,
                                  email,
                                  phone,
                                  password,
                                  confirm_password
                                )
                              )
                            : Toasty(
                                "Error",
                                "Please Fill All the required fields"
                              );
                          closeModals();
                        }
                      }}
                    >
                      Sign Up
                    </button>
                    <div className="text-center mt-3">
                      <p>
                        Already have an account?{" "}
                        <a
                          href="#signIn"
                          data-bs-toggle="modal"
                          data-bs-target="#signIn"
                          data-bs-dismiss="modal"
                          className="fc-lblue fw-600"
                        >
                          {" "}
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="modal fade defaultForm"
              id="signIn"
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
                    <h2 className="mt-3 fw-600">Sign in</h2>
                    <p className="fw-600">
                      Please Enter Your Email and Password to Sign Inn
                    </p>
                    <form action>
                      <div className="row justify-content-center">
                        <div className="col-lg-8 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              value={email}
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 my-2">
                          <div className="position-relative">
                            <input
                              type={passwordShown1 ? "text" : "password"}
                              className="form-control"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                            />
                            <button
                              className="btn btn-transparent btn-eye"
                              type="button"
                              onClick={togglePassword1}
                            >
                              <i
                                className={
                                  passwordShown
                                    ? "fas fa-eye"
                                    : "fas fa-eye-slash"
                                }
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="text-end mb-3">
                            <a
                              href="#"
                              data-bs-dismiss="modal"
                              data-bs-toggle="modal"
                              data-bs-target="#forgotPassword"
                              className="fc-lblue fw-600"
                            >
                              <u>Forgot Password?</u>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                    <button
                      className="btn btn-primary mt-3 px-5"
                      onClick={(e) => {
                        email.length > 0 && password.length > 0
                          ? dispatch(login(email, password, history))
                          : Toasty(
                              "Error",
                              "Please Fill All The Required Fields"
                            );
                        closeModals();
                      }}
                    >
                      Sign in
                    </button>
                    <div className="text-center mt-3">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#signUp"
                        className="fc-lblue fw-600"
                      >
                        Sign Up Instead{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- MODAL 5 FORGOT PASSWORD */}
            <div
              className="modal fade defaultForm"
              id="forgotPassword"
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
                    <h2 className="mt-3 fw-600">Forgot Password</h2>
                    <p className="fw-600">
                      Kindly enter your email address to change the password.
                    </p>
                    <form action>
                      <div className="row justify-content-center">
                        <div className="col-lg-8 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Email Address"
                              value={email}
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <button
                      className="btn btn-primary mt-3 px-5"
                      data-bs-target="#forgotPassword2"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                      onClick={(e) => {
                        email.length > 0
                          ? dispatch(forgetPassword(email))
                          : Toasty("Fill All The Req Fields");
                      }}
                    >
                      Continue
                    </button>
                    <div className="text-center mt-3">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#signIn"
                        className="fc-lblue fw-600"
                      >
                        Back To Login{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL 6 FORGOT PASSWORD 2 */}
            <div
              className="modal fade defaultForm"
              id="forgotPassword2"
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
                    <h2 className="mt-3 fw-600">Forgot Password</h2>
                    <p className="fw-600">
                      Kindly enter your verification code
                    </p>
                    <form action>
                      <div className="row justify-content-center">
                        <div className="col-lg-8 my-2">
                          <div className>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Verification Code"
                              value={code}
                              onChange={(e) => {
                                setCode(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 text-end mb-3">
                          <button
                            className="btn btn-primary mt-3 px-5"
                            data-bs-target="#forgotPassword2"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                            onClick={(e) => {
                              dispatch(forgetPassword(useremail));
                            }}
                          >
                            <u> Resend Code </u>
                          </button>
                        </div>
                      </div>
                    </form>
                    <button
                      className="btn btn-primary mt-3 px-5"
                      data-bs-target="#forgotPassword3"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                      onClick={(e) => {
                        code.length > 0
                          ? dispatch(verifyCode(code))
                          : Toasty("Please Fill The Req Field");
                      }}
                    >
                      Continue
                    </button>
                    <div className="text-center mt-3">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#signIn"
                        className="fc-lblue fw-600"
                      >
                        Back To Login{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL 5 SIGN IN */}
            <div
              className="modal fade defaultForm"
              id="forgotPassword3"
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
                    <h2 className="mt-3 fw-600">Forgot Password</h2>
                    <p className="fw-600">
                      Kindly enter your verification code
                    </p>
                    <form action>
                      <div className="row justify-content-center">
                        <div className="col-lg-8 my-2">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Password"
                              value={password1}
                              onChange={(e) => {
                                setpassword1(e.target.value);
                              }}
                            />
                            <button className="btn btn-transparent btn-eye">
                              <i className="fas fa-eye" />
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-8 my-2">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Confirm Password"
                              value={confirm_password1}
                              onChange={(e) => {
                                setconfirmpassword1(e.target.value);
                              }}
                            />
                            <button className="btn btn-transparent btn-eye">
                              <i className="fas fa-eye" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <button
                      className="btn btn-primary mt-3 px-5"
                      data-bs-target="#"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                      onClick={(e) => {
                        dispatch(
                          verifyAndReset(
                            usercode,
                            useremail,
                            password1,
                            confirm_password1
                          )
                        );
                      }}
                    >
                      Continue
                    </button>
                    <div className="text-center mt-3">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#signIn"
                        className="fc-lblue fw-600"
                      >
                        Back To Login{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <section className="mainMenu d-xl-block d-none">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <nav className="navbar navbar-expand-xl navbar-light mainNav">
                      {/* <a class="navbar-brand" href="#">Navbar</a> */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                      >
                        <ul className="navbar-nav mx-auto align-items-center justify-content-between">
                          <li className="nav-item">
                            <div className="navFeature">
                              <div className="nav-link">
                                <form action>
                                  <div className="position-relative">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search"
                                    />
                                    <button className="btnSearch">
                                      <i className="fas fa-search" />
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item h-50p">
                            <Link
                              className="nav-link active"
                              aria-current="page"
                              to="/"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="nav-item h-50p">
                            <Link
                              className="nav-link"
                              to="/productsandpackages"
                            >
                              Products &amp; Packages
                            </Link>
                          </li>
                          <li className="nav-item h-50p d-xl-flex d-none">
                            {/* <a class="nav-link" href="#">LogoOooOooOoOoooOooo</a> */}
                            <Link to="/">
                              <img
                                src="img/logo-h.png"
                                alt=""
                                className="img-fluid"
                              />
                            </Link>
                          </li>
                          <li className="nav-item h-50p">
                            <Link className="nav-link" to="/membership">
                              Membership
                            </Link>
                          </li>
                          <li className="nav-item h-50p">
                            <a className="nav-link" href="#">
                              Blogs
                            </a>
                          </li>
                          <div className="navFeature headerUser">
                            <li className="nav-item dropdown userDropdown">
                              <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <img
                                      src={`${imageUrl}${userInfo?.userImage}`}
                                      alt=""
                                      className="img-fluid headrUsrThumb"
                                    />
                                  </div>
                                  <div className="flex-grow-1 ms-2 fc-white">
                                    {userInfo?.firstName}
                                  </div>
                                </div>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                              >
                                <li>
                                  <Link className="dropdown-item" to="/profile">
                                    <i className="fas fa-user me-2 fc-lblue" />{" "}
                                    Profile
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item border-top border-bottom"
                                    to="/wishlist"
                                  >
                                    <i className="fas fa-heart me-2 fc-lblue" />
                                    Wishlist
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    onClick={(e) => {
                                      dispatch(logOut());
                                    }}
                                  >
                                    <i className="fas fa-sign-out-alt me-2 fc-lblue" />{" "}
                                    Logout
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown notification">
                              <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/icons/bell.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="notifications.php"
                                  >
                                    <div className="d-flex">
                                      <div className>
                                        <i className="fas fa-bell fc-lblue" />
                                      </div>
                                      <div className="ms-2">
                                        <p>
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Eligendi
                                          unde vel, maxime error perferendis
                                          aliquid ipsa
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-end">
                                      <p className="fc-lblue"> 4 hours ago</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="notifications.php"
                                  >
                                    <div className="d-flex">
                                      <div className>
                                        <i className="fas fa-bell fc-lblue" />
                                      </div>
                                      <div className="ms-2">
                                        <p>
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Eligendi
                                          unde vel, maxime error perferendis
                                          aliquid ipsa
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-end">
                                      <p className="fc-lblue"> 4 hours ago</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="notifications.php"
                                  >
                                    <div className="d-flex">
                                      <div className>
                                        <i className="fas fa-bell fc-lblue" />
                                      </div>
                                      <div className="ms-2">
                                        <p>
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Eligendi
                                          unde vel, maxime error perferendis
                                          aliquid ipsa
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-end">
                                      <p className="fc-lblue"> 4 hours ago</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="notifications.php"
                                  >
                                    View All
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown messages">
                              <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/icons/chat.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <div className="d-flex">
                                      <div className>
                                        <i className="fas fa-comment fc-lblue" />
                                      </div>
                                      <div className="ms-2">
                                        <p>
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Eligendi
                                          unde vel, maxime error perferendis
                                          aliquid ipsa
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-end">
                                      <p className="fc-lblue"> 4 hours ago</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <div className="d-flex">
                                      <div className>
                                        <i className="fas fa-comment fc-lblue" />
                                      </div>
                                      <div className="ms-2">
                                        <p>
                                          Lorem ipsum, dolor sit amet
                                          consectetur adipisicing elit. Eligendi
                                          unde vel, maxime error perferendis
                                          aliquid ipsa
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-end">
                                      <p className="fc-lblue"> 4 hours ago</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    View All
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item dropdown cart">
                              <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="img/icons/cart.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <div className="d-flex">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="img/assets/cardThumb.png"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div className="ms-2 flex-grow-1">
                                        <p>Product 01</p>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <p className="fc-lblue"> Qty:1</p>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
            <section className="responsive d-xl-none d-block responsive-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex align-items-center">
                      <div className>
                        <i
                          className="fas fa-bars fc-white"
                          onclick="openNavMenu()"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <div className="position-relative">
                          <input
                            type="text"
                            className="inputSearch-responsive form-control"
                            placeholder="Search"
                          />
                          <button className="btn btn-search">
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-3">
                        {/* <span style="font-size:30px;cursor:pointer">&#9776; open</span> */}
                        <div className="userProfileNav" onclick="openNav()">
                          <img
                            src="img/assets/ellipse.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="mySidenav" className="sidenav">
                      <a
                        href="javascript:void(0)"
                        className="closebtn"
                        onclick="closeNav()"
                      >
                        ×
                      </a>
                      <a href="#">
                        <i className="fas fa-user me-2 fc-lblue" /> Profile
                      </a>
                      <a href="#">
                        <i className="fas fa-heart me-2 fc-lblue" /> Wishlist
                      </a>
                      <a href="#">
                        <i className="fas fa-sign-out-alt me-2 fc-lblue" />{" "}
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div id="mySidenavMenu" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onclick="closeNavMenu()"
              >
                ×
              </a>
              <a href="#">Home</a>
              <a href="#">Products &amp; Packages</a>
              <a href="#">Membership</a>
              <a href="#">Blogs</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
