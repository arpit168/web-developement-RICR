import React from "react";

function Education() {
  return (
    <>
      <div
        className="mx-5 my-5 py-2 border-top border-bottom border-dark bg-warning-subtle  rounded-2"
        id="education"
      >
        <div>
          <h1 className="edu ">Education</h1>
        </div>
        <div className="d-flex  mx-5 ">
          <div className="card2 w-50  border-2 p-2 m-3 shadow  rounded-2">
            <button className="btn btn-outline-warning">🏫University</button>
            <button className="btn btn-outline-success w-25"> 🛣️Visit </button>
            <h3>Bachlor of Science in Computer Application</h3>
            <h5>
              {" "}
              <span className=" text-primary">
                Awadhesh pratap singh University,{" "}
              </span>{" "}
              Rewa (M.P.). 2023-2026.
            </h5>
          </div>
          <div className="card2 w-50  border-2 p-2 m-3 shadow  rounded-2">
            <button className="btn btn-outline-warning">🏫School</button>
            <button className="btn btn-outline-success w-25"> 🛣️Visit </button>
            <h3>High School Diploma</h3>
            <h5>
              <span className=" text-primary">
                Navodaya Senior Secondary School,{" "}
              </span>{" "}
              Churhat Sidhi (M.P.).
            </h5>{" "}
            <br />
            <h6>Major: Mathematics Science.</h6>
          </div>
          <div className="card2 w-50  border-2 p-2 m-3 shadow  rounded-2">
            <button className="btn btn-outline-warning">🏫Institute</button>
            <button className="btn btn-outline-success w-25"> 🛣️Visit </button>
            <h3>Learn Coding of Full-Stack Developement</h3>
            <h5>
              <span className=" text-primary">
                Raj Institute of Coding and Robotics
              </span>
              , Minal mall - 4th floor Minal, Bhopal
            </h5>{" "}
            <br />
            <h6>Java + DSA + MERN.</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
