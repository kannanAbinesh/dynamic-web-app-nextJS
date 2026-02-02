"use client";

import React from 'react';
import './notFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-title">Uh-oh!</h1>
        
        <p className="error-description">
          We can't seem to find the page you're looking for!
        </p>
        
        <p className="error-code">Error code: 404</p>
        
        <div className="suggestions">
          <p className="suggestions-title">Here are some helpful links instead:</p>
          <ul className="suggestions-list">
            <li><a href="/">Home</a></li>
            <li><a href="/search">About us</a></li>
            <li><a href="/help">Contact us</a></li>
            <li><a href="/hosting">Blogs</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;