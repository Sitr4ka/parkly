import React from "react";
import {parkings} from "../../data/parkings"
import ParkingCard from "../../components/cards/ParkingCard";

const NewReservationPage = () => {
  return (
    <>
      <ul className="list-none flex flex-wrap gap-8 justify-evenly">

        {/* Display all available parking */}
        {parkings.map((parking) => (
          <li key={parking.id}>
            <ParkingCard parking={parking} />
          </li>
        ))}
        
      </ul>
    </>
  );
};

export default NewReservationPage;
