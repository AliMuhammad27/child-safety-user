import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSelector from "../../components/ImageSelector";
import { updateProfile, updatePassword } from "../../redux/action/profile";
import Toasty from "../../util/toast";
import { Link } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state?.auth?.user);
  console.log("Userr", userInfo);
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [image, setImage] = useState("");
  const [phone, setphone] = useState("");
  const [is_edit, setisedit] = useState(true);
  const [newpassword, setnewpassword] = useState("");
  const [confirm_password, setconfirmpassword] = useState("");
  const [existingpassword, setexistingpassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("phone", phone);
  formData.append("reciepts", image);

  useEffect(() => {
    if (userInfo) {
      setfirstname(userInfo?.firstName);
      setlastname(userInfo?.lastName);
      setphone(userInfo?.phone);
      setImage(userInfo?.userImage);
    }
  }, [userInfo]);

  return (
    <div>
      <section className="py-5 mt-150 bg-blueGradient">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 my-3 text-center">
              <h2>PROFILE</h2>
            </div>
            <div className="col-lg-12 text-end">
              <a
                href="#_"
                className="fc-lblue fw-600"
                data-bs-toggle="modal"
                data-bs-target="#changePassword"
              >
                Change Password
              </a>
            </div>
            <div className="col-lg-5 text-center">
              <div className="profileImg mx-auto position-relative my-3">
                <ImageSelector
                  image={image}
                  setImage={setImage}
                  is_edit={is_edit}
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control defaultField pe-5"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control defaultField pe-5"
                  placeholder="Enter Last  Name"
                  value={lastName}
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control defaultField pe-5"
                  placeholder="Tel"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                />
              </div>
              <div className="my-3">
                <Link
                  className="btn btn-primary px-5"
                  onClick={(e) => {
                    firstName.length > 0 && lastName.length > 0 && image
                      ? dispatch(updateProfile(formData))
                      : Toasty("Error", "please fill all the required fields");
                  }}
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MODAL PENDING */}
      <div
        className="modal fade"
        id="changePassword"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
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
              <h2>CHANGE PASSWORD</h2>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="my-3 position-relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control defaultField pe-5"
                      placeholder="Current Password"
                      value={existingpassword}
                      onChange={(e) => {
                        setexistingpassword(e.target.value);
                      }}
                    />
                    <button className="btn btn-eye" onClick={togglePassword}>
                      <i className="fa fa-eye-slash" />
                    </button>
                  </div>
                  <div className="my-3 position-relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control defaultField pe-5"
                      placeholder="New Password"
                      value={newpassword}
                      onChange={(e) => {
                        setnewpassword(e.target.value);
                      }}
                    />
                    <button className="btn btn-eye" onClick={togglePassword}>
                      <i className="fa fa-eye-slash" />
                    </button>
                  </div>
                  <div className="my-3 position-relative">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control defaultField pe-5"
                      placeholder="Confirm Password"
                      value={confirm_password}
                      onChange={(e) => {
                        setconfirmpassword(e.target.value);
                      }}
                    />
                    <button className="btn btn-eye" onClick={togglePassword}>
                      <i className="fa fa-eye-slash" />
                    </button>
                  </div>
                  <div className="my-3">
                    <Link
                      className="btn btn-primary"
                      onClick={(e) => {
                        confirm_password.length > 0 &&
                        newpassword.length > 0 &&
                        confirm_password.length > 0
                          ? dispatch(
                              updatePassword(
                                existingpassword,
                                newpassword,
                                confirm_password
                              )
                            )
                          : Toasty(
                              "Error",
                              "please fill all the required fields"
                            );
                      }}
                    >
                      Update Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
