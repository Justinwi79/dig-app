import React, { useState } from 'react';
import { firestore } from '../../firebase';

const CombinedComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState(false);
  const [graduated, setGraduated] = useState(false);

  

  const addDataToFirestore = () => {
    firestore.collection('Integrity').add({
      firstName,
      lastName,
      email,
      college: {
        attending: attending, 
        graduated: graduated
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
    setFirstName('');
    setLastName('');
    setEmail('');
    setAttending(false); 
    setGraduated(false);
  };

  return (
    <div>
      <h1>Your React App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
          <label>
            Attending:
            <input
              type="checkbox"
              checked={attending}
              onChange={() => setAttending(!attending)}
            />
          </label>
        </div>
        <div>
          <label>
            Graduated:
            <input
              type="checkbox"
              checked={graduated}
              onChange={() => setGraduated(!graduated)}
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
