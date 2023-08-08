import React from "react";

const SetPassEmail = () => {
  return (
    <div className="fixed left-0 right-0 top-0 flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Set Password
        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
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
              id="password"
              className="block mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPassEmail;
