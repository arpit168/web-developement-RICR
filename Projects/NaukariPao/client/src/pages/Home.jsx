import React from "react";
import anokha from "../assets/anokha.png";
import { MdInput } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";
import { SiCoinmarketcap } from "react-icons/si";
import { TbDeviceMobileCog } from "react-icons/tb";
import { LuConstruction } from "react-icons/lu";
import { GiProcessor } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import ak from "../assets/Ricr.webp";
import aa from "../assets/elisa.png";
import ab from "../assets/rostel.png";
import ac from "../assets/veolia.png";
import ad from "../assets/zggo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import za from "../assets/snap.jpg";
import bb from "../assets/snap.jpg";
import img1 from "../assets/view.jpg";
import img2 from "../assets/view1.jpg";
import { FaChevronRight } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <div className=" rounded-2xl mx-5    ">
        <h1 className="text-white top-125 text-9xl font-bold text-center relative ">
          <span className="text-pink-800 animate-pulse">WELCOME </span>TO HOME
        </h1>
        <img src={ak} className="  w-screen h-screen opacity-20" alt="" />
      </div>
      <div
        className="flex justify-around  m-5 rounded
       text-2xl h-155 bg-gradient-to-r from-gray-700 to-red-800 text-white "
      >
        <div className="pt-30">
          <h1 className="text-8xl font-bold mb-15 ">
            <span className="text-8xl font-bold text-pink-600 overflow-hidden  animate-bounce inline-block  border-b-4 ">
              Find
            </span>{" "}
            the <br /> most exciting <br /> startup Jobs.
          </h1>
          <span className="border p-5 rounded bg-white ">
            <input
              type="text"
              placeholder="Job title or Keywords"
              className=" text-black border-r focus:ring-0 outline-0"
            />
            <input
              type="text"
              placeholder="Location BD"
              className=" text-black ms-2  focus:ring-0 outline-0"
            />
          </span>
          <button className=" bg-pink-700 p-5 rounded font-bold hover:text-gray-400">
            Find Job
          </button>
        </div>
        <div>
          <img src={anokha} alt="" className="w-100   " />
        </div>
      </div>
      {/* _______________________________________________________________________________ */}
      <div className=" bg-gray-900 h-auto w-375 mx-5  border-t rounded">
        <div className=" text-center ">
          <h3 className="text-red-600 text-xl p-30  font-bold pb-15">
            FEATURED TOURS PACKAGES
          </h3>
          <h1 className="text-gray-300 text-7xl   ">
            <span className="text-pink-500 animate-pulse">Browse</span> Top
            Categories
          </h1>
        </div>

        <div className="row mt-20">
          <div className=" gap-10 text-center justify-center flex  text-white">
            <span className="text-2xl p-10 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <FaUserAstronaut className="ms-20 text-4xl" />
              <h5 className="my-2 ">Design & Creative</h5>
              <span className="text-pink-600">(653)</span>
            </span>
            <span className="text-2xl p-10 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <LuComputer className="ms-30 text-4xl" />
              <h5>Design & Developement</h5>
              <span className="text-pink-600">(651)</span>
            </span>
            <span className="text-2xl p-10 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <SiCoinmarketcap className="ms-20 text-4xl" />
              <h5>Sales and Marketing</h5>
              <span className="text-pink-600">(652)</span>
            </span>
            <span className="text-2xl p-10 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <TbDeviceMobileCog className="ms-20 text-4xl" />
              <h5>Mobile Application</h5>
              <span className="text-pink-600">(654)</span>
            </span>
          </div>
        </div>
        <div className="row mt-20">
          <div className=" gap-10 text-center justify-center flex  text-white">
            <span className="text-2xl p-10 px-15 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <LuConstruction className="ms-15 text-4xl" />
              <h5 className="my-2 ">Construction</h5>
              <span className="text-pink-600">(653)</span>
            </span>
            <span className="text-2xl p-10 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <GiProcessor className="ms-30 text-4xl" />
              <h5>Information Technology</h5>
              <span className="text-pink-600">(651)</span>
            </span>
            <span className="text-2xl p-10 px-20 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <MdOutlineMapsHomeWork className="ms-10 text-4xl" />
              <h5>Real Estate</h5>
              <span className="text-pink-600">(652)</span>
            </span>
            <span className="text-2xl p-10 px-20 bg-gray-900 hover:bg-gray-950 hover:text-pink-500 rounded-xl  ">
              <SlNote className="ms-15 text-4xl" />
              <h5>Content Writer</h5>
              <span className="text-pink-600">(654)</span>
            </span>
          </div>
          <button className=" ms-150 p-3 mb-25  m-5 font-bold  border  text-2xl text-gray-500 rounded hover:bg-pink-700 hover:text-white duration-200">
            BROWSE ALL SELECTORS
          </button>
        </div>
      </div>

      {/* _______________________________________________________________ */}

      <div className=" h-100 pt-30  mx-5 opacity-50  text-center  bg-center bg-cover rounded-2xl bg-[url('./inter.avif')] ">
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
      {/* _______________________________________________________________________ */}

      <div>
        <div className="text-white bg-gradient-to-r bg-red-800 to-gray-800 h-auto pb-10 pt-40 mx-5 rounded-2xl ">
          <h3 className="text-center text-xl mb-10">Recent Jobs</h3>
          <h1 className="text-center text-6xl font-bold">Featured Jobs</h1>
          {/* _______________________________________________________________________________________________ */}

          <div className="flex mt-25 ms-65 rounded-2xl hover:scale-102 duration-200 bg-gray-900 hover:bg-gray-950 w-245 py-10 px-5">
            <img src={aa} width={100} alt="" />
            <div className="m-2  ">
              <div className="grid  ">
                <div className="flex gap-90">
                  <h1 className="text-3xl hover:text-red-500 w-75 ">
                    {" "}
                    Digital Marketer{" "}
                  </h1>
                  <button className="border px-3 w-25 py-2 rounded-4xl text-gray-500 hover:bg-indigo-700 hover:text-black">
                    Full TIme
                  </button>
                </div>
                <div className="flex gap-15 mt-2 text-gray-400 ">
                  <span>Creative agency</span>
                  <span className="flex">
                    <IoLocationSharp className="mt-1" /> Rewa, Madhya Pradesh
                  </span>
                  <span>₹45k -₹55k</span>
                </div>
                <span className=" text-white text-right me-10 font-bold">
                  7 hours ago
                </span>
              </div>
            </div>
          </div>
          {/* _____________________________________________________________________________ */}

          <div className="flex mt-5 ms-65 rounded-2xl hover:scale-102 duration-200 bg-gray-900 hover:bg-gray-950 w-245 py-10 px-5">
            <img src={ab} width={100} alt="" />
            <div className="m-2  ">
              <div className="grid  ">
                <div className="flex gap-90">
                  <h1 className="text-3xl hover:text-red-500 w-75 ">
                    {" "}
                    Digital Marketer{" "}
                  </h1>
                  <button className="border px-3 w-25 py-2 rounded-4xl text-gray-500 hover:bg-indigo-700 hover:text-black">
                    Full TIme
                  </button>
                </div>
                <div className="flex gap-15 mt-2 text-gray-400 ">
                  <span>Creative agency</span>
                  <span className="flex">
                    <IoLocationSharp className="mt-1" /> Rewa, Madhya Pradesh
                  </span>
                  <span>₹45k -₹55k</span>
                </div>
                <span className=" text-white text-right me-10 font-bold">
                  7 hours ago
                </span>
              </div>
            </div>
          </div>
          {/* _____________________________________________________________________________ */}

          <div className="flex mt-5 ms-65 rounded-2xl hover:scale-102 duration-200 bg-gray-900 hover:bg-gray-950 w-245 py-10 px-5">
            <img src={ac} width={100} alt="" />
            <div className="m-2  ">
              <div className="grid  ">
                <div className="flex gap-90">
                  <h1 className="text-3xl hover:text-red-500 w-75 ">
                    {" "}
                    Digital Marketer{" "}
                  </h1>
                  <button className="border px-3 w-25 py-2 rounded-4xl text-gray-500 hover:bg-indigo-700 hover:text-black">
                    Full TIme
                  </button>
                </div>
                <div className="flex gap-15 mt-2 text-gray-400 ">
                  <span>Creative agency</span>
                  <span className="flex">
                    <IoLocationSharp className="mt-1" /> Rewa, Madhya Pradesh
                  </span>
                  <span>₹45k -₹55k</span>
                </div>
                <span className=" text-white text-right me-10 font-bold">
                  7 hours ago
                </span>
              </div>
            </div>
          </div>
          {/* _____________________________________________________________________________ */}

          <div className="flex mt-5 ms-65 rounded-2xl hover:scale-102 duration-200 bg-gray-900 hover:bg-gray-950 w-245 py-10 px-5">
            <img src={ad} width={100} alt="" />
            <div className="m-2  ">
              <div className="grid  ">
                <div className="flex gap-90">
                  <h1 className="text-3xl hover:text-red-500 w-75 ">
                    {" "}
                    Digital Marketer{" "}
                  </h1>
                  <button className="border px-3 w-25 py-2 rounded-4xl text-gray-500 hover:bg-indigo-700 hover:text-black">
                    Full TIme
                  </button>
                </div>
                <div className="flex gap-15 mt-2 text-gray-400 ">
                  <span>Creative agency</span>
                  <span className="flex">
                    <IoLocationSharp className="mt-1" /> Rewa, Madhya Pradesh
                  </span>
                  <span>₹45k -₹55k</span>
                </div>
                <span className=" text-white text-right me-10 font-bold">
                  7 hours ago
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* _____________________________________________________________________________ */}

        <div className=" bg-cover bg-center text-center h-screen w-370 mt-10 text-white pt-30 bg-[url('/blue.jpg')] bg-no-repeat object  ">
          <div className="text-center">
            <h3 className="text-red-600 text-2xl font-bold">APPLY PROCESS</h3>
            <h1 className="font-bold text-6xl">How it works</h1>
          </div>
          <div className="flex justify-around my-20   ">
            <div className="card w-100 h-100 border p-10 rounded-2xl bg-gray-950 hover:scale-103 transition-all duration-700">
              <span className="flex  items-center justify-center text-8xl transition-transform duration-500 hover:[transform:rotateY(180deg)_translateX(20px)]">
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

        {/* ___________________________________________________________________________________________ */}
        <div className="w-375 pt-20 h-150 text-center rounded-2xl   bg-gray-700">
          <div className="w-150  ">
            <img
              src={za}
              className=" w-50 h-50 rounded-full object-cover overflow-hidden relative left-160 mb-5 hover:scale-115 transition-transform duration-700 "
              alt=""
            />
            <div className="text-white relative left-110 ">
              <h3 className="text-5xl font-bold">Arpit Gupta</h3>
              <h5 className=" text-2xl m-5">Creative Designer</h5>
              <p>
                <i>
                  " I am at an age Where I just want to be fit and healthy our
                  bodies are Our responsability! So start caring for your body
                  and it will care for you. Eat clean it eill care for you and
                  workout hard. "
                </i>
              </p>
            </div>
          </div>
        </div>

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt nesciunt rerum, enim voluptatum error veniam magni est
                recusandae, fugiat a, qui repellendus ex porro modi nulla
                possimus ut? Magnam quae tempore inventore corrupti dolor
                accusantium quo aspernatur perferendis, laudantium similique non
                quasi eos cum earum est vel sapiente quis. Nihil.
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
              <img src={bb} className="w-700 h-150 object-cover" alt="" />
            </div>
          </div>
        </div>
        {/*_____________________________________________________________________________________________________ */}

        <div className="bg-gray-400 w-375 h-250 pt-15 text-white ">
          <div className="text-center">
            <h3 className="text-xl mb-5 text-red-700 font-bold">
              OUR LATEST BLOG
            </h3>
            <h1 className="text-6xl font-bold text-gray-900 ">
              Our recent news
            </h1>
          </div>
          <div className="flex mt-20 mx-30 p-5 gap-5 ">
            <div className="bg-white p-5 ">
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
        {/* _________________________________________________________________________________________________ */}
      </div>
    </div>
  );
};

export default Home;
