import React from 'react'; 
import WhyUsCard from './molecules/whyuscard';
import serviceImage1 from '../images/service1.jpg'; 
import serviceImage2 from '../images/service4.jpg'; 
import serviceImage3 from '../images/service5.jpg'; 

const WhyUsSection = () => {
  const cardsData = [
    {
      title: 'Personalized Solutions',
      description: 'We understand that every client is unique, which is why we offer customized financial solutions that are tailored to your specific needs and goals. Our approach ensures that you receive the most effective strategies to help you achieve your financial aspirations. ',
      bulletPoints: [
        'Comprehensive financial assessments to identify your strengths and areas for improvement.',
        'Tailored investment strategies designed to align with your risk tolerance and objectives.',
        'Ongoing support and adjustments to your plan as your financial situation evolves.',
      ],
      image: serviceImage1,
      isImageRight: false,
    },
    {
      title: 'Expert Guidance',
      description: 'Our team is composed of seasoned financial consultants with extensive experience in various financial disciplines. We pride ourselves on providing knowledgeable and trustworthy guidance that empowers you to make informed decisions.',
      bulletPoints: [
        'Detailed financial reports',
        'Secure payment gateways',
        'Transparent transaction tracking',
      ],
      image: serviceImage2,
      isImageRight: true,
    },
    {
      title: 'Proven Track Record',
      description: 'We have a history of success in helping clients achieve their financial goals. Our proven methodologies and client-focused approach have resulted in numerous success stories, making us a trusted partner in your financial journey.',
      bulletPoints: [
        'Instant data visualization',
        'Predictive financial models',
        'AI-powered financial insights',
      ],
      image: serviceImage3,
      isImageRight: false,
    },
  ];

  return (
    <section className="why-us-section" id='whyus'>
      <h2 className="section-title mtext-black">
        Why <span className="text-primary">Choose Us</span> for Your Financial Consulting Needs?
      </h2>
      <p className="section-description montserrat-paragraph">
        Our services are designed to help businesses optimize their finances, secure transactions, and stay financially healthy.
      </p>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <WhyUsCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
