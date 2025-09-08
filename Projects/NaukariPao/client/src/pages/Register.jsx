import React, { useState } from "react";
import { GiArchiveRegister } from "react-icons/gi";
import toast from "react-hot-toast";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    Fname: "",
    number: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Validate = () => {
    let isvalid = true;
    const err = {};

    if (registerData.Fname.length < 3) {
      err.Fname = "Name should be at least 3 characters";
      isvalid = false;
    }
    if (!/^[A-Za-z ]+$/.test(registerData.Fname)) {
      err.Fname = "Name should be at least 3 characters";
      isvalid = false;
    }

    if (registerData.number.length !== 10) {
      err.number = "Please enter a 10-digit number";
      isvalid = false;
    }

    if (
      !/^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        registerData.email
      ) ||
      registerData.email.length < 10
    ) {
      err.email = "Enter a valid email like you@gmail.com";
      isvalid = false;
    }

    // if (
    //   !/^[A-Za-z0-9._]+@gmail.com$/.test(registerData.email) ||
    //   registerData.email < 10
    // ) {
    //   err.email = "Enter a valid email like you@gmail.com";
    //   isvalid = false;
    // }

    if (
      !/^[A-za-z0-9@#$%*&]+$/.test(registerData.password) ||
      registerData.password !== 6
    ) {
      err.password = "Password should be at least 6 characters";
      isvalid = false;
    }

    if (registerData.password !== registerData.Cpassword) {
      err.Cpassword = "Passwords do not match";
      isvalid = false;
    }

    setError(err);
    return isvalid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    if (!Validate()) {
      setLoading(false);
      toast.error(" Please Solve the Errors");
      return;
    }

    setTimeout(() => {
      console.log(registerData);
      setRegisterData({
        Fname: "",
        number: "",
        email: "",
        password: "",
        Cpassword: "",
      });
      setLoading(false);
      toast.success("  Registration Successful");
    }, 2000);
  };

  return (
    // ____------------------------------------------___-------------------___---------------------------___------------
    <form
      className="bg-[url('/bgi.jpg')] bg-cover bg-center h-163"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center  ">
        <div className="bg-gray-800  border rounded-xl p-10 mt-2 w-125 h-auto ">
          <div className="flex gap-2  text-3xl font-bold text-center text-blue-500 border-b-2 hover:text-red-700 hover:border-b-red-500">
            <GiArchiveRegister className="mt-2" />
            <h1>Register Form</h1>
          </div>
          <br />
          <div>
            <label className="text-gray-300 flex" htmlFor="Fname">
              <MdDriveFileRenameOutline className="mt-1 mr-2 text-xl" />
              Full Name :-{" "}
            </label>

            <input
              type="text"
              name="Fname"
              value={registerData.Fname}
              onChange={handleChange}
              className="border w-3/4 rounded mt-2 text-white"
              placeholder="Kim-e-jong"
            />
            {error.Fname && (
              <p className="text-center text-red-500 text-sm">{error.Fname}</p>
            )}
          </div>
          <br />
          <div>
            <label className="text-gray-300 flex" htmlFor="number">
              <FaPhoneVolume className="mt-1 mr-2 text-xl" />
              Phone :-{" "}
            </label>

            <input
              type="number"
              name="number"
              value={registerData.number}
              onChange={handleChange}
              className="border w-3/4 rounded mt-2 text-white"
              placeholder="+91 0123456789"
            />
            {error.number && (
              <p className="text-center text-red-500 text-sm">{error.number}</p>
            )}
          </div>
          <br />
          <div>
            <label className="text-gray-300 flex" htmlFor="email">
              <FaEnvelope className="mt-1 mr-2 text-xl" />
              Email :-{" "}
            </label>

            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              className="border w-3/4 rounded mt-2 text-white"
              placeholder="you@email.com"
            />
            {error.email && (
              <p className="text-center text-red-500 text-sm">{error.email}</p>
            )}
          </div>
          <br />
          <div>
            <label className="text-gray-300 flex" htmlFor="password">
              <FaLock className="mt-1 mr-2 text-xl" />
              Password :-{" "}
            </label>

            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              className="border w-3/4 rounded mt-2 text-white"
              placeholder="********"
            />
            {error.password && (
              <p className="text-center text-red-500 text-sm">
                {error.password}
              </p>
            )}
          </div>
          <br />
          <div>
            <label className="text-gray-300 flex" htmlFor="Cpassword">
              <FaLock className="mt-1 mr-2 text-xl" />
              Confirm Password :-{" "}
            </label>

            <input
              type="password"
              name="Cpassword"
              value={registerData.Cpassword}
              onChange={handleChange}
              className="border w-3/4 rounded mt-2 text-white"
              placeholder="********"
            />
            {error.Cpassword && (
              <p className="text-center text-red-500 text-sm">
                {error.Cpassword}
              </p>
            )}
          </div>
          <br />
          <button
            type="submit"
            className="w-full border rounded-lg shadow p-2 hover:bg-blue-800 bg-blue-600 text-red-200 hover:text-white"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
