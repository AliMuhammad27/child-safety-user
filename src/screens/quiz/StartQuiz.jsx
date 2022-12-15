import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const StartQuiz = () => {
  const start = new Date().toISOString();
  const tomorrow = new Date(start);
  tomorrow.setDate(tomorrow.getDate());
  const passingMarks = 50;
  const quizresult = 30;
  let retakedate = "";
  if (quizresult < passingMarks) {
    retakedate = moment(start).add(1, "M");
  }
  console.log("startData", start);
  console.log("RetakeDate", moment(retakedate).format("ll"));
  console.log("remainingDays", retakedate.diff(start, "days"));
  return (
    <div>
      <section className="innerMain4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h1 className="display-4 fw-600">Start Your Quiz</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="fw-600">How to Participate</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean
                Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet Lacus
                Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar
                Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
                Montes, Nascetur Ridiculus Mus. Nam Fermentum, Nulla Luctus
                Pharetra Vulputate, Felis Tellus Mollis Orci, Sed Rhoncus Sapien
                Nunc Eget Odio. Lorem Ipsum Dolor Sit Amet, Consectetur
                Adipiscing Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida
                Dolor Sit Amet Lacus Accumsan Et Viverra Justo Commodo. Proin
                Sodales Pulvinar Tempor. Cum Sociis Natoque Penatibus Et Magnis
                Dis Parturient Montes, Nascetur Ridiculus Mus. Nam Fermentu.
              </p>
              <h3 className="fw-600">Passing Criteria</h3>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean
                Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet Lacus
                Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar
                Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
                Montes, Nascetur Ridiculus Mus. Nam Fermentum, Nulla Luctus
                Pharetra Vulputate, Felis Tellus Mollis Orci, Sed Rhoncus Sapien
                Nunc Eget Odio. Lorem Ipsum Dolor Sit Amet,{" "}
              </p>
              <h3 className="fw-600">Rules </h3>
              <p>
                - Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                Aenean Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet
                Lacus Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar
                Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
                Montes, Nascetur Ridiculus Mus.{" "}
              </p>
              <p>
                - Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                Aenean Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet
                Lacus Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar
                Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
                Montes, Nascetur Ridiculus Mus.{" "}
              </p>
              <p>
                - Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                Aenean Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet
                Lacus Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar
                Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient
                Montes, Nascetur Ridiculus Mus.{" "}
              </p>
            </div>
            <div className="col-lg-12 text-center my-5">
              <Link to="/quiz" className="btn btn-primary px-5">
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartQuiz;
