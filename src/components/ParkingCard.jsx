import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ParkingCard({ ParkingInfo }) {
  const fullStars = Math.floor(ParkingInfo.rating);
  const halfStar = ParkingInfo.rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex flex-col items-stretch p-6 bg-gray-50 rounded-2xl shadow-2xl transform hover:scale-105 duration-300 ease-in-out ">
      <div className="img-container relative w-[350px] h-49 border object-cover text-center mb-6">
        {ParkingInfo.isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs uppercase">
            Nouveau
          </span>
        )}

        {/* <img
          className=""
          src={ParkingInfo.image}
          alt={ParkingInfo.name}
        /> */}
      </div>
      <div className="parking-description mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl text-gray-700">{ParkingInfo.name}</h3>
          <div className="flex items-center">
            {/* Étoiles dynamiques */}
            {Array.from({ length: fullStars }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <FaRegStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2">{ParkingInfo.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="address" className='text-[1rem] font-medium'>Adresse</label>
          <p className="text-gray-500 text-sm ">📍 {ParkingInfo.address}</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="address" className='text-[1rem] font-medium'>Total</label>
          <p className="text-gray-600 text-sm">
            🚗 <span className="font-semibold text-gray-800">{ParkingInfo.availableSpots}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="address" className='text-[1rem] font-medium'>Prix</label>
          <p className="text-gray-600 text-sm">💰 {ParkingInfo.pricePerHour} Ar/heure</p>
        </div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="address" className='text-[1rem] font-medium'>Adresse</label>
          <p className="text-gray-600 text-sm">🕒 Ouvert 24h/24</p>
        </div>
      </div>
      <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
        Réserver maintenant
      </button>
    </div>
  );
}

export default ParkingCard;
