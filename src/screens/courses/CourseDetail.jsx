import React, { useState, useEffect } from "react";
import { baseURL, imageUrl } from "../../util/api";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
const CourseDetail = ({ match }) => {
  const [coursedetail, setcoursedetail] = useState(null);
  const userToken = useSelector((state) => state?.auth?.token);
  const handleCourseDetails = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/course/getCourseDetails/${match.params.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setcoursedetail(res.data.course);
    } catch (err) {
      console.log("Err", err);
    }
  };
  useEffect(() => {
    handleCourseDetails();
  }, [match.params.id]);

  console.log("Fetched Course Details", coursedetail);
  console.log("paid status", coursedetail?.is_paid);
  return (
    <div>
      <section className="innerMain2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="display-4 fw-600">Course Details</h1>
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
      <section className="mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-2">
              <img
                src={`${imageUrl}${coursedetail?.courseImage}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 my-2">
              <div className="d-lg-flex justify-content-between">
                <div className="mb-2">
                  <h2 className="mb-0">Mathematics</h2>
                  <p>@Brandslearning</p>
                </div>
                <div className="mb-2">
                  <h2 className="fc-blue">$ {coursedetail?.amount}</h2>
                </div>
              </div>
              <p>{coursedetail?.aboutCourse}</p>
              <a href="#)" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-12 my-4">
              <h2>About the Course</h2>
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
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 my-4">
              <h3>Component </h3>
              <p>{coursedetail?.content[0]?.contentDescription}</p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cardWhite p-3 my-2">
                    {coursedetail?.content[0]?.contentFiles.map(
                      (item, index) => (
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-2">
                            <div className="iconFolder">
                              <img
                                src="img/icons/folder.png"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <p className="mb-0">Class-{index}</p>
                            {coursedetail?.is_paid ? (
                              <a
                                href={`${baseURL}/../${item}`}
                                className="fc-gray"
                                download="file"
                              >
                                Download
                              </a>
                            ) : (
                              <>Course is not bought yet</>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ROW END */}
          {/* <div className="row">
            <div className="col-lg-12 my-4 text-center">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#payment2"
                className="btn btn-primary"
              >
                Register
              </a>
            </div>
          </div> */}

          <div className="row">
            <div className="col-lg-12 my-4 text-center">
              {coursedetail?.is_paid ? (
                <></>
              ) : (
                <Link
                  to={`/course-payment/${match.params.id}`}
                  className="btn btn-primary"
                >
                  Payment
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
