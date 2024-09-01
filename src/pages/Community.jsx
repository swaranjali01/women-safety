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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Our Community</h1>
      
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search the community..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Link to="/forums">
          <button
            style={{
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              backgroundColor: '#f8f9fa',
              color: '#007bff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Forums
          </button>
        </Link>
        <Link to="/resources">
          <button
            style={{
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              backgroundColor: '#f8f9fa',
              color: '#007bff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Resources
          </button>
        </Link>
        <Link to="/events">
          <button
            style={{
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              backgroundColor: '#f8f9fa',
              color: '#007bff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Events
          </button>
        </Link>
        <Link to="/stories">
          <button
            style={{
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              backgroundColor: '#f8f9fa',
              color: '#007bff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
            Stories
          </button>
        </Link>
        
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p>Select a tab to view content...</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '1rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ marginRight: '0.5rem' }}>{feature.icon}</span>
              {feature.title}
            </h3>
            <p style={{ marginBottom: '0.5rem' }}>{feature.description}</p>
            <button
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                cursor: 'pointer'
              }}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
