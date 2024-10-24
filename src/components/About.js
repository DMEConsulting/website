import React from 'react'; 

const About = () => {
    
  return (
    <div className="about-us-section" id='about'>
      <div className="card mission-card shadow-md">
        <div className="card-content">
          <h2 className='mtext-black'>Our Mission</h2>
          <p>
          At DME Consultancy, our mission is to empower small businesses and start-ups with accurate financial insights and strategic guidance. We are committed to delivering tailored bookkeeping and financial solutions that enhance efficiency, drive growth, and foster long-term success for our clients.
          </p>
        </div>
      </div>

      <div className="card vision-card shadow-md">
        <div className="card-content">
          <h2 className='mtext-black'>Our Vision</h2>
          <p>
          Our vision is to be a leading financial consultancy known for our integrity, innovation, and commitment to excellence. We strive to build lasting partnerships with our clients, enabling them to navigate financial challenges with confidence and achieve their business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
