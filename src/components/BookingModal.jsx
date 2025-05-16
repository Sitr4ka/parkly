import React, { useState } from "react";
import img from "../assets/img.svg";
import { TiTick } from "react-icons/ti";

const BookingModal = ({ showModal, selectedParking, setSelectedParking }) => {
  const steps = ["schedule", "spot", "validation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({
    bookingDate: "",
    startTime: "",
    endTime: "",
    spot: "",
  });

  // Event Handler
  const handleBtnTrigger = (e) => {
    const isNext = e.target.innerHTML == "Next";
    if (isNext) {
      if (currentStep < 3) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed left-60 flex items-center justify-center inset-0 backdrop-blur-xs bg-black/10 z-40">
          <div className="flex bg-amber-100 rounded-xl px-10 py-12 w-[850px] h-[520px] shadow-shadow z-50">
            <div className="pr-6 pl-12 pt-4 w-1/2 flex flex-col justify-evenly">
              <h1 className="text-5xl font-bold">{selectedParking.name}</h1>
              <img src={img} alt="parking-img" />
            </div>

            <div className="relative w-1/2 border-t-6 border-x-3 border-b-3 rounded-3xl py-6 px-8 border-blue-500">
              <div className="flex justify-between">
                {steps?.map((step, i) => (
                  <div
                    key={i}
                    className={`step-item ${currentStep == i + 1 && "active"} 
                  ${(i + 1 < currentStep || isCompleted) && "completed"}}`}
                  >
                    <div className="step mb-2">
                      {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
                    </div>
                    <p className="text-gray-500">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mx-6 mt-3">
                {currentStep == 1 && (
                  <Schedule formData={formData} setFormData={setFormData} />
                )}
                {currentStep == 2 && (
                  <Spot formData={formData} setFormData={setFormData} />
                )}
                {currentStep == 3 && (
                  <Validation formData={formData} setFormData={setFormData} />
                )}
              </div>

              <div className="absolute bottom-8 step-trigger w-80 flex justify-between ps-6 pe-8">
                <button
                  onClick={handleBtnTrigger}
                  className="w-20 hover:bg-blue-400 hover:border-blue-700 hover:text-amber-100 cursor-pointer py-2 border border-gray-600 rounded-md text-gray-400"
                >
                  Previous
                </button>
                <button
                  onClick={handleBtnTrigger}
                  className="w-20 hover:bg-blue-400 hover:border-blue-700 hover:text-amber-100 cursor-pointer py-2 border border-gray-600 rounded-md text-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;

const Schedule = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <form method="post" className="mt-5">
        <div className="input-group mb-4">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            name="bookingDate"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
            value={formData.bookingDate}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="input-group mb-4">
            <label className="block text-sm font-medium mb-1">Start Time</label>
            <input
              type="time"
              name="startTime"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
              value={formData.startTime}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-4">
            <label className="block text-sm font-medium mb-1">End Time</label>
            <input
              type="time"
              name="endTime"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};

function Spot({ formData, setFormData }) {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const toggleSelectedSpot = (e, spot) => {
    setSelectedSpot((prev) => {
      const newSpot = prev === spot ? null : spot;

      setFormData((formData) => ({
        ...formData,
        spot: newSpot ? `A${newSpot}` : "",
      }));

      return newSpot;
    });
    // setSelectedSpot((prev) => (prev == spot ? null : spot));
    // setFormData((formData) => ({...formData, "spot": selectedSpot ? "" : e.target.innerText}));
  };

  return (
    <>
      <div className="h-53 flex flex-col justify-between px-6 py-3 gap-2">
        <div className="grid grid-cols-4 gap-2 overflow-hidden">
          {Array.from({ length: 14 }).map((_, index) => {
            const spotIndex = index + 1;

            return (
              <div
                key={spotIndex}
                className={`text-center border cursor-pointer hover:bg-green-200} 
                  ${
                    `A${spotIndex}` == formData.spot
                      ? "bg-green-900 text-white"
                      : ""
                  }`}
                onClick={(e) => toggleSelectedSpot(e, spotIndex)}
              >
                {`A${spotIndex}`}
              </div>
            );
          })}
        </div>

        <div className="h-10 flex justify-between items-center py-6">
          <label className="font-bold">Selected Spot:</label>
          <input
            type="text"
            name="spotData"
            className={`w-16 text-center border cursor-pointer bg-blue-600 text-white`}
            value={`${formData.spot}`}
          />
        </div>
      </div>
    </>
  );
}

const Validation = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <label className="">Date:</label>
        <input
          className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
          type="date"
          name="confirmedDate"
          value={formData.bookingDate}
          readOnly
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="">Start Time:</label>
        <input
          className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
          type="time"
          name="confirmedStartTime"
          value={formData.startTime}
          readOnly
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="">End Time:</label>
        <input
          className="w-2/3 px-3  py-2 border border-gray-300 rounded-md bg-blue-200"
          type="time"
          name="confirmedEndTime"
          value={formData.endTime}
          readOnly
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="">Spot:</label>
        <input
          className="w-2/3 px-3  py-2 border border-gray-300 rounded-md bg-blue-200"
          type="text"
          name="spot"
          value={formData.spot}
          readOnly
        />
      </div>
    </>
  );
};
