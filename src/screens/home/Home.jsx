import React from "react";

const Home = () => {
  return (
    <div>
      <section id="mainBanner" className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 px-0">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="img/banner/main.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block text-start">
                      <div className="row">
                        <div className="col-lg-7">
                          <h1 className="display-4 fw-600">
                            Because Parents Don't <br />
                            Get Do Overs..
                          </h1>
                          <p>
                            Welcome! We are child safety squad. We believe that
                            to do your best, you must be prepared for Your Child
                          </p>
                          <a href="#" className="btn btn-secondary">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/banner/main.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block text-start">
                      <div className="row">
                        <div className="col-lg-7">
                          <h1 className="display-4 fw-600">
                            Because Parents Don't <br />
                            Get Do Overs..
                          </h1>
                          <p>
                            Welcome! We are child safety squad. We believe that
                            to do your best, you must be prepared for Your Child
                          </p>
                          <a href="#" className="btn btn-secondary">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/banner/main.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block text-start">
                      <div className="row">
                        <div className="col-lg-7">
                          <h1 className="display-4 fw-600">
                            Because Parents Don't <br />
                            Get Do Overs..
                          </h1>
                          <p>
                            Welcome! We are child safety squad. We believe that
                            to do your best, you must be prepared for Your Child
                          </p>
                          <a href="#" className="btn btn-secondary">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 sec2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-600">
                90% Of Critical Brain <br />
                Development Happens In <br />
                The First 5 Years Of Life
              </h3>
            </div>
            <div className="col-lg-6 d-lg-block d-none">
              <div className="d-lg-flex justify-content-center">
                <div className="m-1">
                  <img src="img/assets/a1.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="d-lg-flex justify-content-center">
                <div className="m-1">
                  <img src="img/assets/a2.png" alt="" className="img-fluid" />
                </div>
                <div className="m-1">
                  <img src="img/assets/a3.png" alt="" className="img-fluid" />
                </div>
                <div className="m-1">
                  <img src="img/assets/a4.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="d-lg-flex align-items-center">
                <div className>
                  <h1 className="display-1 fc-lblue">01</h1>
                </div>
                <div className="ms-lg-4">
                  <h4 className="fw-600 fc-purple">Child Safety Squad</h4>
                  <p>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The
                    Industry'slorem Ipsum Is Simply Dummy Text Of The Printing
                    And Typesetting Industry. Lorem Ipsum Has Been The
                    Industry'stypesetting Industry. Lorem Ipsum Has Been The
                    Industry'slorem Ipsum Is Simply Dummy Text Of The Printing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-lg-block d-none">
              <div className="d-lg-flex justify-content-center">
                <div className="m-1">
                  <img src="img/assets/a6.png" alt="" className="img-fluid" />
                </div>
                <div className="m-1">
                  <img src="img/assets/a7.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="d-lg-flex justify-content-center">
                <div className="m-1">
                  <img src="img/assets/a8.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 offset-lg-2">
              <h5 className="fw-600 highlight">On Demand</h5>
              <h3 className="fw-600">New Born Ready Courses</h3>
              <p>
                Engaged in education, especially in providing teaching services
                for students who do not have the opportunity to learn in
                conventional institutions
              </p>
              <a href="#" className="btn btn-primary">
                Enroll Now
              </a>
            </div>
            <div className="col-lg-7">
              <img src="img/assets/a9.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="img/assets/a10.png" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h5 className="fw-600 highlight">Get Started</h5>
              <h3 className="fw-600">Membership</h3>
              <p>
                When children are ar rick, tracking development and making sure
                they are reaching their milestones helps to ensure any problems
                are detected early so they can receive the intervention they
                need
              </p>
              <a href="#" className="btn btn-primary">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cardBanner ps-lg-5 pt-lg-5 pe-lg-5 p-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h5 className="fw-600 highlight2">Get Started</h5>
                    <h3 className="fw-600">Expert Planning Sessions</h3>
                    <p>
                      As Needed Personal Planning Sessions with a child
                      development specialists to help you navigate Challenging
                      Situations
                    </p>
                    <a href="#" className="btn btn-primary">
                      Sign Up Now
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="img/assets/a11.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSec py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 my-1 text-lg-start text-center">
              <h5>We'd Love To Help Your Child Grow</h5>
              <h3 className="fw-600">Have A Question?</h3>
              <div className="d-lg-flex align-items-center my-3 text-lg-start text-center">
                <div className="flex-shrink-0 my-2">
                  <img src="img/icons/1.png" alt="" className="img-fluid" />
                </div>
                <div className="ms-lg-2 my-2">
                  <h5 className="fw-600">02030 063061</h5>
                </div>
              </div>
              <div className="d-lg-flex align-items-center my-3 text-lg-start text-center">
                <div className="flex-shrink-0 my-2">
                  <img src="img/icons/2.png" alt="" className="img-fluid" />
                </div>
                <div className="ms-lg-2 my-2">
                  <h5 className="fw-600">info@ngtgroupllc.com</h5>
                </div>
              </div>
              <div className="d-lg-flex align-items-center my-3 text-lg-start text-center">
                <div className="flex-shrink-0 my-2">
                  <img src="img/icons/3.png" alt="" className="img-fluid" />
                </div>
                <div className="ms-lg-2 my-2">
                  <h5 className="fw-600">
                    1825 Grassland Pkwy, Suite B Alpharetta, GA 30004
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-1">
              <div className="cardContact p-4">
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Subject"
                    />
                  </div>
                  <div className="my-3">
                    <textarea
                      name
                      id
                      cols={30}
                      rows={4}
                      className="form-control"
                      placeholder="Enter Message"
                      defaultValue={""}
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
          </div>
        </div>
      </section>
      <section className>
        <div className="container">
          <div className="row testimonialBg ">
            <div className="col-lg-12 position-relative py-5">
              <div className="tl-1 d-lg-block d-none">
                <img src="img/assets/t1.png" alt="" className="img-fluid" />
              </div>
              <div className="tl-2 d-lg-block d-none">
                <img src="img/assets/t2.png" alt="" className="img-fluid" />
              </div>
              <div className="tl-3 d-lg-block d-none">
                <img src="img/assets/t3.png" alt="" className="img-fluid" />
              </div>
              <div className="tl-4 d-lg-block d-none">
                <img src="img/assets/t4.png" alt="" className="img-fluid" />
              </div>
              <div className="tl-5 d-lg-block d-none">
                <img src="img/assets/t5.png" alt="" className="img-fluid" />
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="owl-carousel owl-theme testimonial">
                    <div className="item text-center">
                      <div className="testImg mx-auto position-relative">
                        <img
                          src="img/assets/ellipse.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <p className="fw-600 mb-0">Mark Carson</p>
                      <small>Dad of 4 Kids</small>
                      <p>
                        Welcome! We are child safety squad. We believe that to
                        do your best, you must be prepared. Their are no redo’s
                        in parenting. Child Safety Squad prepares you to make
                        your best decisions
                      </p>
                    </div>
                    <div className="item text-center">
                      <div className="testImg mx-auto position-relative">
                        <img
                          src="img/assets/ellipse.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <p className="fw-600 mb-0">Mark Carson</p>
                      <small>Dad of 4 Kids</small>
                      <p>
                        Welcome! We are child safety squad. We believe that to
                        do your best, you must be prepared. Their are no redo’s
                        in parenting. Child Safety Squad prepares you to make
                        your best decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
