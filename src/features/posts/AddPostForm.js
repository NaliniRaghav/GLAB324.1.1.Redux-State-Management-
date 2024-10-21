import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';  // Import the postAdded action

export const AddPostForm = () => {
  // Local component state for the form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Update title and content state when inputs change
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  // Function to handle form submission and dispatch the postAdded action
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),  // Generate a unique id for the new post
          title,
          content
        })
      );
      // Clear the form inputs after saving the post
      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
