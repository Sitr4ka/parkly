// Reservation.jsx
import { useState } from 'react';
import ParkingLayout from '../../components/ParkingLayout';
import ReservationForm from '../../components/ReservationForm';
import Sidebar from '../../components/SideBar';
import Navbar from '../../components/Navbar';
import fakeSpots from '../../../data/fakeSpots';

const Reservation = () => {
  // 👉 État central pour stocker la réservation sélectionnée
  const [selectedReservation, setSelectedReservation] = useState(null);

  return (
    <div className="h-screen flex flex-col">
      <header className="h-16 bg-white shadow px-4 flex items-center">
        <Navbar />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r overflow-y-auto">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="grid grid-cols-[2fr_1fr] gap-6 h-full">
            {/* 🔽 onSelect va remonter les infos vers Reservation */}
            <ParkingLayout
              spots={fakeSpots}
              onSelect={setSelectedReservation}
            />
            {/* 🔽 on passe les données vers ReservationForm */}
            <ReservationForm selectedReservation={selectedReservation} />
          </div>
        </main>
        </div>
      </div>
  );
};

export default Reservation;
