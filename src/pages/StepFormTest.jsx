import React from 'react';
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';
import NewBooking from '../components/forms/NewBooking';

const StepFormTest = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-gray-400 overflow-hidden">
          <SideBar />
        </aside>
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <header className="h-16 bg-white shadow px-4 flex items-center">
            <Navbar />
          </header>
          <main className="flex-1 p-3 bg-gray-100 overflow-y-auto">
            <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
              <NewBooking />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StepFormTest;
