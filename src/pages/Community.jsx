import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const features = [
    { icon: '💬', title: 'Discussion Forums', description: 'Connect and share experiences' },
    { icon: '📚', title: 'Articles and Resources', description: 'Access helpful information' },
    { icon: '📅', title: 'Events and Workshops', description: 'Join community activities' },
    { icon: '❤️', title: 'Inspirational Stories', description: 'Read uplifting experiences' },
    { icon: '👥', title: 'Support Groups', description: 'Find mutual support' },
    { icon: '❓', title: 'Help and FAQ', description: 'Get answers to common questions' },
    { icon: '🚨', title: 'Reporting and Feedback', description: 'Help improve our community' },
    { icon: '🎓', title: 'Learning Modules', description: 'Enhance your knowledge and skills' },
  ];

  return (
    <div className="community-page max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Community</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search the community..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <Link to="/forums">
          <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-300">
            Forums
          </button>
        </Link>
        <Link to="/resources">
          <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-300">
            Resources
          </button>
        </Link>
        <Link to="/events">
          <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-300">
            Events
          </button>
        </Link>
        <Link to="/stories">
          <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded hover:bg-gray-300">
            Stories
          </button>
        </Link>
      </div>

      <div className="mb-4">
        <p>Select a tab to view content...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="feature-card bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="flex items-center mb-2">
              <span className="mr-2 text-2xl">{feature.icon}</span>
              <span className="font-semibold">{feature.title}</span>
            </h3>
            <p className="mb-2">{feature.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
