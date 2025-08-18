import React from 'react'

const Contact = (event) => {
 const Fun1 = prevent
  return (
    <div className=" bg-white" >
      <div className="  rounded " >
     
      <form className="max-w-md mx-auto p-4 bg-gray-200 rounded" onClick={Fun1}>
         <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>
        <div className="mb-4 ">
          <label className="block text-gray-700 mb-2 w-3xl" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-100 hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      </div>
    </div>
  )
}

export default Contact;