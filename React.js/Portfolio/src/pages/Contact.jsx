import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  const fun1 = (event) => {
    event.preventDefault();
    console.log(document.getElementById("name").value); 
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("message").value);
  };

  return (
    <div className="bg-gray-800 px-15 py- m-5 p-5 rounded-2xl ">
      <div class="bg-indigo-700 text-white py-6 shadow-md">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold rounded-b-3xl">Get In Touch</h1>
          <p class="mt-2 text-lg">Java | MERN Stack | DSA Enthusiast</p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="bg-white rounded-lg shadow-lg p-8 md:flex md:space-x-10">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h2 class="text-3xl font-bold text-indigo-600 mb-6">
              Contact Info
            </h2>

            <div class="flex items-center mb-4">
              <FaEnvelope />
              <a
                href="mailto:arpitgupta0406@gmail.com"
                class="ps-2 text-lg hover:underline"
              >
                arpitgupta0406@gmail.com
              </a>
            </div>

            <div class="flex items-center mb-8">
              <FaPhone />
              <a href="tel:+919516010142" class="ps-1 text-lg  hover:underline">
                +91 9516010142
              </a>
            </div>

            <span class="text-2xl font-semibold  ">Follow Me</span>
            <div class="flex space-x-6 text-3xl text-indigo-600">
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
              class="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <footer class="bg-gray-900 text-white py-6 mt-12">
        <div class="container mx-auto text-center px-4">
          <p>&copy; 2025 Arpit Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
