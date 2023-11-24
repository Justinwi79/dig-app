import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

const ResultDetails = () => {
  const { documentId } = useParams();
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docSnapshot = await firestore.collection('Integrity').doc(documentId).get();

        if (docSnapshot.exists) {
          const data = docSnapshot.data();
          setResultData(data);
        } else {
          console.log('Document not found.');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [documentId]);

  return (
    <div>
      <h1>Result Details for:</h1>
      {resultData && (
        <div>
          <h2>Line {`${resultData.line}`}</h2>
          <h2>Section {`${resultData.section}`}</h2>
          <h2>Dig {resultData.dig}</h2>
          {resultData.college && (
            <>
              <p>In Progress: {resultData.college.inProgress ? 'Yes' : 'No'}</p>
              <p>Completed: {resultData.college.complete ? 'Yes' : 'No'}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultDetails;
