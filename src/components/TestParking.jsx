// TestParking.js
import React from 'react';
import ParkingLayout from './ParkingLayout';

const fakeSpots = [
  {
    id: 'A1',
    status: 'free',
    bookings: [{ date: '2025-05-05', from: '08:00', to: '09:00' }],
  },
  {
    id: 'A2',
    status: 'free',
    bookings: [
      { date: '2025-05-05', from: '10:00', to: '11:00' }, // ne chevauche pas
    ],
  },
  {
    id: 'A3',
    status: 'free',
    bookings: [], // vide → doit être libre
  },
  {
    id: 'A4',
    status: 'free',
    // pas de bookings → doit être libre aussi
  },
  {
    id: 'A5',
    status: 'free',
    bookings: [
      { date: '2025-05-05', from: '07:30', to: '08:15' }, // chevauche un peu
    ],
  },
];

export default function TestParking() {
  const handleSelect = (spotInfo) => {
    console.log('Sélection :', spotInfo);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start pt-10">
      <ParkingLayout spots={fakeSpots} onSelect={handleSelect} />
    </div>
  );
}
