import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
       <div className="">
       <nav className="flex items-center justify-between">
      <p className="text-black font-bold">BSafe</p>

      <ul className="flex justify-between gap-8 p-4">
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
      </ul>
    </nav>
       </div>
    </>
  );
}

export default Navbar;
