//dashbord
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseConfig from './Firebaseconfig';
import './styles.css';
import Navbar1 from './navbar';

// Initialize Firebase
const database = firebaseConfig()

const ModbusData = () => {
  const [modbusData, setModbusData] = useState([]);

  useEffect(() => {
    const modbusDataRef = ref(database, 'modbus_data');

    const unsubscribe = onValue(modbusDataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.keys(data).map(key => ({
          key: key,
          ...data[key]
        }));
        setModbusData(dataArray);
      } else {
        setModbusData([]);
      }
    });

    // Cleanup listener on component unmount
    return () => off(modbusDataRef);
  }, []);

  return (
    <div>
   
  
      <div id="data-container" className="mainbox">
        {modbusData.length > 0 ? (
          modbusData.map(item => (
            <div key={item.key} className="databox">
              {/* <h2>Address: {item.key}</h2>
              <p>Name: {item.name}</p>
              <p>Reading Value: {item.float_value}</p>
              <p>Alte Value: {item.alte_value}</p>
              <p>Timestamp: {new Date(item.timestamp * 1000).toLocaleString()}</p> */}

              <div>Name: {item.name} &emsp;Address: {item.key}</div>
              <hr/>
              <div>Reading Value: {item.float_value}</div>
              <div>Set Value: {item.alte_value}</div>
              <div>date&Time: {new Date(item.timestamp * 1000).toLocaleString()}</div>
             
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );

  
  
};

export default ModbusData;
