import React, { useState } from 'react';
import img from '../../assets/img.svg';
import './card.css';

// New
import ParkingLayout from '../../components/ParkingLayout';
import fakeSpots from '../../../data/fakeSpots';

function ParkingDetailsCard({ ParkingInfo }) {
  const [selectedParking, setSelectedParking] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReserveClick = (parking) => {
    setSelectedParking(parking);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedParking(null);
    setSelectedSlot(null);
  };

  const handleSlotClick = (index) => {
    if (index < selectedParking.availableSpots) {
      setSelectedSlot(index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedSlot !== null) {
      alert(`Réservation confirmée pour la place  n°${selectedSlot + 1}`);
      closeModal();
    } else {
      alert('Veuillez sélectionner une place');
    }
  };

  return (
    <>
      <div className="card-container p-6 flex flex-col">
        <img className="mb-7" src={img} alt="parking-img" />

        <div className="parking-info">
          <div className="flex justify-between mb-3">
            <h4 className="font-extrabold text-[18px]">{ParkingInfo.name}</h4>
            <div className="">stars</div>
          </div>

          <div className="flex text-sm justify-between mb-3">
            <label className="font-medium">Adresse</label>
            <div className="font-light">{ParkingInfo.address}</div>
          </div>

          <div className="flex text-sm justify-between mb-3">
            <label className="font-medium">Disponible</label>
            <div className="font-light">
              {ParkingInfo.availableSpots} / {ParkingInfo.totalSpot}
            </div>
          </div>

          <div className="flex text-sm justify-between mb-3">
            <label className="font-medium">Horaire</label>
            <div className="font-light">24/7</div>
          </div>

          <div className="flex text-sm justify-between mb-3">
            <label className="font-medium">Price</label>
            <div className="font-light">{ParkingInfo.pricePerHour} Ar/h</div>
          </div>
        </div>

        <button
          onClick={() => handleReserveClick(ParkingInfo)}
          className="bg-primary py-2 text-amber-200 rounded-md"
        >
          Réserver
        </button>
        {/* Reservation Modal */}
        {showModal && selectedParking && (
          <div className="fixed inset-x-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-lg">
              <h3 className="text-xl font-bold mb-4">Réserver - {selectedParking.name}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium">Date</label>
                  <input type="date" className="w-full border p-2 rounded" required />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium">Heure de début</label>
                    <input type="time" className="w-full border p-2 rounded" required />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium">Heure de fin</label>
                    <input type="time" className="w-full border p-2 rounded" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Choisir une place</label>
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: selectedParking.totalSpot }, (_, i) => (
                      <button
                        type="button"
                        key={i}
                        disabled={i >= selectedParking.available}
                        onClick={() => handleSlotClick(i)}
                        className={`p-2 rounded border text-sm transition-colors duration-200
                      ${
                        i >= selectedParking.availableSpots
                          ? 'bg-gray-400 cursor-not-allowed'
                          : selectedSlot === i
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-100 hover:bg-blue-300'
                      }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" onClick={closeModal} className="px-4 py-2 border rounded">
                    Annuler
                  </button>
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                    Confirmer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ParkingDetailsCard;
