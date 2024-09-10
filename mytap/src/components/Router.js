import React from 'react'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import ModbusData from './main1';
import DataTable from './DataTable';
import Navbar1 from './navbar';
const Router = () => {

  return (
    <BrowserRouter>
    <Navbar1/>
        <div>
          <Routes>
            <Route path="/" element={<ModbusData/>} />
            <Route path="/datatable" element={<DataTable/>} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default Router