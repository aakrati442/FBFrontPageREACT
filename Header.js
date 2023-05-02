import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Facebook" />
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
    </div>
  );
}

export default Header;
