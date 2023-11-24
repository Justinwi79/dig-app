import React, { useState } from 'react';
import { firestore } from '../../firebase';

const Search = () => {
  const [searchLastName, setSearchLastName] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async () => {
    try {
      const querySnapshot = await firestore
        .collection('Integrity')
        .where('college.attending', '==', true)
        .get();
  
      const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for attending students:', error);
    }
  };



  return (
    <div>
      <h1>Search Component</h1>
      <div>
        <label>Search Last Name:</label>
        <input
          type="text"
          value={searchLastName}
          onChange={(e) => setSearchLastName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                {`Name: ${result.firstName} ${result.lastName}, Email: ${result.email}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
