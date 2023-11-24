import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase'; 
import DataDisplay from '../DataDisplay';

const DataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firestore.collection('Integrity').get();
        const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Page</h1>
      <DataDisplay data={data} />
    </div>
  );
};

export default DataPage;
