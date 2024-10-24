import React from 'react';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import background from '../images/background.jpg';  



const HeroSection = () => {

  const [showImage, setShowImage]= useState(false); 

  return (
    <div className="hero-section bg-secondary" id='home'>  
      <div className='bucket'>
      <div className='hero-header_container'>
        <TypeAnimation
          sequence={[
            "Welcome to DME Consultancy", 5000,
            "World Class Finance Support for your Business",5000,
            "Expert Guidance Tailored to Your Needs!",5000
          ]}
          wrapper="span"
          speed={50} 
          repeat={Infinity}
          className='hero-title mtext-black'
        /> 
      </div>
      <p className="hero-description montserrat-paragraph">
      We provide personalized financial consulting services tailored to meet your individual and business needs. Our goal is to help you achieve financial independence and make smart, informed decisions.
      </p>
      <div className="hero-buttons">
        <button className="button-primary text-medium"
        onClick={() => {
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
          }}>Learn More</button>
        <button className="button-secondary text-medium"
        onClick={() => {
            document.getElementById("contactus").scrollIntoView({ behavior: "smooth" });
          }}>Contact us</button>
      </div>
      <div className="hero-image">  
          <img src={background} alt="" 
            loading="lazy" 
            className={showImage ? "":"hidden"}
            onLoad={()=>{setShowImage(true);}} />
      </div>

      </div>
    </div>
  );
};

export default HeroSection;
