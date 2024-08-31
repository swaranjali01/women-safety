import React, { useState } from 'react';

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('forums');

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
        {['forums', 'resources', 'events', 'stories'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              backgroundColor: activeTab === tab ? '#007bff' : '#f8f9fa',
              color: activeTab === tab ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        {activeTab === 'forums' && <p>Forum content here...</p>}
        {activeTab === 'resources' && <p>Resources content here...</p>}
        {activeTab === 'events' && <p>Events content here...</p>}
        {activeTab === 'stories' && <p>Stories content here...</p>}
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

export default CommunityPage;