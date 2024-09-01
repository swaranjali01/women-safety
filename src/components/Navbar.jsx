import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-white">
        <nav className="flex items-center justify-between p-4">
          <p className="text-black font-bold">BSafe</p>

          <ul className="flex justify-between gap-8">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/incident-reporting">Incident Reporting</Link>
            </li>
            <li>
              <Link to="/emergency-assistance">Emergency Assistance</Link>
            </li>
            <li>
              <Link to="/track-location">Track Location</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/chatbot">Chatbot</Link>
            </li>
            {/* <li>
              <Link to="/video">Video</Link>
            </li> */}
          </ul>

          <div className="flex items-center gap-4">
            <img
              src="data:image/jpeg;base64,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" 
              alt="Profile"
              className="h-6 w-6 rounded-full"
            />
            <button className="bg-blue-500 text-white h-9 w-16 rounded-lg">
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
