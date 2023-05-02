import React, { useState } from 'react';
import Post from './Post';
import './NewsFeed.css';

function NewsFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'John Smith',
      timestamp: '5 hours ago',
      message: 'Just had a great time at the beach with my family!',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      name: 'Jane Doe',
      timestamp: '10 hours ago',
      message: 'Enjoying a cup of coffee and a good book on this lazy Sunday morning.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      likes: 0,
      comments: [],
    },
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="news-feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          timestamp={post.timestamp}
          message={post.message}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
          onLike={() => handleLike(post.id)}
          onComment={(comment) => handleComment(post.id, comment)}
        />
      ))}
    </div>
  );
}

export default NewsFeed;
