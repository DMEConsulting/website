import React from 'react';

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="img-responsive" />
      <div className="team-content">
        <h3 className="name">{name}</h3>
        <span className="role">{role}</span>
      </div>
    </div>
  );
};

export default TeamMember;
