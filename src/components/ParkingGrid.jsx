import React from 'react';
import ParkingCard from './ParkingCard';
import { parkings } from '../../data/parkings';

export default function Parking() {
  return (
    <section id="products" className="py-20 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Nos parkings disponibles
      </h2>

      <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8
                    bg-blue-50 rounded-2xl shadow-lg p-10 border border-gray-300"
      >
        {parkings &&
          parkings.map((parking) => (
            <li key={parking.id}>
              <ParkingCard ParkingInfo={parking} />
            </li>
          ))}
      </ul>

      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 
                      transition duration-300 ease-in-out text-lg"
        >
          Voir plus
        </button>
      </div>
    </section>
  );
}
