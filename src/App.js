import React from 'react';
import { PostsList } from './features/posts/PostsList';
import { Navbar } from './app/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostsList />
    </div>
  );
}

export default App;
