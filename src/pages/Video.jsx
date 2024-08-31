import React from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import VideoLayout from "./VideoLayout";
import SelfDefenceVideo from './SelfDefenceVideo';

function Video() {
  return (
    <div>
      <SearchBar />
      <VideoLayout />
      <SelfDefenceVideo />
    </div>
  );
}

export default Video;
