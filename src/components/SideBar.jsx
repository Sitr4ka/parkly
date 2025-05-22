import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleSubmenu = () => setOpenSubmenu(!openSubmenu);

  const baseLinkClasses =
    'flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors';
  const activeLinkClasses = 'bg-blue-200 text-blue-800';

  if (collapsed) {
    return (
      <div className="flex flex-col h-full bg-white  w-16 transition-width duration-300 items-center">
        <button
          onClick={toggleSidebar}
          className="mt-4 p-2 rounded hover:bg-gray-100"
          aria-label="Open sidebar"
        >
          <HiMenu size={24} />
        </button>
        
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white  w-64 transition-width duration-300">
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Close sidebar"
        >
          <HiX size={24} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="px-2">
          <button
            onClick={toggleSubmenu}
            className="w-full flex items-center justify-between px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors text-gray-700"
          >
            <span>My Bookings</span>
            {openSubmenu ? <HiChevronUp /> : <HiChevronDown />}
          </button>

          {openSubmenu && (
            <div className="mt-1 space-y-1 pl-4">
              <NavLink
                to="/myReservation/new"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${isActive ? activeLinkClasses : 'text-gray-600'}`
                }
              >
                <span className="text-sm">New</span>
              </NavLink>
              <NavLink
                to="/myReservation/canceled"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${isActive ? activeLinkClasses : 'text-gray-600'}`
                }
              >
                <span className="text-sm">Canceled</span>
              </NavLink>
              <NavLink
                to="/myReservation/payed"
                className={({ isActive }) =>
                  `${baseLinkClasses} ${isActive ? activeLinkClasses : 'text-gray-600'}`
                }
              >
                <span className="text-sm">Payed</span>
              </NavLink>
                        <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-700 bg-blue-300 rounded px-4 py-2' : 'rounded px-4 py-2'
            }
            to="/myReservation"
          >
            All  Bookings
          </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
