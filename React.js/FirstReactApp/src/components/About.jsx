import React from "react";
import Certification from "../components/Certification.jsx";
function About() {
  return (
    <>
      <div
        className="conatiner ms-5 mt-2   d-flex bg-danger-subtle  rounded-2 "
        id="about"
      >
        <div className=" p-3">
          <h1 className="about ">About</h1>
          <p>
            <b>
              {" "}
              web developer with experience in building modern React
              applications. <br />
              He enjoys learning new technologies, solving complex problems.
            </b>
          </p>
          <div className="">
            <ul>
              <li>
                <strong>Skills:</strong> JavaScript, React, HTML, CSS, Node.js
              </li>
              <li>
                <strong>Interests:</strong> UI/UX Design, Open Source, Blogging
              </li>
              <li>
                <strong>Email:</strong> arpitgupta0406@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Certification />
        </div>
      </div>
    </>
  );
}

export default About;
