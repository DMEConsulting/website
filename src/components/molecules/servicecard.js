import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      
      <img src={image} alt={title} className="service-image" />
    </div>
  );
};

export default ServiceCard;
