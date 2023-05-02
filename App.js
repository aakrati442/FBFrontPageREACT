import React from 'react';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <NewsFeed />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
