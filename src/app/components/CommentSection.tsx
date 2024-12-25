"use client"

import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  const addComment = () => {
    if (newComment.trim() === '' || name.trim() === '') return; // Prevent empty fields
    setComments([...comments, { name: name.trim(), text: newComment.trim() }]);
    setNewComment(''); 
    setName('');
  };

  return (
    <div className="max-w-4xl mx-auto px-3 py-8 bg-white rounded-lg m-6 shadow-md">
      <h2 className="text-xl font-bold mb-4 merriweather">Comments</h2>

      <div className="flex flex-col space-y-2 mb-4 opensans">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addComment}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 self-start"
        >
          Post
        </button>
      </div>

      {comments.length > 0 ? (
        <ul className="space-y-2">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="p-2 bg-white border border-gray-300 rounded-lg"
            >
              <p className="font-bold opensans">{comment.name}</p>
              <p className='poppins'>{comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 opensans">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentSection;
