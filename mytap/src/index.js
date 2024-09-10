import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Main from './components/main';
import { First1 } from './components/First1';
import Main1 from './components/main1';
import ModbusData from './components/main1';

import Router from './components/Router';
import DataTable from './components/DataTable';
import "bootstrap/dist/css/bootstrap.min.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Main/> */}
    {/* <First1/> */}
    {/* <Desing/> */}
 {/* <ModbusData/> */}
       <Router/>
 {/* <DataTable/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
