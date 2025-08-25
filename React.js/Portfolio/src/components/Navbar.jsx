import React from "react";
import { FaDownload } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className=" sticky top-0 px-4 flex justify-between bg-gray-900  p-3  bg[url]">
      <div className="  text-4xl font-bold  text-yellow-600  my-4 ">
        {" "}
        █▓▒▒░░░Arpit Gupta - Full stack Developer░░░▒▒▓█{" "}
      </div>
      
      <button className=" bg-yellow-500 w-25 h-10 rounded-2xl mt-5 hover:scale-110 transition-transform duration-200">
        Hire me
      </button>
    </div>
  );
};

export default Navbar;
