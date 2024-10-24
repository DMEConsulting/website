// TeamGrid.js
import React from 'react';
import TeamMember from './molecules/TeamMember';

const TeamGrid = () => {
  const teamMembers = [
    {
      image: require('../images/employ1.png'),
      name: 'Daniel Effange',
      role: 'Founder & CEO',
    },
    {
      image: require('../images/employ2.png'),
      name: 'Faith Musi',
      role: 'Finance Specialist',
    },
    {
      image: require('../images/employ4.png'),
      name: 'Diana Corpuz',
      role: 'Administrative Coordinator',
    },
    {
      image: require('../images/employ3.png'),
      name: 'Thelma Kwanga',
      role: 'Finance Specialist',
    },
  ];

  return (
    <div className="team-grid py-4">
      <div className='team-header'>
        <p className='text-medium'>Meet our team !</p>
        <h2 className='mtext-black'>Passionate professionals dedicated to delivering the highest quality work</h2>
        <p className='montserrat-paragraph'> Each member brings a unique set of skills and expertise, allowing us to collaborate effectively and tackle a wide range of challenges.</p>
      </div>  
      <div className="Members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
