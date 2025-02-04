'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Trash } from 'lucide-react'; // Import Trash icon

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComment = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  // Function to delete a comment
  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-4 text-purple-500">Comment Box</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment"
        className="border border-purple-500 mt-3 w-80 p-2"
      />
      <br />
      <Button
        className="bg-purple-400 text-white w-36 mt-3"
        onClick={addComment}
      >
        Add Comment
      </Button>

      <div className="mt-2">
        <h2>All Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment!</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index} className="flex justify-between items-center border-b py-2">
                {data}
                <Button
                  className="bg-red-500 text-white px-2 py-1 ml-4 flex items-center justify-center"
                  onClick={() => deleteComment(index)}
                  size="icon"
                >
                  <Trash /> {/* Delete Icon */}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
