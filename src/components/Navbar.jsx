import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className="bg-gray-800 shadow-lg">
        <nav className="flex items-center justify-between p-4">
          <p className="text-white text-xl font-bold">BSafe</p>

          <ul className="flex justify-between gap-8">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/incident-reporting"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Incident Reporting
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/chatbot"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Chatbot
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <AiOutlineUser className="h-8 w-8 rounded-full border-2 border-gray-300 bg-slate-50" />
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition duration-300"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
