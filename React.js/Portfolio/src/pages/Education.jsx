import React from "react";

const Education = () => {
  return (
    <div className=" bg-gray-700 rounded-xl p-10">
      <div class=" bg-gray-900 text-white py-6 shadow-md rounded-ee-full ">
        <div class="container mx-auto px-4 text-center hover:scale-110 transition-transform duration-200">
          <span class="text-4xl  text-yellow-500 font-bold">
            My Educational Journey
          </span>
          <p class="mt-2 text-yellow-300   text-lg">
            Proudly associated with excellence in education
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-10 ">
        <div class="bg-gray-900 rounded-lg shadow-lg p-6 mb-10 hover:scale-105 transition-transform duration-200 ">
          <h2 class="text-2xl font-semibold text-blue-600 mb-2">🏫 School</h2>
          <h3 class="text-xl text-white font-bold">
            Navodaya Senior Secondary School
          </h3>
          <p class="text-gray-200">Churhat, Sidhi (M.P.).</p>
          <p class="mt-3 text-gray-200">
            A place that laid the foundation of learning and discipline, helping
            to shape both academic and personal values.
          </p>
        </div>

        <section class=" bg-gray-900 rounded-lg shadow-lg p-6 mb-10 hover:scale-105 transition-transform duration-200">
          <h2 class="text-2xl font-semibold text-green-600 mb-2">🎓 College</h2>
          <h3 class="text-xl text-white font-bold">
            Sanjay Gandhi Memorial College
          </h3>
          <p class="text-gray-200">Sidhi, Madhya Pradesh.</p>
          <p class="mt-3 text-gray-200">
            An institute that empowered my higher education, critical thinking,
            and pursuit of specialized knowledge.
          </p>
        </section>

        <div class="bg-gray-900 rounded-lg shadow-lg p-6 mb-10 hover:scale-105 transition-transform duration-200">
          <h2 class="text-2xl font-semibold text-purple-600 mb-2">
            💻 Coaching Institute
          </h2>
          <h3 class="text-xl text-white font-bold">
            Raj Institute of Coding and Robotics
          </h3>
          <p class="text-gray-200">
            Minal, Minal mall 4<sup>th</sup>floor Bhopal, Madhya Pradesh.
          </p>
          <p class="mt-3 text-gray-200">
            Where passion met technology — learning programming, robotics, and
            modern tech skills in a hands-on environment.
          </p>
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

export default Education;
