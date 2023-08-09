import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [validEmail, setValidEmail] = useState("");
  const [onFocusValidate, setOnFocusValidate] = useState(false);
 
  useEffect(() => {
    let clearId = setTimeout(() => {
      setOnFocusValidate(false);
    }, 2000);

    return () => {
      clearTimeout(clearId);
    };
  }, [onFocusValidate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const storedEmail = JSON.parse(localStorage.getItem("formData"))?.email;
      if (values.email === storedEmail) {
        // Redirect to home page
        navigate("/");
      } else {
        // Handle incorrect email
        setValidEmail("Invalid email or password. Please try again.");
        setOnFocusValidate(true);
      }
    },
  });

  
  return (
    <div className="fixed left-0 right-0 top-0 flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-[250px] sm:w-[450px] p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Login
        </h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={formik.handleChange}
              value={formik.values.email}
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          {validEmail && onFocusValidate && (
            <p className="text-red-600">{validEmail}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Login
          </button>
          <p className="text-sm mt-2 font-semibold text-center">
            Don't have an account{" "}
            <Link className="underline text-blue-600" to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
