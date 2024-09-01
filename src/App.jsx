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
<<<<<<< HEAD
import Forums from './pages/Forums';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Stories from './pages/Stories';


=======
import Signup from './pages/Signup';
>>>>>>> c78faed51b5b3819d256b28dc4e1c9276ebf18a6
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
        <Route path="/forums" component={Forums} />
        <Route path="/resources" component={Resources} />
        <Route path="/events" component={Events} />
        <Route path="/stories" component={Stories} />
      </Routes>
    </>
  );
}

export default App;;
