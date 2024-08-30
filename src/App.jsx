import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import IncidentReporting from './pages/IncidentReporting'; 
import EmergencyAssistance from './pages/EmergencyAssistance'; 
import TrackLocation from './pages/TrackLocation'; 
import Community from './pages/Community'; 
import Chatbot from './pages/Chatbot'; 

function App() {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incident-reporting" element={<IncidentReporting />} />
        <Route path="/emergency-assistance" element={<EmergencyAssistance />} />
        <Route path="/track-location" element={<TrackLocation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
