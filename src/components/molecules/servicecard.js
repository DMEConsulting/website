import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">

    <img src={image} alt={title} className="service-image" loading='lazy' />
      
      <h3 className="service-title mtext-black">{title}</h3>
      <p className="service-description montserrat-paragraph">{description}</p>
      
      
    </div>
  );
};

export default ServiceCard;
