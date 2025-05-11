import React, { useState } from 'react';
import { FiBell, FiUser, FiSettings, FiLogOut, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import logo from './../assets/logo2.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);

  return (
    <nav className="w-full flex items-center justify-between bg-white shadow h-16 px-2 sm:px-4">
  <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />

  <div className="flex-1" />

  <div className="flex items-center space-x-5">
    <button className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
      <FiBell size={24} className="text-gray-600" />
      <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full shadow-lg" />
    </button>
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex cursor-pointer items-center space-x-2 p-2 rounded hover:bg-gray-100 transition-colors"
      >
        <FiUser size={24} className="text-gray-600" />
        <FiChevronDown
          className={`text-gray-600 transform transition-transform ${menuOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      {menuOpen && (
        <ul className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
          <li>
            <button
              onClick={() => {}}
              className="w-full cursor-pointer text-left px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <FiSettings size={18} />
              <span>Settings</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {}}
              className="w-full cursor-pointer text-left px-4 py-2 flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <FiLogOut size={18} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  </div>
</nav>

  );
}
