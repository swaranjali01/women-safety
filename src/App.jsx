import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import Login from './pages/Login';
import IncidentReporting from './pages/IncidentReporting'; 
import EmergencyAssistance from './pages/EmergencyAssistance'; 
import TrackLocation from './pages/TrackLocation'; 
import Community from './pages/Community'; 
import Chatbot from './pages/Chatbot'; 
import Forums from './pages/Forums';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Stories from './pages/Stories';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/incident-reporting" element={<IncidentReporting />} />
        <Route path="/emergency-assistance" element={<EmergencyAssistance />} />
        <Route path="/track-location" element={<TrackLocation />} />
        <Route path="/" component={Community} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/video" element={<Video />} /> */}
        <Route path="/forums" element={ <Forums />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </>
  );
}

export default App;
