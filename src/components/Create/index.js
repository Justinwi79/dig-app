import React from 'react';
import { Link } from 'react-router-dom';
import './Create.css';

function Create() {
  return (
    <div className="main-container">
      <h1>Create New Dig</h1>
      <Link to="/digs">View Existing Digs</Link>
      <Link to="/create">Add New Dig</Link>
      {/* Add components for existing digs and add new dig here */}
    </div>
  );
}

export default Create;
