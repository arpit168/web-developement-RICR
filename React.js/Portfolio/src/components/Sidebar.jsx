import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { SiKnowledgebase } from "react-icons/si";
import { MdPhone } from "react-icons/md";
import arpit from "../assets/arpit's pic.jpg";

const Sidebar = () => {
  return (
    <div className="rounded-2xl mt-5 p-5">
      <div className=" bg-gray-900  p-1  rounded-2xl flex  flex-col gap-2  ">
        <div className=" bg-gray-500 p-5 rounded-xl">
          <img
            src={arpit}
            width={200}
            className=" rounded-2xl  hover:scale-105 transition-transform duration-200 pb-5  "
            alt=""
          />
          <span className="text-white font-bold text-2xl border border-t-amber-600 w-50 rounded-xl ms-5 p-1">
            Arpit Gupta
          </span>
        </div>
        <Link
          to={"/"}
          className="flex gap-3 items-center w-50  border-2 rounded-3xl p-1  ps-10 ms-5 bg-amber-200 hover:scale-110 transition-transform duration-200 "
        >
          <FaHome />
          <b>
            <a href="#home">Home</a>
          </b>
        </Link>

        <Link
          to={"/about"}
          className="flex gap-3 items-center w-50  border-2 rounded-3xl p-1  ps-10 ms-5 bg-amber-200 hover:scale-110 transition-transform duration-200 "
        >
          <FcAbout />
          <b>
            <a href="#about">About</a>
          </b>
        </Link>
        <Link
          to={"/projects"}
          className="flex gap-3 items-center w-50  border-2 rounded-3xl p-1  ps-10 ms-5 bg-amber-200 hover:scale-110 transition-transform duration-200"
        >
          <GrProjects />
          <b>
            <a href="#projects">Projects</a>
          </b>
        </Link>
        <Link
          to={"/education"}
          className="flex gap-3 items-center w-50  border-2 rounded-3xl p-1  ps-10 ms-5 bg-amber-200 hover:scale-110 transition-transform duration-200"
        >
          
          <SiKnowledgebase />
          <b>
            <a href="education">Education</a>
          </b>
        </Link>
        <Link
          to={"/contact"}
          className="flex gap-3 items-center w-50  border-2 rounded-3xl p-1  ps-10 ms-5 bg-amber-200 hover:scale-110 transition-transform duration-200"
        >
          
          <MdPhone />
          <b>
            <a href="#contact">Contact</a>
          </b>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
