import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
function firebaseConfig() {
    

const firebaseConfig = {
  apiKey: "AIzaSyB7w1wJw_-YveslzDE_rmSRiydThh17hkQ",
  authDomain: "pypush-f7357.firebaseapp.com",
  databaseURL: "https://pypush-f7357-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pypush-f7357",
  storageBucket: "pypush-f7357.appspot.com",
  messagingSenderId: "648241244464",
  appId: "1:648241244464:web:f9ce1a1aee5a235b9cc0f5",
  measurementId: "G-QGGE26ZSVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 return getDatabase(app);

};

export default firebaseConfig   ;
