import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div>
      <h2>Data from Firestore:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Line: {item.line} Section: {item.section} Dig: {item.dig}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
