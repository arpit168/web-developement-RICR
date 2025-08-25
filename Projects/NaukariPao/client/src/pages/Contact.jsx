import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsFillSendExclamationFill } from "react-icons/bs";
import ak from "../assets/Ricr.webp";
import an from "../assets/interview.jpg";
import toast from "react-hot-toast";

const Contact = () => {
  const [contactData, setContactData] = useState({
    Fname: "",
    email: "",
    sub: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Validate = () => {
    let isvalid = true;
    const err = {};

    if (contactData.Fname.length < 3) {
      err.Fname = "Name should be at least 3 Characters";
      isvalid = false;
    }
    if (!/^[A-Za-z ]+$/.test(contactData.Fname)) {
      err.Fname = "Name Should be atleast 3 characters";
      isvalid = false;
    }

     if (
      !/^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(contactData.email) ||contactData.email.length < 10)
       {
      err.email = "Enter a valid email like you@gmail.com";
      isvalid = false;
    }

    if (contactData.sub.length < 15) {
      err.sub = "subject should be at least 15 Characters";
      isvalid = false;
    }

      if (contactData.message.length < 25) {
        err.message = "Tell us in brief (at least 25 characters)";
        isvalid =false;
      }
     
    setError(err);
    return isvalid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    if (!Validate()) {
      setLoading(false);
      toast.error(" Please Solve the Errors");
      return;
    }

    setTimeout(() => {
      console.log(contactData);
      setContactData({
        Fname: "",
        email: "",
        sub: "",
        message: "",
      });
      setLoading(false);
      toast.success("We will contact you via mail");
    }, 2000);
  };

  // _________________________________________________________________________
  return (
    <form onSubmit={handleSubmit}>
         <div className="bg-gray-900   m-5  rounded-2xl " >
      <div className=" rounded-2xl px-25   ">
        <h1 className="text-white top-100 text-9xl font-bold text-center relative ">
          Contact Us
        </h1>
        <img src={ak} className="  w-screen h-screen opacity-20" alt="" />
      </div>

      <div className="bg-indigo-700 text-white py-6  shadow-md rounded-2xl">
        <div className="container mx-auto px-4 text-center hover:scale-110 transition-transform-left duration-200">
          <h1 className=" text-4xl font-bold rounded-b-3xl hover:text-red-600 ">
            Get In Touch
          </h1>
          <p className="mt-2 text-lg font-bold">
            You can Contact us from here for any diagnosis
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 flex space-x-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src={an} className="w-200 rounded" alt="" />
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Contact Info
            </h2>

            <div className="flex items-center mb-4">
              <FaHome className="text-xl" />
              <a
                href="https://maps.app.goo.gl/Q3ZyDaUuyoyksD8AA"
                className="ps-2 text-lg hover:underline  hover:text-red-600"
              >
                Fateh Road, Churhat , Distt. Sidhi, <br /> (Madhya Pradesh).
              </a>
            </div>

            <div className="flex items-center mb-4">
              <FaEnvelope />
              <a
                href="mailto:arpitgupta0406@gmail.com"
                className="ps-2 text-lg hover:underline  hover:text-red-600"
              >
                arpitgupta0406@gmail.com
              </a>
            </div>

            <div className="flex items-center mb-8">
              <FaPhone />
              <a
                href="tel:+919516010142"
                className="ps-1 text-lg  hover:underline  hover:text-red-600"
              >
                +91 9516010142
              </a>
            </div>

            <span className="text-2xl font-semibold  ">Follow Me</span>
            <div className="flex space-x-6 text-3xl text-indigo-600 mt-5 ">
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <TiSocialLinkedin className=" hover:text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/anokha_arpit/?hl=en"
                target="_blank"
              >
                <FaInstagram className=" hover:text-red-600" />
              </a>
              <a href="https://github.com/arpit168" target="_blank">
                <FaGithub className=" hover:text-red-600" />
              </a>
              <a
                href="https://www.facebook.com/arpit.gupta.170169"
                target="_blank"
              >
                <FaFacebook className=" hover:text-red-600" />
              </a>
            </div>
          </div>

          <div className="w-1/2 bg-indigo-50 rounded-lg p-6 shadow-inner">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Send Me a Message
            </h2>

            <label htmlfor="name" className="block mb-2 font-semibold text-gray-700">
              Name*
            </label>   
            <input
              type="text"
              id="Fname"
              name="Fname"
              value={contactData.Fname}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {error.Fname && (
              <p className= "text-center text-red-500 text-sm">{error.Fname}</p>
            )}

            <label htmlfor="email" className="block mb-2 font-semibold text-gray-700">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="You@email.com"
              required
              value={contactData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
             {error.email && (
              <p className="text-center text-red-500 text-sm">{error.email}</p>
            )}

            <label htmlForfor="sub" className="block mb-2 font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="sub"
              name="sub"
              placeholder="Enter Forwhat You want to Contact Us  "
              required
              value={contactData.sub}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {error.sub && (
              <p className="text-center text-red-500 text-sm">{error.sub}</p>
            )}

            <label htmlFor ="message" className="block mb-2 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              required
              value={contactData.message}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            {error.message && (
              <p className="text-center text-red-500 text-sm">{error.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-md transition "
            >
              {loading ? "Sending..." : "Send Your Query"}
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-black h-100  ">
        <form>
          <div className="text-white flex gap-25 pt-25 px-25 ">
            <div>
              <h1 className="font-bold text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200 ">
                ABOUT US
              </h1>{" "}
              <br />
              <span>
                "Heaven’s blessings don’t <br />
                miss even the smallest days <br /> — everything grows in its
                time, <br /> so look and see."
              </span>
            </div>
            <div>
              <h1 className="font-bold text-2xl  hover:text-red-600 hover:scale-110 transition-transform duration-200">
                CONTACT INFO
              </h1>{" "}
              <br />
              <span>
                <span>
                  Address : Fateh road churhat Sidhi (Madhya pradesh).
                </span>{" "}
                <br />
                <span className="hover:text-red-600">
                  {" "}
                  Phone : +91 9516****42
                </span>{" "}
                <br />
                <span className="hover:text-red-600">
                  {" "}
                  Email : arpit****@gmail.com
                </span>
              </span>
            </div>

            <div>
              <h1 className="font-bold text-2xl  hover:text-red-600 hover:scale-110 transition-transform duration-200">
                IMPORTANT LINK
              </h1>{" "}
              <br />
              <span>
                <span className="hover:text-red-600 ">View Project </span>
                <br />
                <span className="hover:text-red-600"> Contact Us </span>
                <br />
                <span className="hover:text-red-600">Testimonial</span>
                <br />
                <span className="hover:text-red-600">Proparties </span>
                <br />
                <span className="hover:text-red-600"> Support</span>
              </span>
            </div>

            <div>
              <h1 className="font-bold text-2xl  hover:text-red-600 hover:scale-110 transition-transform duration-200">
                NEW SELLER
              </h1>{" "}
              <br />
              <span>
                Heaven’s blessings don’t miss <br /> even the smallest days.
                appear creeping.
              </span>{" "}
              <br /> <br />
              <span className="flex ">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="You@email.com"
              required
              value={contactData.email}
              onChange={handleChange}
              className=" p-1 rounded w-50 bg-white text-black "
            />
             {error.email && (
              <p className="text-center text-red-500 text-sm">{error.email}</p>
            )}
                <button className=" text-2xl text-indigo-950 border-2 bg-white ">
                  <BsFillSendExclamationFill />
                </button>
              </span>
            </div>
          </div>
        </form>
      </footer>
    </div>
    </form>

  );
};

export default Contact;
