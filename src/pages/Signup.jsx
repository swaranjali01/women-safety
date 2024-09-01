import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <AiOutlineUser className="w-16 h-16 rounded-full border-2 border-gray-300 bg-slate-50" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
          />
          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
