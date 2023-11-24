import React, { useState } from 'react';
import { firestore } from '../../firebase';

const CombinedComponent = () => {
  const [line, setLine] = useState('');
  const [section, setSection] = useState('');
  const [dig, setDig] = useState('');
  const [inProgress, setInProgress] = useState(false);
  const [complete, setComplete] = useState(false);

  

  const addDataToFirestore = () => {
    firestore.collection('Integrity').add({
      line,
      section,
      dig,
      college: {
        inProgress: inProgress, 
        complete: complete
      }
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDataToFirestore();
    setLine('');
    setSection('');
    setDig('');
    setInProgress(false); 
    setComplete(false);
  };

  return (
    <div>
      <h1>Your React App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Line #: </label>
          <input
            type="text"
            value={line}
            onChange={(e) => setLine(e.target.value)}
          />
        </div>
        <div>
          <label>Section #: </label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </div>
        <div>
          <label>Dig #: </label>
          <input
            type="text"
            value={dig}
            onChange={(e) => setDig(e.target.value)}
          />
          <div>
          <label>
            In Progress:
            <input
              type="checkbox"
              checked={inProgress}
              onChange={() => setInProgress(!inProgress)}
            />
          </label>
        </div>
        <div>
          <label>
            Completed:
            <input
              type="checkbox"
              checked={complete}
              onChange={() => setComplete(!complete)}
            />
          </label>
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CombinedComponent;
