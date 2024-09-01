import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Login from './pages/Login';
import IncidentReporting from './pages/IncidentReporting'; 
import EmergencyAssistance from './pages/EmergencyAssistance'; 
import TrackLocation from './pages/TrackLocation'; 
import Community from './pages/Community'; 
import Chatbot from './pages/Chatbot'; 
import Signup from './pages/Signup';
// import Video from './pages/Video';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/incident-reporting" element={<IncidentReporting />} />
        <Route path="/emergency-assistance" element={<EmergencyAssistance />} />
        <Route path="/track-location" element={<TrackLocation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/video" element={<Video />} /> */}
      </Routes>
    </>
  );
}

export default App;;
