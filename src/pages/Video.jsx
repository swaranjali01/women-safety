import React from 'react';
import SearchBar from './SearchBar'; // Adjust the path as needed
import VideoLayout from "./VideoLayout";
import SelfDefenceVideo from './SelfDefenceVideo';
import RealStory from './RealStory';

function Video() {
  return (
    <div>
      <SearchBar />
      <VideoLayout />
      <SelfDefenceVideo />
      <RealStory />
    </div>
  );
}

export default Video;
