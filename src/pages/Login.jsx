import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen  ">
      <div className="w-96 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold mb-6 text-center">Login Here</h1>
        <form>
          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg "
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
}

export default Login;
