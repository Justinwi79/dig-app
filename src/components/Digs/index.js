import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase.js";
import "./Digs.css";

function Digs() {
  const [digs, setDigs] = useState([]);

  useEffect(() => {
    const fetchDigs = async () => {
      const digsRef = firestore.collection("digs");
      const snapshot = await digsRef.get();
      const digList = snapshot.docs.map((doc) => doc.data());
      setDigs(digList);
    };

    fetchDigs();
  }, []);

  return (
    <div>
      <h1>Click Dig to View</h1>
      <ul>
        {digs.map((dig, index) => (
          <li
            key={index}
          >{`${dig.lineNumber}-${dig.digNumber}-${dig.sectionNumber}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Digs;
