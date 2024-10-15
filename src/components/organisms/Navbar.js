import React, { useState } from 'react';
import {Call,Sms,HambergerMenu,CloseCircle} from 'iconsax-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Green bar for contact info and social media */}
      <div className="bg-primary text-white py-2 hidden md:block">

        <div className="banner mx-auto flex justify-between items-center">

          <div className=" contacts flex:1 text-sm text-white flex justify-center items-center montserrat-small">
            <Call size="16" color="#fff"/> <span className='te'>+1-234-567-8900 | </span> <Sms size="16" color="#fff"/> <span> hello@dmeservices.com</span>
          </div>

          <div className="text-sm space-x-4 montserrat-small">
            <a href="#facebook" className="hover:text-yellowAccent">Facebook</a>
            <a href="#twitter" className="hover:text-yellowAccent">Twitter</a>
            <a href="#instagram" className="hover:text-yellowAccent">Instagram</a>
          </div>
        </div>

      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Company Logo and Name */}
          <div className="flex items-center space-x-2">
            <img src="Capture.png" alt="Company Logo" className="h-8" />
            <span className="text-xl montserrat-header text-gray-700">DME Consulting</span>
          </div>

          {/* Centered Menu Items */}
          <nav className="hidden md:flex space-x-6 montserrat-paragraph">
            <a href="#home" className="hover:text-yellowAccent">Home</a>
            <a href="#services" className="hover:text-yellowAccent">Services</a>
            <a href="#about" className="hover:text-yellowAccent">About</a> 
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a href="#contactus" className="bg-yellowAccent text-white rounded-full py-2 px-6  transition duration-300">
              Contact Us
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none" onClick={toggleMenu}>
              {isOpen ? <CloseCircle size="32" color="#FF8A65"/> : <HambergerMenu size="32" color="#000"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-paleGreen z-50 flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-4 right-4 text-4xl text-gray-700" onClick={toggleMenu}>✖</button>
          <a href="#home" className="text-2xl text-gray-700 hover:text-yellowAccent">Home</a>
          <a href="#about" className="text-2xl text-gray-700 hover:text-yellowAccent">About</a>
          <a href="#services" className="text-2xl text-gray-700 hover:text-yellowAccent">Services</a> 
          <a href="#contactus" className="text-2xl text-gray-700 hover:text-yellowAccent">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
