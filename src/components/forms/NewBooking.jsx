import React, { useState } from 'react';
import './newBooking.css';
import { TiTick } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import Spot from '../Spot';
import { addSpot,setReservation,setStartime } from '../../../data/newBooking';
import ParkingLayout from '../ParkingLayout';
import { createBooking } from '../../api/bookingApi';
import client from '../../api/client';
const NewBooking = () => {
  const steps = ['Select spots', 'booking infos', 'payment'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const dispatch =useDispatch()
  const newBooking= useSelector((state)=>state.newBooking) 
  return (
    <>
      <div className=" relative border flex  flex-col text-center justify-start py-6 px-8 h-[420px]">
        <div className="flex justify-between mb-8">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep == i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}
            >
              <div className="step mb-2">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>

        {/* Forms */}
        {currentStep == 1 && <SelectSpot />}
        {currentStep == 2 && <BookingInfo />}
        {currentStep == 3 && <Payment />}

        {/* End Forms */}

        {!complete && (
          <button
            className="btn bottom-2.5"
            onClick={() => {
              currentStep == steps.length + 1 ? setComplete(true) : setCurrentStep((prev) => prev - 1);
            }}
          >
            {currentStep > steps.length ? 'Finish' : 'Previous'}
          </button>
        )}

        {!complete && (
          <button
            className="btn mt-3 bottom-2.5"
            onClick={() => {
              currentStep == steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep == steps.length ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    </>
  );
};

function SelectSpot() {
  const dispatch =useDispatch()
  const newBooking= useSelector((state)=>state.newBooking)
   const [selected, setSelected] = useState(new Set());
  const handleToggle = (id) => {
  
      setSelected((prev) => {
        const newSelected = new Set(prev);
        if (newSelected.has(id)) {
          newSelected.delete(id);
        } else {
          newSelected.add(id);
          // if (onSelect) {
          //   onSelect({
          //     id,
          //     date,
          //     from: fromTime,
          //     to: toTime,
          //   });
          // }
        }
        return newSelected;
      });
    
     
       
  
    };
  // dispatch(setStartime("4"))
  return (
    <>
      <div className="mb-4">
        {newBooking.starTime}
        <div className="h-48 border border-primary">
         
          <div className='grid grid-cols-4 gap-2'>
             {newBooking.spot.map((spot)=>(
             <Spot
               key={spot.id}
                id={spot.id}
                code={spot.code}
                status={spot.status}
                  selected={true}
                onToggle={handleToggle}
             
              />
          ))}
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center overflow-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 bg-gray-50 p-3 rounded-2xl'>

            </div>
        </div>
        
        <input type="hidden" placeholder="Choose spot" className="" />
      </div>
    </>
  );
}

function BookingInfo() {
  const newBooking= useSelector((state)=>state.newBooking)
  const handleCreateBoking=async()=>{
    try{
const data={
      // spotId:'e1f40292-511a-408d-9904-81d6b73dbe83',
      spotId:newBooking.spot[0].id,
      startTime:'2025-05-14 06:40:56.757',
      endTime:'2025-05-14 06:40:56.757',
      status:'PENDING'
    }
    const r = await createBooking(data)
    console.log(data)
    console.log(r)
    }catch(e){
      console.error()
    }
    
  }
  return (
    <>
      <div className="bookingInfo">
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Date</label>
          <div className="font-light"></div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Arrival-time</label>
          <div className="font-light">{newBooking.starTime}  </div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Departure-time</label>
          <div className="font-light">{newBooking.endTime}</div>
        </div>
        <div>
          <button className=' bg-amber-300 border-t-cyan-600'
            onClick={handleCreateBoking}
          >create booking</button>
        </div>
      </div>
    </>
  );
}

function Payment() {
  return (
    // console.log(r)
    <>
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="paymentType">Payment</label>
        <select className='border  w-full py-2 ps-3 rounded-md' name="paymentMethod" id="paymentMethod">
            <option value="MVola">Mvola</option>
            <option value="Airtel Money">Airtel Money</option>
            <option value="Orange Money">Orange Money</option>
        </select>
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="number">Phone number</label>
        <input className='formInput' type="number" name="paymentType" id="paymentType" />
      </div>
    </>
  );
}
export default NewBooking;
