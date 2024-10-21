import React from 'react';
import { Navbar } from './app/Navbar';   
import { AddPostForm } from './features/posts/AddPostForm';   
import { PostsList } from './features/posts/PostsList';  

function App() {
  return (
    <div className="App">
      <Navbar />   
      <AddPostForm />   
      <PostsList />   
    </div>
  );
}

export default App;
