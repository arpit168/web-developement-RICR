import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800 p-15 m-10 rounded-xl ">
      <div class="bg-gray-900 text-white py-6 shadow-lg ">
        <div class="container mx-auto text-center px-4 hover:scale-110 transition-transform duration-200">
          <h1 class="text-4xl text-yellow-600 font-bold">About Me</h1>
          <p class="mt-2 text-yellow-400 text-lg">
            Java | MERN Stack | Data Structures & Algorithms Enthusiast
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-10">
        <div class="bg-gray-900 shadow-md rounded-lg p-6 md:flex md:items-center md:space-x-8 hover:scale-103 transition-transform duration-200">
          <div>
            <h2 class="text-2xl font-semibold text-indigo-600 mb-2">
              👋 Hello, I'm a Passionate Learner
            </h2>
            <p class="text-gray-200 ">
              I am a dedicated student with a deep interest in{" "}
              <b>Java programming</b>, full-stack web development using the{" "}
              <b>MERN stack</b>, and solving real-world problems using
              <b>Data Structures & Algorithms (DSA)</b>. I believe in writing
              clean, efficient, and scalable code and constantly improving
              through challenges and projects.
            </p>
          </div>
        </div>

        <div class="mt-10 ">
          <h2 class="text-2xl font-bold text-center text-yellow-500 mb-6">
            🛠️ My Skills
          </h2>
          <div class="grid  grid-cols-3 gap-6">
            <div class="bg-gray-900 p-6 rounded-lg shadow-md text-center hover:scale-110 transition-transform duration-200">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">
                Java Programming
              </h3>
              <p class="text-gray-200">
                OOP, Collections, Multi-threading, JDBC, Exception Handling
              </p>
            </div>

            <div class="bg-gray-900 p-6 rounded-lg shadow-md text-center hover:scale-110 transition-transform duration-200">
              <h3 class="text-xl font-semibold text-green-600 mb-2">
                MERN Stack
              </h3>
              <p class="text-gray-200">
                MongoDB, Express.js, React.js, Node.js, REST APIs, JWT Auth
              </p>
            </div>

            <div class="bg-gray-900 p-6 rounded-lg shadow-md text-center hover:scale-110 transition-transform duration-200">
              <h3 class="text-xl font-semibold text-purple-600 mb-2">
                Data Structures & Algorithms
              </h3>
              <p class="text-gray-200">
                Problem Solving, LeetCode, Recursion, Dynamic Programming,
                Graphs
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 bg-gray-900 p-6 rounded-lg shadow-md hover:scale-103 transition-transform duration-200">
          <h2 class="text-2xl font-bold text-indigo-600 mb-4">🎯 My Goals</h2>
          <div class=" text-gray-200 ">
            <li>Crack top product-based company interviews</li>
            <li>Build scalable full-stack applications</li>
            <li>Contribute to open-source and tech communities</li>
            <li>Stay updated with latest tech trends</li>
          </div>
        </div>

        <footer class="bg-gray-900 text-white py-6 mt-12">
          <div class="container mx-auto text-center px-4">
            <p> 2025 Arpit Gupta. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
