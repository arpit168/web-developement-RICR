import React from "react";

const Home = () => {
  return (
    <div>
      <div class="bg-gray-800 rounded-t-lg mx-5 mt-3 shadow-md py-12 px-6">
        <div class="max-w-5xl mx-auto text-center hover:scale-110 transition-transform duration-200">
          <h1 class="text-4xl md:text-5xl font-bold text-yellow-600">
            <b>Arpit Gupta</b>
          </h1>
          <p class="mt-4 text-xl text-gray-300">
            Full Stack Developer | UI/UX Enthusiast | Tech Explorer
          </p>
          <div class="mt-6">
            <a
              href="#contact"
              class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
            >
              Contact Me
            </a>
            <a href="#" download class="ml-4 text-blue-600 hover:underline">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div class="py-16 px-6 bg-gray-700 rounded-b-lg mx-5 mb-3">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-semibold text-gray-100 mb-6 text-center">
            About Me
          </h2>
          <p class="text-lg text-gray-100 leading-relaxed text-center">
            I'm a passionate developer with experience in building web
            applications using modern technologies. I enjoy solving problems,
            designing clean interfaces, and continuously learning new tools in
            the tech ecosystem.
          </p>
        </div>
      </div>

      <div class="py-16 px-6">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-semibold text-gray-100 mb-8 text-center hover:scale-110 transition-transform duration-200">
            <b>Skills</b>
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200 ">
              HTML & CSS
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              JavaScript
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              React
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              Tailwind CSS
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              Node.js
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              MongoDB
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              Git & GitHub
            </div>
            <div class="bg-white shadow-sm p-4 rounded-lg hover:scale-110 transition-transform duration-200">
              Figma
            </div>
          </div>
        </div>
      </div>

      <div class="py-16 px-6 bg-gray-900">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl text-yellow-500 font-semibold mb-8 text-center">
            Experience
          </h2>
          <div class="space-y-6">
            <div class="bg-gray-700 shadow p-6 rounded-lg hover:scale-105 transition-transform duration-200">
              <h3 class="text-xl text-yellow-700 font-bold">
                Frontend Developer - Raj Digital Tech
              </h3>
              <p class="text-sm text-gray-200">Oct 2023 – Present</p>
              <p class="mt-2 text-gray-200">
                Built and maintained responsive web interfaces using React and
                Tailwind CSS. Collaborated with designers and backend developers
                to deliver high-quality applications.
              </p>
            </div>
            <div class="bg-gray-700 shadow p-6 rounded hover:scale-105 transition-transform duration-200">
              <h3 class="text-xl text-yellow-700 font-bold">
                Intern - RICR Solutions
              </h3>
              <p class="text-sm text-gray-100">Jan 2024 – Aug 2024</p>
              <p class="mt-2 text-gray-200">
                Assisted in developing internal tools, participated in code
                reviews, and learned agile development workflows in a fast-paced
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-gray-900 text-white py-6 mt-10 ">
        <div class="container mx-auto text-center px-4">
          <p>&copy; 2025 Arpit Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
