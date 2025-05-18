// Reservation.jsx
import { useState } from 'react';
import ParkingLayout from '../../components/ParkingLayout';
import ReservationForm from '../../components/ReservationForm';
import Sidebar from '../../components/SideBar';
<<<<<<< HEAD
import Navbar from '../../components/Navbar';
import fakeSpots from '../../../data/fakeSpots';

const Reservation = () => {
  // 👉 État central pour stocker la réservation sélectionnée
=======
import ParkingLayout from '../../components/ParkingLayout'
import ReservationForm from '../../components/ReservationForm'
import fakeSpots from '../../../data/fakeSpots'
import NewBooking from '../../components/forms/NewBooking';
import Modal from '../../components/Modal';
import { ModalHeader,ModalBody,ModalFooter } from '../../components/Modal';
import { FaTimes } from 'react-icons/fa';
import BookingInfo from '../../components/forms/BookingInfo';
export default function Reservation() {
>>>>>>> 330384c (new booking with modals)
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [show,setShow]=useState(false)
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 bg-white border-gray-400 overflow-hidden">
            <Sidebar />
          </aside>

          <div className="flex-1 bg-gray-100 overflow-y-auto">
            <header className="h-16 bg-white shadow px-4 flex items-center">
              <Navbar />
            </header>
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
              {/* à modifier */}
              <div className="grid grid-cols-[2fr_1fr] gap-6 h-full">
                {/* 🔽 onSelect va remonter les infos vers Reservation */}
                <ParkingLayout spots={fakeSpots} onSelect={setSelectedReservation} />
                {/* 🔽 on passe les données vers ReservationForm */}
                <ReservationForm selectedReservation={selectedReservation} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
