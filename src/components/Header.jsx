import React from 'react';
import logo from './../assets/logo2.png';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="fixed w-full z-20 header h-[80px] flex items-center bg-gray-50">
        <div className="container h-[80px] mx-auto px-8 flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-20 w-60 object-contain" />
          <nav className="nav-menu flex gap-8">
            <a href="#" className="navItem text-primary">
              Home
            </a>
            <a href="#" className="navItem">
              About
            </a>
            <a href="#" className="navItem">
              Services
            </a>
            <a href="#" className="navItem">
              Contact
            </a>
          </nav>
          <div className="callToAction flex gap-4 max-md:hidden">
            <button className="button text-primary hover:text-white"
              onClick={()=>navigate("/signin")}
            >Log In</button>
            <button className="button text-white bg-primary hover:bg-blue-500"
              onClick={()=>navigate("/signup")}
            >Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
