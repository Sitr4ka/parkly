import React, { useState } from 'react';
import ParkingDetailsCard from './cards/ParkingDetailsCard';
import { parkings } from '../../data/parkings';

const ParkingList = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <header className="flex gap-2 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Trouver un parking"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Rechercher</button>
      </header>

      <section id="products" className="flex flex-wrap justify-center gap-6 bg-gray-100">
        <ul
          className="flex gap-8 flex-wrap overflow-x-hidden"
        >
          {parkings &&
            parkings.map((parking) => (
              <li key={parking.id}>
                <ParkingDetailsCard ParkingInfo={parking}/>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default ParkingList;
