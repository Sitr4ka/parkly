import React, { useState } from "react";
import img from "../../assets/img.svg";
import BookingModal from "../BookingModal";

function ParkingCard({ parking }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedParking, setSelectedParking] = useState(null);
  const [newBooking, setNewBooking] = useState({
    date: "",
    startTime: "",
    endTime: "",
    parking: "",
    spot: "",
  });

  const handleReserveClick = (parking) => {
    setSelectedParking(parking);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="card-container max-w-90 bg-amber-100 rounded-xl p-6 flex flex-col">
      <img className="mb-7" src={img} alt="parking-img" />

      <div className="parking-info">
        <div className="flex justify-between mb-3">
          <h4 className="font-extrabold text-[18px]">{parking.name}</h4>
          <div className="">stars</div>
        </div>

        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Address</label>
          <div className="font-light">{parking.address}</div>
        </div>

        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Available</label>
          <div className="font-light">
            {parking.availableSpots} / {parking.totalSpot}
          </div>
        </div>

        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Timetable</label>
          <div className="font-light">24/7</div>
        </div>

        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Price</label>
          <div className="font-light">{parking.pricePerHour} Ar/h</div>
        </div>
      </div>

      <button
        onClick={ () => handleReserveClick(parking)}
        className="bg-blue-700 cursor-pointer py-2 text-amber-100 rounded-md
         hover:bg-blue-500 hover:text-amber-300"
      >
        Reserve
      </button>

      <BookingModal 
        showModal={showModal}
        selectedParking={selectedParking}
      />
    </div>
  );
};

export default ParkingCard;
