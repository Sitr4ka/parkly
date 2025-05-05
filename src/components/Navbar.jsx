import React from 'react'
import { FiBell } from 'react-icons/fi'
function Navbar() {
  return (
<nav className="flex justify-between items-center w-full">
    <div><h1 className="text-3xl font-bold text-blue-600 px-6 py-6">Parkly.</h1></div>

    <div className="flex items-center space-x-4">
      <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
       
        <FiBell/>
        
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
      </button>

      <img
        src="https://via.placeholder.com/32"
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
  </nav>
  )
}

export default Navbar;
