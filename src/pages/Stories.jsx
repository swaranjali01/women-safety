import React, { useState } from 'react';

const Stories = () => {
  const [stories, setStories] = useState([
    { id: 1, type: 'video', mediaUrl: '/api/placeholder/320/180', title: 'Stay Safe While Jogging', author: 'Jane Doe', likes: 120, comments: 15 },
    { id: 2, type: 'image', mediaUrl: '/api/placeholder/320/180', title: 'Self-Defense Basics', author: 'Alice Smith', likes: 98, comments: 22 },
    { id: 3, type: 'text', content: 'Remember to always be aware of your surroundings...', title: 'Situational Awareness', author: 'Emily Brown', likes: 75, comments: 8 },
    // Add more stories as needed
  ]);

  const [newStory, setNewStory] = useState({ title: '', content: '', type: 'text' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = stories.length + 1;
    setStories([...stories, { ...newStory, id: newId, author: 'Anonymous', likes: 0, comments: 0 }]);
    setNewStory({ title: '', content: '', type: 'text' });
  };

  return (
    <div className="community-page">
      <header className="bg-purple-600 text-white p-4">
        <h1 className="text-2xl font-bold">Women's Safety Community</h1>
      </header>

      <main className="p-4">
        <div className="stories-section">
          <h2 className="text-xl font-bold mb-4">Community Stories</h2>
          
          <div className="stories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stories.map(story => (
              <div key={story.id} className="story-card border rounded-lg overflow-hidden">
                {story.type === 'video' && (
                  <img src={story.mediaUrl} alt={story.title} className="w-full h-40 object-cover" />
                )}
                {story.type === 'image' && (
                  <img src={story.mediaUrl} alt={story.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="font-semibold">{story.title}</h3>
                  <p className="text-sm text-gray-600">By: {story.author}</p>
                  {story.type === 'text' && <p className="mt-2 text-sm">{story.content.substring(0, 100)}...</p>}
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>{story.likes} likes</span>
                    <span>{story.comments} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="new-story-form mt-8">
            <h3 className="text-lg font-semibold mb-2">Share Your Story</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newStory.title}
                onChange={(e) => setNewStory({...newStory, title: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Your story"
                value={newStory.content}
                onChange={(e) => setNewStory({...newStory, content: e.target.value})}
                className="w-full p-2 border rounded h-32"
                required
              />
              <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                Submit Story
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stories;