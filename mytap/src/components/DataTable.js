//dashbord
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off ,update} from 'firebase/database';
import firebaseConfig from './Firebaseconfig';
import './styles.css';
import Navbar1 from './navbar';
import Table from 'react-bootstrap/Table';



// Initialize Firebase
const database = firebaseConfig()


const DataTable = () => {
  const [modbusData, setModbusData] = useState([]);
  const [popup, setPopupState] = useState(false);
    const [editItemID, setEditItemID] = useState('');
    const [updateAge, setUpdateAge] = useState('');

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

  //pop
  const popedite = (item) => {
    setEditItemID(item.key);
    setUpdateAge(item.alte_value);
    setPopupState(true);
};
 // Update Firebase with New Value
 const handleUpdate = () => {
  if (editItemID) {
    const itemRef = ref(database, `modbus_data/${editItemID}`);
    update(itemRef, { alte_value: updateAge })
      .then(() => {
        console.log('Value updated successfully');
        alert('Value updated successfully')
        setPopupState(false); // Close the popup after update
      })
      .catch((error) => {
        console.error('Error updating value:', error);
      });
  } else {
    console.error("No item selected for update");
  }
};
//styyle
const tableContainerStyle = {

  overflowY: 'auto',
};
  return (
    <div >
     
      <div id="data-container" style={tableContainerStyle}>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Address</th>
                    <th>name</th>
                    <th>Reading Value</th>
                    <th>setValue</th>
                    <th>Date & Time</th>
                    
                </tr>
            </thead>
            <tbody>
            {modbusData.length > 0 ? (
              modbusData.map(item => (
                        <tr key={item.key}>
                            <td>{item.key}</td>
                            <td>{item.name}</td>
                            <td>{item.float_value}</td>
                            <td>{item.alte_value}</td>
                            <td>{new Date(item.timestamp * 1000).toLocaleString()}</td>
                            <td><button onClick={() => popedite(item)}>Edit</button></td>
                        </tr>
            
          ))
        ) : (
          <p>No data available</p>
        )}

            </tbody>
            </Table>
            {popup && (
                <div className="popup">
                    <div className="input">
                         <label>set value</label>
                        <input type='number' placeholder='edit the Age' value={updateAge} onChange={e => setUpdateAge(e.target.value)} /><br />
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            )}
      </div>
    </div>
  );

  
  
};

export default DataTable;
