import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="main-container">
      <h1>Choose Path</h1>
      <Link to="/digs">View Existing Digs</Link>
      <Link to="/create">Add New Dig</Link>
    </div>
  );
}

export default Home;
