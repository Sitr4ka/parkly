import React from "react";
import { parkings } from "../../../data/parkings";
import ParkingCard from "../../components/cards/ParkingCard";

const NewReservationPage = () => {
  return (
    <div
      className="overflow-hidden min-h-screen relative p-4 pb-8 left-60 
            w-[calc(100vw-15rem)] bar bg-gradient-to-r text-[#0d1b2a]"
    >
      <ul className="list-none flex flex-wrap gap-8 justify-evenly">
        {parkings.map((parking) => (
          <li key={parking.id}>
            <ParkingCard parking={parking} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewReservationPage;
