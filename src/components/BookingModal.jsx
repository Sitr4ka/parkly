import React, { useState } from "react";
import img from "../assets/img.svg";
import { TiTick } from "react-icons/ti";

const BookingModal = ({ showModal, selectedParking }) => {
  const steps = ["schedule", "spot", "validation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      {showModal && (
        <div className="fixed left-60 flex items-center justify-center inset-0 backdrop-blur-xs bg-black/10 z-40">
          <div className="flex bg-amber-100 rounded-xl px-12 py-12 w-[850px] h-[500px] shadow-shadow z-50">
            <div className="pr-6 pl-12 pt-4 w-1/2 flex flex-col justify-evenly">
              <h1 className="text-5xl font-bold">{selectedParking.name}</h1>
              <img src={img} alt="parking-img" />
            </div>

            <div className="w-1/2 border-t-6 border-x-3 border-b-3 rounded-3xl py-6 px-8 border-blue-500">
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

              <form method="post">
                <div className="mx-6 mt-8">
                  <div className="mb-4">
                    <div className="text-[var(--black-grey)]">
                      <label className="block text-sm font-medium mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
                        // value={newEvent.start.split("T")[0]}
                        // onChange={(e) => {
                        //   const date = e.target.value;
                        //   const startTime =
                        //     newEvent.start.split("T")[1] || "09:00";
                        //   const endTime = newEvent.end.split("T")[1] || "10:00";
                        //   setNewEvent({
                        //     ...newEvent,
                        //     start: `${date}T${startTime}`,
                        //     end: `${date}T${endTime}`,
                        //   });
                        // }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
