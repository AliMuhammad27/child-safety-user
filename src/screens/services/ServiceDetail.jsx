import React, { useEffect } from "react";
import { getServiceDetails } from "../../redux/action/service";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ServiceDetail = ({ match }) => {
  const serviceInfo = useSelector((state) => state?.service?.service?.service);
  console.log("serviceInfo", serviceInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Getting Service Details");
    dispatch(getServiceDetails(match.params.id));
  }, [match.params.id]);

  return (
    <div>
      <section className="innerMain2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="display-4 fw-600">Membership Program</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd.
              </p>
              <a
                href="#_"
                data-bs-toggle="modal"
                data-bs-target="#signUp"
                className="btn btn-secondary"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row my-4">
            <div className="col-lg-8 order-lg-1 order-2">
              <h3>
                <Link to="/services" className="fc-black">
                  <i className="fa fa-arrow-left" /> {serviceInfo?.serviceName}
                </Link>
              </h3>
            </div>
            <div className="col-lg-4 order-lg-2 order-1 text-lg-end text-left">
              <h1 className="fc-blue">$ {serviceInfo?.amount}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean
                Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet Lacus
                Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar
                Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
                Montes, Nascetur Ridiculus Mus. Nam Fermentum, Nulla Luctus
                Pharetra Vulputate, Felis Tellus Mollis Orci, Sed Rhoncus Sapien
                Nunc Eget Odio. Lorem Ipsum Dolor Sit Amet, Consectetur
                Adipiscing Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida
                Dolor Sit Amet Lacu
              </p>
            </div>
          </div>
          <div className="row justify-content-center slot my-4">
            <div className="col-lg-8 text-center">
              <h3>AVALABILITY</h3>
              <div className="row">
                {serviceInfo?.availability?.map((item, index) => (
                  <div className="col-lg-6 my-4">
                    <label className="containerRadio">
                      <input type="radio" name="radio" />
                      <div className="checkmark">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <i className="fas fa-check-circle" />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            {
                              weekday[
                                new Date(
                                  moment(item?.scheduleDate).format("ll")
                                ).getDay()
                              ]
                            }{" "}
                            {tConvert(item?.startTime)} -{" "}
                            {tConvert(item?.endTime)}
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              {/* ROW END */}
              <div className="row">
                <div className="col-lg-12 text-center my-5">
                  <Link
                    to={`/service-booking/${serviceInfo?._id}`}
                    className="btn btn-primary"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
