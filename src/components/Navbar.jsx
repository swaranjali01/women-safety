import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '20px' }}>BSafe</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/incident-reporting">
            Incident Reporting
          </Link>
          <Link to="/emergency-assistance">
            Emergency Assistance
          </Link>
          <Link to="/track-location">
            Track Location
          </Link>
          <Link to="/community">
            Community
          </Link>
          <Link to="/chatbot">
            Chatbot
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
