import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsFillSendExclamationFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-gray-800   m-5  rounded-2xl ">
      <div className=" bg-[url('/Ricr.webp')] h-100 opacity-15 pt-50  bg-cover bg-center mt-5 rounded-2xl    ">
        <h1 className="text-white  font-bold text-5xl text-center hover:scale-110 transition-transform-left duration-200">
          Contact us
        </h1>
      </div>
      <div class="bg-indigo-700 text-white py-6 shadow-md rounded-2xl">
        <div class="container mx-auto px-4 text-center hover:scale-110 transition-transform-left duration-200">
          <h1 class="text-4xl font-bold rounded-b-3xl hover:text-red-600 ">
            Get In Touch
          </h1>
          <p class="mt-2 text-lg font-bold">
            You can Contact us from here for any diagnosis
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="bg-white rounded-lg shadow-lg p-8 md:flex md:space-x-10">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h2 class="text-3xl font-bold text-indigo-600 mb-6">
              Contact Info
            </h2>

            <div class="flex items-center mb-4">
              <FaHome className="text-xl" />
              <a
                href="https://maps.app.goo.gl/Q3ZyDaUuyoyksD8AA"
                class="ps-2 text-lg hover:underline  hover:text-red-600"
              >
                Fateh Road, Churhat , Distt. Sidhi, <br /> (Madhya Pradesh).
              </a>
            </div>

            <div class="flex items-center mb-4">
              <FaEnvelope />
              <a
                href="mailto:arpitgupta0406@gmail.com"
                class="ps-2 text-lg hover:underline  hover:text-red-600"
              >
                arpitgupta0406@gmail.com
              </a>
            </div>

            <div class="flex items-center mb-8">
              <FaPhone />
              <a
                href="tel:+919516010142"
                class="ps-1 text-lg  hover:underline  hover:text-red-600"
              >
                +91 9516010142
              </a>
            </div>

            <span class="text-2xl font-semibold  ">Follow Me</span>
            <div class="flex space-x-6 text-3xl text-indigo-600 mt-5  hover:text-red-600">
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <TiSocialLinkedin />
              </a>
              <a
                href="https://www.instagram.com/anokha_arpit/?hl=en"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://github.com/arpit168" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/arpit.gupta.170169"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div class="md:w-1/2 bg-indigo-50 rounded-lg p-6 shadow-inner">
            <h2 class="text-3xl font-bold text-indigo-600 mb-6">
              Send Me a Message
            </h2>

            <label for="name" class="block mb-2 font-semibold text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <label for="email" class="block mb-2 font-semibold text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <label for="message" class="block mb-2 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              required
              class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              class="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-md transition "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-black h-100  ">
        <form >
        <div className="text-white flex gap-25 pt-25 px-25 ">
          <div>
            <h1 className="font-bold text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200 ">ABOUT US</h1> <br />
            <span>
              "Heaven’s blessings don’t <br />miss even the smallest days <br /> — everything
              grows in its time, <br /> so look and see."
            </span>
          </div>
          <div>
          <h1 className="font-bold text-2xl  hover:text-red-600 hover:scale-110 transition-transform duration-200" >CONTACT INFO</h1>  <br />
          <span>
            <span>Address : Fateh road churhat Sidhi (Madhya pradesh).</span>{" "}
            <br />
            <span className="hover:text-red-600" > Phone : +91 9516****42</span>  <br />
            <span className="hover:text-red-600" > Email : arpit****@gmail.com</span> 
          </span>
          </div>

          <div>
            <h1 className="font-bold text-2xl  hover:text-red-600 hover:scale-110 transition-transform duration-200">IMPORTANT LINK</h1> <br />
            <span>
              <span className="hover:text-red-600 ">View Project </span><br />
             <span  className="hover:text-red-600"> Contact Us </span><br />
              <span className="hover:text-red-600">Testimonial</span><br />
               <span className="hover:text-red-600" >Proparties </span><br />
              <span className="hover:text-red-600" > Support</span>
              </span>
          </div>

          <div>
            <h1 className="font-bold text-2xl  hover:text-red-600 hover:scale-110 transition-transform duration-200">NEW SELLER</h1> <br />
            <span>Heaven’s blessings don’t miss <br /> even the smallest days. appear creeping.</span> <br /> <br />
            <span className="flex ">  
            <input type="email" name="email" id="email" placeholder="Email Address" className= " p-1 rounded w-50 bg-white text-black  " /> 
            <button className=" text-2xl text-indigo-950 border-2 bg-white "><BsFillSendExclamationFill /></button>
            </span>
 
          </div>

         
        </div>
        </form>
      </footer>
    </div>
  );
};

export default Contact;
