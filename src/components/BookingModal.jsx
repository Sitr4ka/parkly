import React, { useState } from "react";
import img from "../assets/img.svg";
import { TiTick } from "react-icons/ti";

const BookingModal = ({ showModal, selectedParking }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    spot: "",
  });
  const steps = ["schedule", "spot", "validation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

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

              <div className="mx-6 mt-5">
                {currentStep == 1 && <Schedule data={formData} />}
                {currentStep == 2 && <Spot />}
                {currentStep == 3 && <Validation />}
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

const Schedule = ({ data }) => {
  const { startDate, endDate, spot } = data;
  return (
    <>
      <form method="post">
        <div className="input-group mb-4">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
            value="2025-05-05"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="input-group mb-4">
            <label className="block text-sm font-medium mb-1">Start Time</label>
            <input
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
              value="17:00"
            />
          </div>
          <div className="input-group mb-4">
            <label className="block text-sm font-medium mb-1">End Time</label>
            <input
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
              value="20:00"
            />
          </div>
        </div>
      </form>
    </>
  );
};

const Spot = () => {
  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-3 border px-3 py-2">
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R1-C1</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R1-C2</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R1-C3</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R1-C4</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R2-C1</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R2-C2</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R2-C3</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R2-C4</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R3-C1</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R3-C2</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R3-C3</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R3-C4</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R4-C1</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center bg-green-500">R4-C2</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R4-C3</div>
        <div className="w-12 text-sm px-1 py-2 hover:bg-green-200 cursor-pointer border rounded-md text-center">R4-C4</div>
      </div>
    </>
  );
};

const Validation = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <label className="">Date:</label>
        <input
          type="date"
          className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
          name=""
          id=""
          readOnly
          value="2025-05-05"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="">Start Time:</label>
        <input
          type="time"
          className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
          name=""
          id=""
          readOnly
          value="17:00"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="">End Time:</label>
        <input
          type="time"
          className="w-2/3 px-3  py-2 border border-gray-300 rounded-md bg-blue-200"
          name=""
          id=""
          readOnly
          value="20:00"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <label className="">Spot:</label>
        <input
          type="text"
          className="w-2/3 px-3  py-2 border border-gray-300 rounded-md bg-blue-200"
          name=""
          id=""
          readOnly
          value="R4-C2"
        />
      </div>
    </>
  );
};
