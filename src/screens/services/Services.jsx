import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllServices } from "../../redux/action/service";
import { imageUrl } from "../../util/api";
const Services = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Fetching Services");
    dispatch(getAllServices(searchString, status, from, to, page, perPage));
  }, [searchString, status, from, to, sort, page, perPage]);
  const services = useSelector((state) => state.service?.services?.service);
  // const isLoading = useSelector((state) => state?.auth?.isLoading);
  console.log("Fetched Services", services);

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
                href="#"
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
          {services?.docs?.map((item, index) => (
            <div className="row my-2 align-items-center">
              <div className="col-lg-6 my-4">
                <img
                  src={`${imageUrl}${item.serviceImage}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 my-4" style={{}}>
                <h3>{item?.serviceName}</h3>
                <p>{item?.about}</p>
                <Link
                  to={`/service-details/${item._id}`}
                  className="btn btn-primary mt-3"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
