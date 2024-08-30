import React  from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  

  return (
    <nav>
      <div>
        <p>BSafe</p>

        <ul>
          <li>
            <Link to="/incident-reporting" >
              Incident Reporting
            </Link>
          </li>
          <li>
            <Link to="/emergency-assistance">
              Emergency Assistance
            </Link>
          </li>
          <li>
            <Link to="/track-location">
              Track Location
            </Link>
          </li>
          <li>
            <Link to="/community">
              Community
            </Link>
          </li>
          <li>
            <Link to="/chatbot">
              Chatbot
            </Link>
          </li>
        </ul>

      
      </div>
    </nav>
  );
}

export default Navbar;
