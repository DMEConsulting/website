import React from 'react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import background from '../images/header.webp'; 

const headers = [
    "Welcome to DME Consulting",
    "World Class Finance Support for your Business",
    "Expert Guidance Tailored to Your Needs!"
];


const HeroSection = () => {
    const [currentHeader, setCurrentHeader] = useState(headers[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % headers.length);
            setCurrentHeader(headers[index]);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(intervalId); 
    }, [index]);
  return (
    <div className="bucket hero-section" id='home'>
      <h1 className="hero-title montserrat-header">  
      <TypeAnimation
      sequence={[
        "Welcome to DME Consulting", 5000,
         "World Class Finance Support for your Business",5000,
        "Expert Guidance Tailored to Your Needs!",5000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h1>
      <p className="hero-description montserrat-paragraph">
      We provide personalized financial consulting services tailored to meet your individual and business needs. Our goal is to help you achieve financial independence and make smart, informed decisions.
      </p>
      <div className="hero-buttons">
        <button className="primary-btn montserrat-paragraph"
        onClick={() => {
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
          }}>Learn More</button>
        <button className="secondary-btn montserrat-paragraph"
        onClick={() => {
            document.getElementById("contactus").scrollIntoView({ behavior: "smooth" });
          }}>Contact us</button>
      </div>
      <div className="hero-image">
        <img src={background} alt="Centered screenshot" />
      </div>
    </div>
  );
};

export default HeroSection;
