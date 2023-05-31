import React from 'react';
//import './Skillbadge.css';
const SkillBadge = ({ skill }) => {
  return (
    <div className="skill-badge">
      <span>{skill}</span>
    </div>
  );
};

export default SkillBadge;
