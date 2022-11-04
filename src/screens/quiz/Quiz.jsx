import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../../util/api";
import { Link } from "react-router-dom";
const Quiz = () => {
  let correckmarks = 0;
  const userToken = useSelector((state) => state?.auth?.token);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [quizes, setquizes] = useState([]);
  const [loading, setloading] = useState(false);
  const [qnumber, setqumber] = useState(1);

  const [step, setStep] = useState(1);
  const [values, setValues] = useState({});
  console.log("Values", values);
  const handleAllQuizes = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/quiz/logs?status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("CourseResss", res);
      setquizes(res?.data?.quiz);
      setloading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAllQuizes();
  }, []);

  console.log("Quizes", quizes?.docs?.[0]?.quizinfo.length);
  console.log("qnNumber", qnumber);

  return (
    <div>
      <section className="py-5 mt-150 bg-blueGradient">
        {loading ? (
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="fw-600">Quiz</h2>
              </div>
              {quizes &&
              Object.keys(quizes).length > 0 &&
              quizes.docs.length > 0
                ? quizes.docs.map((item, index) => (
                    <div className="col-lg-12 text-center">
                      {item?.quizinfo?.length > 0 &&
                        item?.quizinfo
                          ?.slice(step - 1, step)
                          .map((quizzz, index) => (
                            <div className="card-white p-4 my-3">
                              <p className="fw-600">
                                Q{step}. {quizzz?.quizquestion}
                              </p>
                              <p>Select One Option</p>
                              <div className="row">
                                <div className="col-lg-6 my-2">
                                  <label className="containerRadio">
                                    Two
                                    <input type="radio" name="radio" />
                                    <div className="checkmark">
                                      <div className="d-flex">
                                        <div className="flex-shrink-0">
                                          <i className="fas fa-check-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                          {quizzz?.quizoption1}
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-6 my-2">
                                  <label className="containerRadio">
                                    Two
                                    <input type="radio" name="radio" />
                                    <div className="checkmark">
                                      <div className="d-flex">
                                        <div className="flex-shrink-0">
                                          <i className="fas fa-check-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                          {quizzz?.quizoption2}
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-6 my-2">
                                  <label className="containerRadio">
                                    Two
                                    <input type="radio" name="radio" />
                                    <div className="checkmark">
                                      <div className="d-flex">
                                        <div className="flex-shrink-0">
                                          <i className="fas fa-check-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                          {quizzz?.quizoption3}
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                                <div className="col-lg-6 my-2">
                                  <label className="containerRadio">
                                    Two
                                    <input type="radio" name="radio" />
                                    <div className="checkmark">
                                      <div className="d-flex">
                                        <div className="flex-shrink-0">
                                          <i className="fas fa-check-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                          {quizzz?.quizoption4}
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          ))}
                    </div>
                  ))
                : "No Quiz Questions"}

              <div className="col-lg-6 my-2">
                <button
                  href="#"
                  className="btn btn-black"
                  onClick={() => setStep(step - 1)}
                  disabled={step == 1 ? "disabled" : ""}
                >
                  <i className="fas fa-chevron-left" /> Previous{" "}
                </button>
              </div>
              <div className="col-lg-6 text-end my-2">
                <button
                  to="#"
                  className="btn btn-primary"
                  onClick={(e) => setStep(qnumber + 1)}
                  disabled={
                    step == quizes?.docs?.[0]?.quizinfo.length ? "disabled" : ""
                  }
                  // data-bs-toggle="modal"
                  // data-bs-target="#retakeQuiz"
                >
                  Next <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container" style={{ alignItems: "center" }}>
            <div class="loader mx-auto" />
          </div>
        )}

        <div
          className="modal fade"
          id="retakeQuiz"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex={-1}
          aria-hidden="true"
          style={{ display: "none" }}
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
                  src="img/assets/manClipart.png"
                  alt=""
                  className="img-fluid"
                />
                <h2 className="fw-600">oops! you crashed out this time</h2>
                <p className="fw-600">
                  Sorry ! You Need To Retake The Quiz.You Didnt Do Well In It !
                </p>
                <p className="mt-2 mb-0 fw-600">Questions Attempted : 20</p>
                <p className="mt-2 fw-600">Correct Questions : 05</p>
                <a
                  href="#"
                  className="btn btn-primary mt-3"
                  data-bs-dismiss="modal"
                >
                  Retake Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
