import React from 'react';
import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

const Booking = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-64 bg-white border-gray-400 overflow-hidden">
            <SideBar />
          </aside>

          <div className="flex-1 bg-gray-100 overflow-y-auto">
            <header className="h-16 bg-white shadow px-4 flex items-center">
              <Navbar />
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
