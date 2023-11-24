import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

const CompletedDetails = () => {
  const { documentId } = useParams();
  const [completedData, setCompletedData] = useState(null);

  useEffect(() => {
    const fetchCompletedData = async () => {
      try {
        const docSnapshot = await firestore.collection('Integrity').doc(documentId).get();

        if (docSnapshot.exists) {
          const data = docSnapshot.data();
          setCompletedData(data);
        } else {
          console.log('Document not found.');
        }
      } catch (error) {
        console.error('Error fetching completed document:', error);
      }
    };

    fetchCompletedData();
  }, [documentId]);

  return (
    <div>
      <h1>Completed Details Page</h1>
      {completedData && (
        <div>
          <h2>{`${completedData.firstName} ${completedData.lastName}`}</h2>
          <p>Email: {completedData.email}</p>
          <p>Attending: {completedData.college.attending ? 'Yes' : 'No'}</p>
          <p>Graduated: {completedData.college.graduated ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default CompletedDetails;
