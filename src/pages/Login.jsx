import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
        <div className="w-16 h-16  rounded-full flex items-center justify-center">
          <AiOutlineUser className="w-16 h-16 rounded-full border-2 border-gray-300 bg-slate-50" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Welcome Back</h1>
        <form>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          New here?
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
