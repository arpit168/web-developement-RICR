import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/naukari.webp";


const Navbar = () => {
  return (
    <div className="bg-gray-800 p-3 flex justify-between  text-white sticky top-0 z-50 ">
      <div className="flex gap-5  ">
      <img src={pic} alt="" width={50} className="rounded-4xl  " />
      <h1 className="text-3xl font-bold mt-2">  Naukari-Pao </h1>
      
      </div>
      <div className=" space-x-5 mt-2  ">
        <Link to={"/home"} className="hover:text-amber-300 hover:border-b-2 ">
          Home
        </Link>
        <Link to={"/about"} className="hover:text-amber-300 hover:border-b-2 ">
          about
        </Link>
        <Link to={"contact"} className="hover:text-amber-300 hover:border-b-2 ">
          Contact
        </Link>
        <Link to={"/login"} className=" bg-amber-600 hover:text-amber-300 hover:border-2 px-5 pb-2 ms-100 rounded-3xl">
            Login
          </Link>
          <Link
            to={"/register"}
            className=" bg-amber-600 hover:text-amber-300 hover:border-2 px-4 pb-2 rounded-3xl"
          >
            Register
          </Link>
       
      </div>
    </div>
  );
};

export default Navbar;
