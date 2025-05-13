import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menus = [
    {
      text: "Booking",
      // icon: ,
      path: "/dashboard/reservation",
    },
    {
      text: "My Bookings",
      // icon: ,
      path: "/dashboard/reservation-list",
    },
  ];

  return (
    <div className="w-60 h-screen z-50 bg-amber-100 px-3 flex flex-col border-r border-r-blue-500">
      <div className="flex ps-8 pt-10 pb-8">
        <h1 className="text-3xl font-bold text-blue-600">Parkly.</h1>
      </div>

      <nav className="space-y-2">
        {menus.map((menuItem, index) => (
          <NavLink
            key={index}
            to={menuItem.path}
            className={({ isActive }) =>
              `flex items-center w-full py-3 ps-8 rounded-lg font-semibold transition-colors 
            ${isActive && "bg-blue-700 text-gray-200"}`
            }
          >
            {menuItem.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
