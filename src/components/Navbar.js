import React, { useState } from 'react';
import {HambergerMenu,CloseCircle} from 'iconsax-react';   
import logo from '../images/logo.jpeg';  
import Copy from '../copy'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='navbar shadow-md'>  
      {/* Main Navbar */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Company Logo and Name */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Company Logo" 
              loading='lazy'
              className={setShowLogo? "h-16 logo" :"hidden"} 
              onLoad={()=>{setShowLogo(true)}}/>
            <span className="text-xl mtext-black text-gray-700">DME Consultancy</span>
          </div>

          {/* Centered Menu Items */}
          <nav className="hidden md:flex space-x-6 text-medium">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#about" className="hover:text-black">About</a> 
            <a href="#whyus" className="hover:text-black">Why us</a> 
            <a href="#team" className="hover:text-black">Our Team</a> 
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a href="#contactus" className="button-primary rounded-full py-2 px-6  transition duration-300">
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
        <div className=" drawer fixed text-medium inset-0 bg-secondary z-50 flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-4 right-4 text-4xl text-gray-700" onClick={toggleMenu}>✖</button>
          <a onClick={()=>setIsOpen(false)} href="#home" className="text-2xl ">Home</a>
          <a onClick={()=>setIsOpen(false)} href="#about" className="text-2xl">About</a>
          <a onClick={()=>setIsOpen(false)} href="#services" className="text-2xl">Services</a> 
          <a onClick={()=>setIsOpen(false)} href="#whyus" className="text-2xl">Why us</a> 
          <a onClick={()=>setIsOpen(false)} href="#team" className="text-2xl">Our Team</a> 
          <a onClick={()=>setIsOpen(false)} href="#contactus" className="text-2xl">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
