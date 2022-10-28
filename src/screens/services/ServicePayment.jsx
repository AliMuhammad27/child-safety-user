import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import customModal from "../../components/modals/customModal";
import { baseURL } from "../../util/api";
import { getServiceDetails } from "../../redux/action/service";
const ServicePayment = ({ match }) => {
  const serviceInfo = useSelector((state) => state?.service?.service?.service);
  console.log("serviceInfo", serviceInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Getting Service Details");
    dispatch(getServiceDetails(match.params.id));
  }, [match.params.id]);
  console.log("AmountinNumb", serviceInfo?.amount);
  async function handleToken(token) {
    console.log("handleToken");
    const config = {
      header: {
        Authorization:
          "sk_test_51LsRmiIvVhhyMdWPzKYcwcRfPbESQxY3Nz63kYCSgUxFPEekvwN1r5qe2ZHT931d8tsa1BDxJrSwucdkfDJSzR6W00QksO0mTJ",
      },
    };
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product: serviceInfo?.amount },
      config
    );
    console.log("response", response);
    const { status } = response.data;
    console.log("Statusss", status);
    if (status == "succeeded") {
      customModal("Payment Done Successfully");
    }
    console.log(
      "res",
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    );
  }

  return (
    <section className="py-5 mt-150 bg-blueGradient">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 my-3 text-center">
            <h2>PAYMENT</h2>
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
          <div className="col-lg-6">
            <form action>
              <div className="col-lg-12 my-4">
                <div className="form-group">
                  <label htmlFor>Card Holder Name</label>
                  <input
                    type="text"
                    className="form-control defaultField pe-5"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
              <div className="my-4 text-center">
                <StripeCheckout
                  stripeKey="pk_test_51LsRmiIvVhhyMdWPrAuZF2rentyoO7OLfQ0kFMR4yTqmveOdkfnPPuCCOcReBLYAC2y3UBix32wD9BneMFau0HlY00CMzxRe5d"
                  token={handleToken}
                  amount={serviceInfo.amount * 100}
                  onClick={(e) => {
                    e.preventDefault();
                    customModal("Payment Paid Successfully");
                  }}
                  name=""
                >
                  <button
                    type="submit"
                    className="btn btn-primary px-5"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Pay
                  </button>
                </StripeCheckout>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePayment;
