import React, { useState } from 'react';
import Comment from './Comment';
import './Post.css';

function Post({ name, timestamp, message, image, likes, comments, onLike, onComment }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onComment
