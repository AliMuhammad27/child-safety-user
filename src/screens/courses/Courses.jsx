import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL, imageUrl } from "../../util/api";
import { Link } from "react-router-dom";
const Courses = () => {
  const userToken = useSelector((state) => state?.auth?.token);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [courses, setcourses] = useState([]);
  const handleAllCourses = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/course/Logs?status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("CourseResss", res);
      setcourses(res.data.course);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleAllCourses();
  }, []);
  console.log("Fetched Courses", courses);
  return (
    <div>
      <section className="innerMain2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="display-4 fw-600">Courses</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd.
              </p>
              <a href="#" className="btn btn-secondary">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-4">
              <div className="card-blue fc-white py-5 px-2">
                <div className="row">
                  <div className="col-lg-3 text-center">
                    <div className="iconImg">
                      <img
                        src="img/icons/rocket.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <p className="mb-0">Fast Learning Procedure</p>
                    <p>
                      <small>Lorem Ipsum Dolor Sit Amet, </small>
                    </p>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="iconImg">
                      <img
                        src="img/icons/creative-brain.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <p className="mb-0">Real Ideas</p>
                    <p>
                      <small>Lorem Ipsum Dolor Sit Amet, </small>
                    </p>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="iconImg">
                      <img
                        src="img/icons/teacher.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <p className="mb-0">Expert Teacher</p>
                    <p>
                      <small>Lorem Ipsum Dolor Sit Amet, </small>
                    </p>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="iconImg">
                      <img
                        src="img/icons/success.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <p className="mb-0">100% Success Resuly</p>
                    <p>
                      <small>Lorem Ipsum Dolor Sit Amet, </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 my-4">
              <h2 className="fw-600">All Courses</h2>
            </div>
            {courses &&
            Object.keys(courses).length > 0 &&
            courses.docs.length > 0
              ? courses.docs.map((item, index) => (
                  <div className="col-lg-3 my-3">
                    <div className="cardCourse">
                      <div className="cardImg">
                        <img
                          src={`${imageUrl}${item?.courseImage}`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="cardDesc">
                        <h5 className="mb-0">Mathematics</h5>
                        <p>@Brandslearning</p>
                        <div className="mt-3">
                          <div className="d-flex">
                            <div className="me-2">
                              <span className="badgeCourse">Maths</span>
                            </div>
                            <div className>
                              <h2 className="fc-blue">
                                {item?.amount}
                                {"$ "}
                                <span className="fs-16 fc-black">
                                  /per Class
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/* D-FLEX END */}
                        <div className=" my-2 text-center">
                          {item?.is_paid ? (
                            <Link
                              to={`/course-details/${item?._id}`}
                              className="btn btn-primary w-100"
                            >
                              My Course
                            </Link>
                          ) : (
                            <Link
                              to={`/course-details/${item?._id}`}
                              className="btn btn-primary w-100"
                            >
                              Register
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : "No Courses"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
