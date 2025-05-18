import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/SideBar';
import ParkingLayout from '../../components/ParkingLayout'
import ReservationForm from '../../components/ReservationForm'
import fakeSpots from '../../../data/fakeSpots'
import NewBooking from '../../components/forms/NewBooking';
import Modal from '../../components/Modal';
import { ModalHeader,ModalBody,ModalFooter } from '../../components/Modal';
import { FaTimes } from 'react-icons/fa';
import BookingInfo from '../../components/forms/BookingInfo';
export default function Reservation() {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [show,setShow]=useState(false)
  return (
    <div className="h-screen flex flex-col">

    <header className="h-16  shadow  flex items-center fixed w-full z-10">
      <Navbar />
    </header>


    <div className="pt-16 flex flex-1 overflow-hidden">

      <aside className="w-16 sm:w-20 md:w-24 lg:w-64  overflow-y-auto transition-all duration-300">
        <Sidebar />
      </aside>


      <main className="flex-1 p-4 lg:p-6 bg-gray-100 overflow-y-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 h-full">
          
          <ParkingLayout spots={fakeSpots} onSelect={setSelectedReservation} />
         
          </div>
         <button  onClick={()=>setShow(true)}  className="text-center px-4 py-2 bg-blue-600 text-white rounded">Booking</button>
          <BookingInfo show={show} setShow={setShow}/>
      </main>
    </div>
  </div>
  );
}
