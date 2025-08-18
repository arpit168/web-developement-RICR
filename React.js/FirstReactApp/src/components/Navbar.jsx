import React from "react";
import arpit from "../assets/arpit's pic.jpg";
import arp from "../assets/java.png";
import ar from "../assets/mern.jpg";
import arpi from "../assets/dsa.jpg";
function Navbar() {
  return (
    <>
      <div className="container-fluid bg-primary text-white text-center px-5 p-1 d-flex align-items-center justify-content-between">
        <a href="#home" className="text-decoration-none text-light">
          <h1>My Portfolio</h1>
        </a>
        <div className="d-flex gap-3 align-items-center">
          <a href="#about" className="text-decoration-none text-light">
            About
          </a>
          <a href="#certification" className="text-decoration-none text-light">
            Certification
          </a>
          <a href="#education" className="text-decoration-none text-light">
            Education
          </a>
          <a href="#project" className="text-decoration-none text-light">
            Projects
          </a>
          <a href="#contact" className="text-decoration-none text-light">
            Contact Me
          </a>
          <a
            href="https://www.instagram.com/anokha_arpit/p/C7QSJBEoG-I/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-success text-light p-2 rounded-2 "
          >
            Download
          </a>
        </div>
      </div>
      <div className="container-fluid bg-warning-subtle px-5 py-2 align-items-center text-center text-light d-flex gap-5 mt-5  rounded-2 ">
        <div>
          {" "}
          <img
            src={arpit}
            alt=""
            width={200}
            height={200}
            className="arpitpic"
          />
        </div>
        <div className=" text-start">
          <h1 className="name  ">Arpit Gupta</h1>
          <h4 className="text-warning">Full Stack Developer</h4>
          <span className="text-muted">
            <b>
              Studied from S.G.S.S.S. College <br /> Sidhi , Learn Coding from
              Raj Institute <br /> Of Coding and Robotics Minal Mall <br />
              in Minal Residency Bhopal{" "}
            </b>
          </span>
        </div>

        <span>
          <h5 className=" border-bottom  text-danger-emphasis ">
            Complete Java <br /> Developement
          </h5>
          <img src={arp} alt="" width={120} height={120} className="arp  " />
        </span>
        <span>
          <h5 className=" border-bottom text-danger-emphasis ">
            Complete MERN <br /> Stack Developement
          </h5>
          <img src={ar} alt="" width={120} height={120} className="ar" />
        </span>
        <span>
          <h5 className=" border-bottom text-danger-emphasis ">
            {" "}
            Complete DSA <br /> Developement
          </h5>
          <img src={arpi} alt="" width={120} height={120} className="arpi" />
        </span>
      </div>
    </>
  );
}

export default Navbar;
