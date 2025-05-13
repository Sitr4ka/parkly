import React, { useState } from 'react';
import './newBooking.css';
import { TiTick } from 'react-icons/ti';
// import

const NewBooking = () => {
  const steps = ['Select spots', 'booking infos', 'payment'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

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
  return (
    <>
      <div className="mb-4">
        <div className="h-48 border border-primary"></div>
        <input type="hidden" placeholder="Choose spot" className="" />
      </div>
    </>
  );
}

function BookingInfo() {
  return (
    <>
      <div className="bookingInfo">
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Date</label>
          <div className="font-light"></div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Arrival-time</label>
          <div className="font-light"></div>
        </div>
        <div className="flex text-sm justify-between mb-3">
          <label className="font-medium">Departure-time</label>
          <div className="font-light"></div>
        </div>
      </div>
    </>
  );
}

function Payment() {
  return (
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
