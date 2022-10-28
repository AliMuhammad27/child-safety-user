import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeServiceRequest } from "../../redux/action/service";
import Toasty from "../../util/toast";
const ServiceBooking = ({ match, history }) => {
  const dispatch = useDispatch();
  const [formData, setformdata] = useState({
    service: match.params.id,
    firstName: "",
    lastName: "",
    description: "",
    data: "",
    time: "",
  });
  const { firstName, lastName, description, data, time } = formData;
  const onChange = (e) =>
    setformdata({ ...formData, [e.target.name]: e.target.value });
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 my-3 text-center">
            <h2>BOOKING FORM</h2>
          </div>
          {/* <div className="col-lg-12 text-end">
            <a
              href="#_"
              className="fc-lblue fw-600"
              data-bs-toggle="modal"
              data-bs-target="#changePassword"
            >
              Change Password
            </a>
          </div> */}
          <div className="col-lg-8">
            <form action>
              <div className="row">
                <div className="col-lg-6 my-2">
                  <div className="form-group">
                    <label htmlFor>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => onChange(e)}
                      className="form-control defaultField pe-5"
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 my-2">
                  <div className="form-group">
                    <label htmlFor>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => onChange(e)}
                      className="form-control defaultField pe-5"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 my-2">
                <div className="form-group">
                  <label htmlFor>Date</label>
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <input
                        type="date"
                        name="data"
                        value={data}
                        onChange={(e) => onChange(e)}
                        className="form-control defaultField"
                      />
                    </div>
                    <div className="col-lg-6 my-2">
                      <input
                        type="time"
                        name="time"
                        value={time}
                        onChange={(e) => onChange(e)}
                        className="form-control defaultField"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 my-2">
                <div className="form-group">
                  <label htmlFor>Description</label>
                  <textarea
                    name
                    id
                    cols={30}
                    name="description"
                    value={description}
                    onChange={(e) => onChange(e)}
                    rows={4}
                    className="form-control textarea-cstm"
                    placeholder="Enter Description"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="my-4 text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5"
                  onClick={(e) => {
                    console.log("FormData", formData);
                    e.preventDefault();
                    firstName.length > 0 &&
                    lastName.length > 0 &&
                    data.length > 0 &&
                    time.length > 0 &&
                    description.length > 0
                      ? dispatch(makeServiceRequest(formData, history))
                      : Toasty("Error", "Please Fill All The Fields");
                  }}
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBooking;
