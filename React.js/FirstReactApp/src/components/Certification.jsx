import React from "react";

function Certification() {
  return (
    <>
      <div
        className="ms-5 border-start border-2 border-black ps-3 bg-secondary-subtle shadow h-100"
        id="certification"
      >
        <div>
          <h1 className="cer ms-4">Certificates</h1>
        </div>

        <div className="d-flex gap-3 mx-4  rounded-2 ">
          <div className="card1 w-50 border-2 p-2 my-1 shadow rounded-2 ">
            <h3>Java Developer Certificates</h3>
            <h6>
              Awarded for proficiency in java programming , including OOP
              concepts, data structure, and appplication developement
            </h6>{" "}
            <br />
            <ul>
              <li>Core Java</li>
              <li>Spring Framework</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="card1 w-50 border-2 p-2 shadow  rounded-2">
            <h3>MERN Stack Developer Certificates </h3>
            <h6>
              {" "}
              Recoggnizes experties in building Full-stack web applications
              using MongoDB, Express, React, and <br /> Nodejs.
            </h6>{" "}
            <br />
            <ul>
              <li>Core Java</li>
              <li>Spring Framework</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="card1 w-50 border-2 p-2 shadow  rounded-2">
            <h3>DSA Developer Certificates </h3>
            <h6>
              Granted for mastery in Data Structures and Algorithms,
              problem-solving, and coding challanges.
            </h6>{" "}
            <br />
            <ul>
              <li>Arrays & Linked Lists</li>
              <li>Sorting & Searching</li>
              <li>Algorithms Design</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;
