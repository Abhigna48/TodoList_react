import React from 'react'
import Navigation from './Navbar';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
const MainPage = () => {
  return (
    <div >
      <Navigation/>
      <div className='row g-0 ' style={{margin:"40px 20px 20px 20px",marginBottom:"50px"}}>
        <div className='col-1 col-sm-2 col-md-2'>
        <Sidebar/>
        </div>
        <div className='col-11 col-sm-10 col-md-10 bg-white' style={{marginTop:"70px"}}>
          <Outlet/>
        </div>
      </div>
      
    </div>
  )
}

export default MainPage
