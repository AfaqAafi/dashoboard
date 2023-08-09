import React, { useEffect, useState } from "react";
import { countries } from "../../utils/constant";
import { useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      engineerName: "",
      contact: "",
      email: "",
      location: "",
    },
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("formData", JSON.stringify(values));
      navigate("/");
    },
  });

  return (
    <div className="fixed left-0 right-0 top-0 flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-[298px] sm:w-[500px] p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Register
        </h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="engineerName" className="text-gray-600">
              Engineer Name
            </label>
            <input
              type="text"
              name="engineerName"
              id="engineerName"
              onChange={formik.handleChange}
              value={formik.values.engineerName}
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label htmlFor="contact" className="text-gray-600">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
              onChange={formik.handleChange}
              value={formik.values.contact}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              required
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label htmlFor="location" className="text-gray-600">
              Location
            </label>
            <select
              name="location"
              id="location"
              required
              onChange={formik.handleChange}
              value={formik.values.location}
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-600">Check</label>
            <div className="flex flex-wrap gap-2 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="checkbox1"
                  className="form-checkbox h-5 w-5 text-blue-400"
                />
                <span className="ml-2">Checkbox 1</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="checkbox2"
                  className="form-checkbox h-5 w-5 text-blue-400"
                />
                <span className="ml-2">Checkbox 2</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="checkbox2"
                  className="form-checkbox h-5 w-5 text-blue-400"
                />
                <span className="ml-2">Checkbox 3</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="checkbox1"
                  className="form-checkbox h-5 w-5 text-blue-400"
                />
                <span className="ml-2">Checkbox 4</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="checkbox2"
                  className="form-checkbox h-5 w-5 text-blue-400"
                />
                <span className="ml-2">Checkbox 5</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="checkbox2"
                  className="form-checkbox h-5 w-5 text-blue-400"
                />
                <span className="ml-2">Checkbox 6</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Register
          </button>
          <p className="text-sm font-semibold mt-2 text-center">
            Already have an account{" "}
            <Link className="underline text-blue-600" to="/login">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
