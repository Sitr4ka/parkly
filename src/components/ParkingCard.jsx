import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
import parking2 from './../assets/parkings/parking2.jpg'

export default function ParkingCard({ parking }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden max-w-sm">

      <div className="h-48 w-full overflow-hidden">
        <img
          src={parking2}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-6 flex flex-col">
      
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 ">
            {parking.name}
          </h3>
          <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
            {parking.totalSpots} spots
          </div>
        </div>

      
        <p className="text-gray-600 mb-3 flex items-center text-sm">
          <FiMapPin className="mr-1" />
          {parking.address}
        </p>

     
        <p className="text-gray-600 mb-4 flex items-center text-sm">
          <FiClock className="mr-1" />
          Ouvert: {parking.openTime} - {parking.closeTime}
        </p>
        <p className="text-xl font-bold text-gray-800 mb-3">
              {parking.pricePerHour} Ar/hour
        </p>
          <button
            onClick={parking.onBook}
            className="bg-blue-600 w-full hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg whitespace-nowrap"
          >
            Réserver
          </button>
        </div>

    </div>
  );
}
