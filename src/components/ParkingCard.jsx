import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ParkingCard({ ParkingInfo }) {
  const fullStars = Math.floor(ParkingInfo.rating);
  const halfStar = ParkingInfo.rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="relative p-6 bg-amber-[80] rounded-2xl shadow-2xl transform hover:scale-105 duration-300 ease-in-out ">
      {ParkingInfo.isNew && (
        <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs uppercase">
          Nouveau
        </span>
      )}

      <img
        src={ParkingInfo.image}
        alt={ParkingInfo.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

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

      <p className="text-gray-500 text-sm mb-2">📍 {ParkingInfo.address}</p>

      <p className="text-gray-600 text-sm mb-2">
        🚗 Places dispo :{' '}
        <span className="font-semibold text-gray-800">{ParkingInfo.availableSpots}</span>
      </p>

      <p className="text-gray-600 text-sm mb-2">💰 {ParkingInfo.pricePerHour} Ar/heure</p>

      <p className="text-gray-600 text-sm mb-6">🕒 Ouvert 24h/24 &nbsp;|&nbsp; 🔒 Sécurisé</p>

      <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
        Réserver maintenant
      </button>
    </div>
  );
}

export default ParkingCard;
