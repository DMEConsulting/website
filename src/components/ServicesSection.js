import React from 'react';
import ServiceCard from './molecules/servicecard';


const ServicesSection = () => {
  const services = [
    { image: require('../images/service1.jpg'), title: 'Financial Consulting', description: 'Expert financial advice for businesses.' },
    { image: require('../images/service2.jpg'), title: 'Market Analysis', description: 'In-depth analysis of market trends.' },
    { image: require('../images/service3.jpg'), title: 'Business Strategy', description: 'Innovative solutions for business growth.' },
    { image: require('../images/service7.jpg'), title: 'Risk Management', description: 'Manage and mitigate business risks.' },
    { image: require('../images/service8.jpg'), title: 'Tax Planning', description: 'Comprehensive tax planning services.' },
    { image: require('../images/service9.jpg'), title: 'Auditing Services', description: 'Thorough financial audits to ensure accuracy.' }
  ];

  return (
    <section className="services-section" id='services'>
      <h2 className="section-header">Our Services</h2>
      <p className="section-description">
      Plan for your future with confidence. Our financial planning services help you build a roadmap for success by managing your income, investments, and assets. 
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
