import React from 'react';
import img from '../../assets/img.svg';
import './card.css';

const ParkingDetailsCard = () => {
  return (
    <div className="card-container p-6 flex flex-col">
      <img className="mb-7" src={img} alt="parking-img" />
      <div className="parking-info">
        <div className="flex justify-between mb-3">
          <h4 className="font-extrabold text-[18px]">Parking Centre-Ville</h4>
          <div className="">stars</div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Adresse</label>
          <div className="font-light">123 rue example, ville</div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Disponible</label>
          <div className="font-light">9/16</div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Horaire</label>
          <div className="font-light">24/7</div>
        </div>
      </div>
      <button className='bg-primary py-2 text-amber-200 rounded-md' type="button">Réserver</button>
    </div>
  );
};

export default ParkingDetailsCard;
