import React, { useState } from "react";
import { baseURL } from "../../util/api";
import { useSelector } from "react-redux";
import customModal from "../../components/modals/customModal";
import customModalError from "../../components/modals/customModalError";
import Toasty from "../../util/toast";
import moment from "moment";
import axios from "axios";
const CoursePayment = ({ match, history }) => {
  const userToken = useSelector((state) => state?.auth?.token);
  const [cardholder, setcardholder] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [cvv, setcvv] = useState("");
  const [cardexpiry, setcardexpiry] = useState("");
  console.log("Cardexpiry", cardexpiry);
  console.log("usertoken", userToken);
  const handlePayment = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/payments/coursePayment`,
        {
          course: `${match.params.id}`,
          payment_type: "Course Payment",
          card_expiry: cardexpiry,
          card_number: cardnumber,
          cvv,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("Ress", res);
      if (res) {
        customModal(res.data.message);
      }
      history.push("/courses");
    } catch (err) {
      console.log("Error", err.message);
      customModalError("Payment Has Already Been Done");
    }
  };
  console.log("Dates", moment("2022-10-19T14:55:03.910Z").format("ll"));
  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 my-3 text-center">
            <h2>PAYMENT</h2>
          </div>
          <div className="col-lg-6">
            <form action>
              <div className="col-lg-12 my-4">
                <div className="form-group">
                  <label htmlFor>Card Holder Name</label>
                  <input
                    type="text"
                    value={cardholder}
                    onChange={(e) => {
                      setcardholder(e.target.value);
                    }}
                    className="form-control defaultField pe-5"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
              <div className="col-lg-12 my-4">
                <div className="form-group">
                  <label htmlFor>Card Number</label>
                  <input
                    type="text"
                    value={cardnumber}
                    onChange={(e) => {
                      setcardnumber(e.target.value);
                    }}
                    className="form-control defaultField pe-5"
                    placeholder="Enter Card Number"
                  />
                </div>
              </div>
              <div className="col-lg-12 my-4">
                <div className="form-group">
                  <label htmlFor>CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => {
                      setcvv(e.target.value);
                    }}
                    className="form-control defaultField pe-5"
                    placeholder="Enter CVV"
                  />
                </div>
              </div>
              <div className="col-lg-12 my-4">
                <div className="form-group">
                  <label htmlFor>Expiry Date</label>
                  <input
                    type="date"
                    value={cardexpiry}
                    onChange={(e) => {
                      setcardexpiry(e.target.value);
                    }}
                    className="form-control defaultField pe-5"
                    placeholder="Enter Expiry Date"
                  />
                </div>
              </div>
              <div className="my-4 text-center">
                <button
                  className="btn btn-primary px-5"
                  onClick={(e) => {
                    e.preventDefault();
                    {
                      cardnumber.length > 0 &&
                      cvv.length > 0 &&
                      cardexpiry.length > 0 &&
                      cardholder.length > 0
                        ? handlePayment()
                        : Toasty(
                            "Error",
                            "Please fill all the required fields"
                          );
                    }
                  }}
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePayment;
