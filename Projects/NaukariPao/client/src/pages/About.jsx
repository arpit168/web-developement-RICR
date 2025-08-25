import React from 'react'
import ak from '../assets/Ricr.webp';

const About = () => {
  return (
   <div className="bg-gray-900   m-5  rounded-2xl ">
        <div className=" rounded-2xl px-25   ">
          <h1 className="text-white top-100 text-7xl font-bold text-center relative ">About Us</h1>
          <img src={ak}  className="  w-screen h-screen opacity-30" alt="" />
        </div>

        
   </div>
  )
}

export default About
