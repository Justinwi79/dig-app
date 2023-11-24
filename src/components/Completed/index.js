import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';

const Completed = () => {
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    const fetchCompletedList = async () => {
      try {
        const querySnapshot = await firestore
          .collection('Integrity')
          .where('college.graduated', '==', true)
          .get();

        const completedData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCompletedList(completedData);
      } catch (error) {
        console.error('Error fetching completed list:', error);
      }
    };

    fetchCompletedList();
  }, []);

  return (
    <div>
      <h1>Completed Page</h1>
      <ul>
        {completedList.map((entry) => (
          <li key={entry.id}>
            <Link to={`/completed/${entry.id}`}>
              {`${entry.firstName} ${entry.lastName}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
