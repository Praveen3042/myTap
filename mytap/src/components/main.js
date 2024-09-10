import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebaseConfig from './Firebaseconfig';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   // Add your Firebase configuration here
//   apiKey: "AIzaSyB7w1wJw_-YveslzDE_rmSRiydThh17hkQ",
//   authDomain: "pypush-f7357.firebaseapp.com",
//   databaseURL: "https://pypush-f7357-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "pypush-f7357",
//   storageBucket: "pypush-f7357.appspot.com",
//   messagingSenderId: "648241244464",
//   appId: "1:648241244464:web:f9ce1a1aee5a235b9cc0f5",
//   measurementId: "G-QGGE26ZSVE"
// };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const database = firebaseConfig()

const Main = () => {
  const [address, setAddress] = useState('Loading...');
  const [floatValue, setFloatValue] = useState('Loading...');
  const [timestamp, setTimestamp] = useState('Loading...');

  useEffect(() => {
    const modbusDataRef = ref(database, 'modbus_data');

    const handleData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAddress(data.address);
        setFloatValue(data.float_value);
        const formattedTimestamp = new Date(data.timestamp * 1000).toLocaleString();
        setTimestamp(formattedTimestamp);
      }
    };

    const unsubscribe = onValue(modbusDataRef, handleData, {
      onlyOnce: false,
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Modbus Data from Firebase</h1>
      <div className="data" style={{ marginTop: '20px' }}>
        <p>Address: {address}</p>
        <p>Float Value: {floatValue}</p>
        <p>Timestamp: {timestamp}</p>
      </div>
    </div>
  );
};

export default Main;
