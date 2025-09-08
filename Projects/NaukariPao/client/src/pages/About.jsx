import React from "react";
import ak from "../assets/Ricr.webp";
import ab from "../assets/snap.jpg";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import img1 from "../assets/view.jpg";
import img2 from "../assets/view1.jpg";
import { FaChevronRight } from "react-icons/fa";
import { BsFillSendExclamationFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-gray-900  m-5 rounded-2xl ">
      <div className=" rounded-2xl px-25   ">
        <h1 className="text-white top-125 text-9xl font-bold text-center relative ">
          About Us
        </h1>
        <img src={ak} className="  w-screen h-screen opacity-20" alt="" />
      </div>

      {/* ____________________________________________________________________________________ */}

      <div className="">
        <div className="text-white  w-300 h-150 border-2 m-30  rounded inline-flex  bg-gray-800">
          <div className=" p-20 ">
            <h4 className="  text-red-500">WHAT WE ARE DOING</h4> <br />
            <h1 className="text-4xl font-bold">
              24k Talanted peoples are getting Jobs
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              similique, labore dolorum ducimus enim eveniet atque molestias
              numquam, reprehenderit eaque nostrum. Distinctio odit temporibus
              dolorum eveniet est quos hic perspiciatis porro reprehenderit!
              Aspernatur voluptate velit ipsa ut odit, quidem excepturi?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              nesciunt rerum, enim voluptatum error veniam magni est recusandae,
              fugiat a, qui repellendus ex porro modi nulla possimus ut? Magnam
              quae tempore inventore corrupti dolor accusantium quo aspernatur
              perferendis, laudantium similique non quasi eos cum earum est vel
              sapiente quis. Nihil.
            </p>
            <button className="bg-red-600 font-bold my-2 px-5 py-3 hover:bg-red-900 hover:scale-105 rounded ">
              Post a Job
            </button>
            <div className="relative text-center  left-[31vw] bottom-[18.5vh] h-[150px] w-[200px] bg-blue-900 rounded  ">
              <span className="text-4xl">Since</span> <br />
              <span className="font-bold text-7xl">2025</span>
            </div>
          </div>

          <div>
            <img src={ab} className="w-700 h-150 object-cover" alt="" />
          </div>
        </div>
         </div>

        {/* ____________________________________________________________________ */}
        <div className=" bg-cover bg-center text-center h-screen w-370 mt-10 text-white pt-30 bg-[url('/blue.jpg')] bg-no-repeat object  ">
          <div className="text-center">
            <h3 className="text-red-600 text-2xl font-bold">APPLY PROCESS</h3>
            <h1 className="font-bold text-6xl">How it works</h1>
          </div>
          <div className="flex justify-around my-20   ">
            <div className="card w-100 h-100 border p-10 rounded-2xl bg-gray-950 hover:scale-103 transition-all duration-700">
              <span className="flex items-center justify-center text-8xl transition-transform duration-500 hover:[transform:rotateY(180deg)_translateX(20px)]">
                <MdOutlineContentPasteSearch />
              </span>
              <h3 className="text-3xl font-bold m-3">1.Search a Job</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                excepturi possimus eius laborum ipsa veritatis sed obcaecati a!
                Voluptatum, quas.
              </p>
            </div>
            <div className="card w-100 h-100 border p-10 rounded-2xl bg-gray-950  hover:scale-103 transition-all duration-700 ">
              <span className="flex items-center justify-center text-8xl transition-transform duration-500 hover:[transform:rotateY(180deg)_translateX(20px)] ">
                <PiUserCirclePlusBold />
              </span>
              <h3 className="text-3xl font-bold m-3">2.Apply for Job</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                excepturi possimus eius laborum ipsa veritatis sed obcaecati a!
                Voluptatum, quas.
              </p>
            </div>
            <div className="card w-100 h-100 border p-10 rounded-2xl bg-gray-950  hover:scale-103 transition-all duration-700 ">
              <span className="flex items-center justify-center text-8xl transition-transform duration-500 hover:[transform:rotateY(180deg)_translateX(20px)] ">
                <GrUserWorker />
              </span>
              <h3 className="text-3xl font-bold m-3"> 3. Get your Job</h3>
              <h3></h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                excepturi possimus eius laborum ipsa veritatis sed obcaecati a!
                Voluptatum, quas.
              </p>
            </div>
          </div>
        </div>
     

      {/* ______________________________________________________________________________________ */}

      <div className="w-375 pt-20 h-150 text-center rounded-2xl   bg-gray-700">
        <div className="w-150  ">
          <img
            src={ab}
            className=" w-50 h-50 rounded-full object-cover overflow-hidden relative left-160 mb-5 hover:scale-115 transition-transform duration-700 "
            alt=""
          />
          <div className="text-white relative left-110 ">
            <h3 className="text-5xl font-bold">Arpit Gupta</h3>
            <h5 className=" text-2xl m-5">Creative Designer</h5>
            <p>
              <i>
                " I am at an age Where I just want to be fit and healthy our
                bodies are Our responsability! So start caring for your body and
                it will care for you. Eat clean it eill care for you and workout
                hard. "
              </i>
            </p>
          </div>
        </div>
      </div>
      {/* ____________________________________________________________________________________ */}

      <div className=" h-100 pt-30  opacity-50  text-center  bg-center bg-cover rounded-2xl bg-[url('./inter.avif')]   my-5">
        <h3 className="text-2xl pb-10  text-red-600">
          FEATURED TOURS PACKAGES
        </h3>
        <h1 className="text-6xl pb-10 text-indigo-800">
          {" "}
          Make a Difference With Your Online Resume!
        </h1>
        <button className=" border p-4 px-8 rounded bg text-red-700 hover:scale-bg-x-0 scale-y hover:text-white hover:border-0  hover:bg-red-700 hover:scale-110 transition-all duration-500">
          UPLODED YOUR CV
        </button>
      </div>
      {/* _________________________________________________________________________ */}

      <div className="bg-gray-400 w-375 h-250 pt-15 text-white ">
        <div className="text-center">
          <h3 className="text-xl mb-5 text-red-700 font-bold">
            OUR LATEST BLOG
          </h3>
          <h1 className="text-6xl font-bold text-gray-900 ">Our recent news</h1>
        </div>
        <div className="flex mt-20 mx-30 p-5 gap-5 ">
          <div className="    bg-white p-5 ">
            <img src={img1} className="w-150 rounded " alt="" />
            <h3 className="text-gray-800">!Properties</h3>
            <h3 className="text-gray-600 text-3xl font-bold py-2 ">
              Footprints in Time is perfect House in Kurashiki
            </h3>
            <h5 className="text-gray-400 flex  ">
              Read More{" "}
              <span className="mt-1 flex gap-0">
                <FaChevronRight />
                <FaChevronRight />
              </span>{" "}
            </h5>
          </div>
          <div className=" bg-white p-5">
            <img src={img2} className="w-150 rounded" alt="" />
            <h3 className="text-gray-800">!Properties</h3>
            <h3 className="text-gray-600 text-3xl font-bold py-2 ">
              Footprints in Time is perfect House in Kurashiki
            </h3>
            <h5 className="text-gray-400 flex  ">
              Read More{" "}
              <span className="mt-1 flex gap-0">
                <FaChevronRight />
                <FaChevronRight />
              </span>{" "}
            </h5>
          </div>
        </div>
      </div>
      {/* _________________________________________________________ */}

      <footer className="bg-black py-10 px-30">
        <form>
          <div className="text-white flex gap-20">
            <div>
              <h1 className="font-bold text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                ABOUT US
              </h1>
              <p className="mt-2 text-gray-300">
                Heaven’s blessings don’t <br />
                miss even the smallest days <br />
                — everything grows in <br /> its time, so look and see.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                CONTACT INFO
              </h1>
              <p className="mt-2 text-gray-300">
                Address : Fateh road churhat Sidhi (Madhya Pradesh).
                <br />
                <span className="hover:text-red-600">
                  Phone : +91 9516****42
                </span>
                <br />
                <span className="hover:text-red-600">
                  Email : arpit****@gmail.com
                </span>
              </p>
            </div>

            <div>
              <h1 className="font-bold text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                IMPORTANT LINK
              </h1>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-red-600">View Project</li>
                <li className="hover:text-red-600">Contact Us</li>
                <li className="hover:text-red-600">Testimonial</li>
                <li className="hover:text-red-600">Properties</li>
                <li className="hover:text-red-600">Support</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                NEW SELLER
              </h1>
              <p className="mt-2 text-gray-300">
                Heaven’s blessings don’t miss <br /> even the smallest days.
                appear creeping.
              </p>

              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="email"
                  id="email"
                  placeholder="you@email.com"
                  required
                  className="p-2 rounded w-1/2 bg-white text-black"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-lg">
                  <BsFillSendExclamationFill />
                </button>
              </div>
            </div>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default About;
