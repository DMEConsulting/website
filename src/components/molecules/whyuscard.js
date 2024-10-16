import React from 'react';  

const WhyUsCard = ({ title, description, bulletPoints, image, isImageRight }) => {
  return (
    <div className={`why-us-card ${isImageRight ? 'image-right' : 'image-left'}`}>
      <div className="text-content">
        <h3 className="card-title montserrat-header">{title}</h3>
        <p className="card-description montserrat-paragraph">{description}</p>
        <ul className="card-bullets">
          {bulletPoints.map((point, index) => (
            <li key={index} className='flex gap-3 items-center montserrat-paragraph'> {point}</li>
          ))}
        </ul>
      </div>
      <div className="image-content">
        <img src={image} alt={title} className="card-image" />
      </div>
    </div>
  );
};

export default WhyUsCard;
