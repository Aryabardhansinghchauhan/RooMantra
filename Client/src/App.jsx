import React from 'react'
import Navbar from './Component/Navbar.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Footer from './Component/Footer.jsx';
import Allrooms from './Pages/Allrooms.jsx';
import Roomdetail from './Pages/Roomdetail.jsx';
import MyBookings from './Pages/MyBookings.jsx';
import HotelReg from './Component/HotelReg.jsx';

// Owner imports
import Layout from './Pages/hotelOwner/Layout.jsx';
import Dashboard from './Pages/hotelOwner/Dashboard.jsx'; 
import AddRoom from './Pages/hotelOwner/AddRoom.jsx';     
import ListRoom from './Pages/hotelOwner/ListRoom.jsx';
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext.jsx';

const App = () => {
  const location = useLocation();
  // using startsWith is slightly safer than includes to avoid false positives
  const isOwnerPath = location.pathname.startsWith("/owner"); 
   const {showHotelReg} = useAppContext();

  return (
    <div>
      <Toaster/>
      {/* Hide Navbar if we are in the owner section */}
      {!isOwnerPath && <Navbar/>}
      
      {showHotelReg && <HotelReg/>}
      
      <div className='min-h-[70vh]'>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home/>} />
          <Route path='/rooms/' element={<Allrooms/>} />
          <Route path='/rooms/:id' element={<Roomdetail/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
          
          {/* Owner Routes (Nested) */}
          {/* Note: The closing tag </Route> goes AFTER the children */}
          <Route path='/owner' element={<Layout/>}> 
            <Route index element={<Dashboard/>}/>
            <Route path='add-room' element={<AddRoom/>}/>
            <Route path='list-room' element={<ListRoom/>}/> {/* Fixed 'elememt' typo */}
          </Route>
          
        </Routes>
      </div>

      {/* Hide Footer if we are in the owner section */}
      {!isOwnerPath && <Footer/>}
    </div>
  )
}

export default App