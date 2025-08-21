import React from "react";

const Projects = () => {
  return (
    <div className="p-10">
      <div class="bg-blue-700 text-white py-6 shadow-md">
        <div class="container mx-auto text-center hover:scale-103 transition-transform duration-200">
          <h1 class="text-4xl text-yellow-600 font-bold ">My Projects</h1>
          <p class="text-lg text-yellow-300  mt-2">
            Java | MERN Stack | DSA Implementations
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-center text-yellow-600 mb-10">
          ✨ Featured Projects
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-103 transition-transform duration-200">
            <h3 class="text-xl font-semibold text-blue-600 mb-2">
              Student Management System
            </h3>
            <p class="text-gray-300 mb-4">
              Built with Java Swing and JDBC, this desktop application helps
              manage student records including add, delete, update and search
              functionalities.
            </p>
            <span class="inline-block bg-blue-300 text-blue-800 text-sm px-3 py-1 rounded-full">
              Java
            </span>
            <button className="btn bg-blue-800 w-25 p-1 ms-3 rounded-xl  hover:scale-103 transition-transform duration-200 ">
              <b>View</b>
            </button>
          </div>

          <div class="bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-103 transition-transform duration-200">
            <h3 class="text-xl font-semibold text-green-600 mb-2">
              E-Commerce Web App
            </h3>
            <p class="text-gray-300 mb-4">
              A full-stack e-commerce platform with user auth, product search,
              cart, and payment integration. Built using MongoDB, Express,
              React, and Node.js.
            </p>
            <span class="inline-block bg-green-300 text-green-800 text-sm px-3 py-1 rounded-full">
              MERN Stack
            </span>
            <button className="btn bg-blue-800 w-25 p-1 ms-3 rounded-xl  hover:scale-103 transition-transform duration-200 ">
              <b>View</b>
            </button>
          </div>

          <div class="bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-103 transition-transform duration-200">
            <h3 class="text-xl font-semibold text-purple-600 mb-2">
              DSA Visualizer
            </h3>
            <p class="text-gray-300 mb-4">
              A visual tool built with HTML, CSS, JS to demonstrate how sorting
              and searching algorithms work step-by-step in real time.
            </p>
            <span class="inline-block bg-purple-300 text-purple-800 text-sm px-3 py-1 rounded-full">
              DSA
            </span>
            <button className="btn bg-blue-800 w-25 p-1 ms-3 rounded-xl  hover:scale-103 transition-transform duration-200 ">
              <b>View</b>
            </button>
          </div>

          <div class="bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-103 transition-transform duration-200">
            <h3 class="text-xl font-semibold text-blue-600 mb-2">
              Banking Console App
            </h3>
            <p class="text-gray-300 mb-4">
              A Java CLI-based banking system that supports account creation,
              transactions, and balance inquiries using object-oriented
              principles.
            </p>
            <span class="inline-block bg-blue-300 text-blue-800 text-sm px-3 py-1 rounded-full">
              Java
            </span>
            <button className="btn bg-blue-800 w-25 p-1 ms-3 rounded-xl  hover:scale-103 transition-transform duration-200 ">
              <b>View</b>
            </button>
          </div>

          <div class="bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-103 transition-transform duration-200">
            <h3 class="text-xl font-semibold text-green-600 mb-2">
              Blog App with JWT
            </h3>
            <p class="text-gray-300 mb-4">
              A full-stack blog application allowing users to create, edit,
              delete posts with secure login using JWT-based authentication.
            </p>
            <span class="inline-block bg-green-300 text-green-800 text-sm px-3 py-1 rounded-full">
              MERN Stack
            </span>
            <button className="btn bg-blue-800 w-25 p-1 ms-3 rounded-xl  hover:scale-103 transition-transform duration-200 ">
              <b>View</b>
            </button>
          </div>

          <div class="bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-103 transition-transform duration-200">
            <h3 class="text-xl font-semibold text-purple-600 mb-2">
              DSA Problem Tracker
            </h3>
            <p class="text-gray-300 mb-4">
              A personal tool to track DSA problems solved across LeetCode,
              Codeforces, and GeeksforGeeks with topic tagging and performance
              metrics.
            </p>
            <span class="inline-block bg-purple-300 text-purple-800 text-sm px-3 py-1 rounded-full">
              DSA
            </span>
            <button className="btn bg-blue-800 w-25 p-1 ms-3 rounded-xl  hover:scale-103 transition-transform duration-200 ">
              <b>View</b>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-gray-900 text-white py-6 mt-12">
        <div class="container mx-auto text-center px-4">
          <p>&copy; 2025 Arpit Gupta. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
