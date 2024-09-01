import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/user.png"
              alt="user icon"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800">SignUp</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full px-4 py-2 text-center text-gray-800 bg-gray-200 rounded-md "
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 text-center text-gray-800 bg-gray-200 rounded-md "
          />
          <input
            type="text"
            placeholder="Create Password"
            className="w-full px-4 py-2 text-center text-gray-800 bg-gray-200 rounded-md "
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 text-center text-gray-800 bg-gray-200 rounded-md "
          />
          <button
            type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
          >
            SignUp
          </button>
        </form>
        <p className="text-center text-gray-600">
        <Link to="/login" className="text-blue-500">
            Login
          </Link> if you have an Account
        </p>
      </div>
    </div>
  );
};

export default Signup;
