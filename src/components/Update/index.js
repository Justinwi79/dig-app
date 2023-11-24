import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

const Update = () => {
  const { documentId } = useParams();
  const [updatedLine, setUpdatedLine] = useState('');
  const [updatedSection, setUpdatedSection] = useState('');
  const [updatedDig, setUpdatedDig] = useState('');
  const [updatedInProgress, setUpdatedInProgress] = useState('');
  const [updatedComplete, setUpdatedComplete] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnapshot = await firestore.collection('Integrity').doc(documentId).get();

        if (docSnapshot.exists) {
          const data = docSnapshot.data();
          setUpdatedLine(data.line || '');
          setUpdatedSection(data.section || '');
          setUpdatedDig(data.dig || '');
          setUpdatedInProgress(data.inProgress || '');
          setUpdatedComplete(data.completed || '');
        } else {
          console.log('Document not found.');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [documentId]);

  const handleUpdate = async () => {
    try {
      await firestore.collection('Integrity').doc(documentId).update({
        line: updatedLine,
        section: updatedSection,
        dig: updatedDig,
        'college.inProgress': updatedInProgress,
        'college.complete': updatedComplete
      });
  
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div>
      <h1>Update Component</h1>
      <div>
        <label>Updated First Name:</label>
        <input
          type="text"
          value={updatedLine}
          onChange={(e) => setUpdatedLine(e.target.value)}
        />
      </div>
      <div>
        <label>Updated Last Name:</label>
        <input
          type="text"
          value={updatedSection}
          onChange={(e) => setUpdatedSection(e.target.value)}
        />
      </div>
      <div>
        <label>Updated Email:</label>
        <input
          type="text"
          value={updatedDig}
          onChange={(e) => setUpdatedDig(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Update;
