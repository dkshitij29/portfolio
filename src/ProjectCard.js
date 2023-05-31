import React from 'react';
import './ProjectCard.css';
const ProjectCard = ({ project }) => {
  const { title, client, objective, technologies, description } = project;

  return (
    <div className="project-card">
      <h4>{title}</h4>
      <p>Client: {client}</p>
      <p>Objective: {objective}</p>
      <h5>Technologies Used:</h5>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
