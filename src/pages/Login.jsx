import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 bg-white p-8 rounded-lg shadow-md">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/user.png"
            alt="user icon"
          />
        </div>
        <h1 className="text-4xl font-semibold mb-6 text-center">Login Here</h1>
        <form>
          <div className="mb-4">
          
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-6">
          
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          New here?
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
