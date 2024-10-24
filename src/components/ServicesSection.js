import React from 'react';
import ServiceCard from './molecules/servicecard';


const ServicesSection = () => {
  const services = [
    { image: require('../images/service1.jpg'), title: 'Financial Record Keeping', description: 'We maintain accurate and up-to-date financial records, including transactions, invoices, receipts, and bank statements, ensuring your business stays organized and compliant.' },
    { image: require('../images/service2.jpg'), title: 'Monthly Financial Reports', description: 'Receive detailed monthly financial statements, such as profit and loss statements, balance sheets, and cash flow reports. Our analysis helps you understand your financial position and make informed decisions.' },
    { image: require('../images/service3.jpg'), title: 'Accounts Payable and Receivable Management', description: 'Our team efficiently manages incoming and outgoing payments, including client invoicing and bill payments, to streamline your cash flow and ensure timely transactions.' },
    { image: require('../images/service7.jpg'), title: 'Payroll Services', description: 'We handle all aspects of payroll processing, from calculating employee wages to managing tax withholdings, ensuring compliance with labor laws and reducing administrative burdens.' },
    { image: require('../images/service8.jpg'), title: 'Tax Preparation and Planning', description: 'Our experts assist with tax compliance and preparation, offering strategic tax planning advice to minimize liabilities and ensure timely filing.' },
    { image: require('../images/service9.jpg'), title: 'Anti-Fraud Analysis', description: 'We implement robust systems and controls to detect and prevent fraud. Our regular audits and transaction analysis help safeguard your financial integrity.' },
    { image: require('../images/service10.jpg'), title: 'CFO Services', description: 'Our experienced consultants provide strategic financial guidance, including budgeting, forecasting, and financial analysis, empowering you to make informed, high-level decisions.' }
  ];

  return (
    <section className="services-section" id='services'>
      <h2 className="section-header mtext-bold">A range of <span className='text-light'>bookkeeping</span> and financial consultancy services</h2>
      <p className="section-description">
      tailored to meet the unique needs of your start up or SME. Our expertise ensures accurate financial management and strategic insights to drive your success 
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
