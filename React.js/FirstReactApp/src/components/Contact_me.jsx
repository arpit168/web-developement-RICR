import React from "react";
import Certification from "./Contact_me.jsx";
function Contact_me() {
  return (
    <>
      <div className=" contact  mb-3  bg-info-subtle rounded-2  ">
        {" "}
        <h1 className="text-center" id="contact">
          Contact me
        </h1>
        <div className="card w-50 bg-dark-subtle p-3  m-auto">
          <span>
            <b>Name:-</b>
          </span>
          <input type="text" name="name" placeholder="Input Your Name" id="" />{" "}
          <br />
          <span>
            <b>Contact:-</b>
          </span>
          <input
            type="number"
            name=""
            placeholder="Input your Contact Number"
            id=""
          />{" "}
          <br />
          <span>
            <b>Email:-</b>
          </span>
          <input type="Text" name="" placeholder="Input your Email" id="" />{" "}
          <br />
          <span>
            <b>Message:-</b>
          </span>
          <textarea
            name="message"
            placeholder="Input Your Message"
            id=""
          ></textarea>{" "}
          <br />
          <button className="btn btn-primary">
            <b>Send Message</b>
          </button>
          <div className="mt-4 text-center text-muted">
            <div>
              Email:{" "}
              <a href="mailto:arpitgupta0406@gmail.com">
                arpitgupta0406@gmail.com
              </a>
            </div>
            <div>
              Phone: <a href="tel:+911234567890">+91 9516010142</a>
            </div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/arpitgupta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_me;
