import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';

const SearchResults = () => {
  const [searchLine, setSearchLine] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const querySnapshot = await firestore
        .collection('Integrity')
        .where('line', '==', searchLine)
        .get();

      const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for line:', error);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <div>
        <label>Search Line:</label>
        <input
          type="text"
          value={searchLine}
          onChange={(e) => setSearchLine(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={`/update/${result.id}`}>
                  {`Line: ${result.line} Section: ${result.section} Dig: ${result.dig}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
