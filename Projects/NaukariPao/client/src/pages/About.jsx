import React from 'react'
import ak from '../assets/Ricr.webp';
import ab from '../assets/snap.jpg'

const About = () => {
  return (
   <div className="bg-gray-900  m-5 rounded-2xl ">
        <div className=" rounded-2xl px-20   ">
          <h1 className="text-white top-100 text-9xl font-bold text-center relative ">About Us</h1>
          <img src={ak}  className="  w-screen h-screen opacity-50" alt="" />
        </div>

        {/* ____________________________________________________________________________________ */}


        <div>
        <div className='text-white  w-300 h-150 border-2 m-30  rounded inline-flex  bg-gray-800'>
          <div className=' p-20 '>
            <h4 className='  text-red-500' >WHAT WE ARE DOING</h4>  <br />
            <h1 className='text-4xl font-bold'>24k Talanted peoples are getting Jobs</h1> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, labore dolorum ducimus enim eveniet atque molestias numquam, reprehenderit eaque nostrum. Distinctio odit temporibus dolorum eveniet est quos hic perspiciatis porro reprehenderit! Aspernatur voluptate velit ipsa ut odit, quidem excepturi?</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nesciunt rerum, enim voluptatum error veniam magni est recusandae, fugiat a, qui repellendus ex porro modi nulla possimus ut? Magnam quae tempore inventore corrupti dolor accusantium quo aspernatur perferendis, laudantium similique non quasi eos cum earum est vel sapiente quis. Nihil.</p>
          </div>
          <div>
            <img src={ab} className='w-700 h-150 object-cover' alt="" />

          </div>
        </div>
        </div>


   </div>
  )
}

export default About
