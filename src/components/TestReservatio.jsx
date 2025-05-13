import React, { useState } from 'react';

const ParkingLayout = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const totalSlots = 35;

  const toggleSlot = (id) => {
    setSelectedSlots((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((slot) => slot !== id)
        : [...prevSelected, id]
    );
  };

  const updateSelectionDisplay = () => {
    return selectedSlots.map((id) => (
      <div key={id} className="bg-blue-800 text-white rounded py-2 text-center">
        {`A${id}`}
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Parking Layout */}
      <div className="col-span-2 bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-4">Parking Layout</h3>
        <div id="parking-layout" className="grid grid-cols-7 gap-2">
          {Array.from({ length: totalSlots }).map((_, index) => {
            const slotId = index + 1;
            return (
              <div
                key={slotId}
                className={`bg-red-200 rounded py-2 text-center cursor-pointer transition ${selectedSlots.includes(slotId) ? 'bg-blue-800 text-white' : ''}`}
                onClick={() => toggleSlot(slotId)}
              >
                {`A${slotId}`}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sélection de places */}
      <div className="bg-gray-100 p-4 rounded shadow">
        <h3 className="font-semibold mb-4">Sélection de places</h3>
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className={`w-8 h-8 rounded-full ${selectedSlots.includes(slot) ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-500'} flex items-center justify-center`}
            >
              {slot}
            </div>
          ))}
        </div>
        <div id="selection" className="grid grid-cols-3 gap-2 mb-4">
          {updateSelectionDisplay()}
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-white border rounded">Previous</button>
          <button className="px-4 py-2 bg-white border rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 px-6 py-6">Parkly.</h1>
        <nav className="flex flex-col space-y-2 px-6">
          <a href="#" className="bg-blue-100 text-blue-700 rounded px-4 py-2">Nouveau</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 rounded px-4 py-2">Mes réservations</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 rounded px-4 py-2">Profile</a>
        </nav>
      </div>
      <div className="px-6 py-4">
        <a href="#" className="text-red-500">Se déconnecter</a>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-semibold">Parking Centre-ville</h2>
        <p className="text-gray-600">123 rue example, ville</p>
        <div className="text-yellow-400 mt-1">★★★★☆</div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-xl">🔔</button>
        <img src="https://via.placeholder.com/40" className="rounded-full w-10 h-10" alt="User" />
        <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded">User</span>
      </div>
    </div>
  );
};

const ReservationPage = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Header />
        <ParkingLayout />
      </main>
    </div>
  );
};

export default ReservationPage;
