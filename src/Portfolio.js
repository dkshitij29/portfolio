import React from 'react';
import ProjectCard from './ProjectCard';
import SkillBadge from './SkillBadge';
//import Image from './image';
const Portfolio = () => {
  const projects = [
    {
      title: 'Leave Mangment system',
      client: 'Personal Project',
      objective: 'To Reengineer the existing manual leave application system and automate it using basic HTML forms.',
      technologies: ['HTML', 'CSS', 'JavaScript' , 'php'],
      description: 'Implemented basic form which ensures that the leave is been applied on the id of a faculty. This reduces the dependence on management on popular messaging platforms like WhatsApp. This is a centralized system so everything is in our control.'
    },
    {
      title: 'Centralized library management system using docker ',
      client: 'VJIT Department',
      objective: 'To make a centralized department level library management system which ensure that all the reference materials and books are available at a single place.',
      technologies: ['Docker', 'YAML (yet another markup language)', 'Docker client', 'Calibre web (Python Django HTML/CSS/JavaScript SQLite Bootstrap jQuery)'],
      description: 'The root cause to make this application was to centralize the notes sharing platform. Which is both beneficial for students and faculty as it enables a single place to dump notes and hence it becomes easy to find reference materials.'
    },
    
    {
      title: 'FSMI RIdes',
      client: 'Taxi union',
      objective: 'To make a cost friendly taxi booking application which will act as alternative to the dominant player like OLA/Uber.',
      technologies: ['Docker', 'YAML (yet another markup language)', 'React native', 'open street maps (OSM)', 'Open Source Routing Machine(OSRM)', 'Appwrite', 'Geolocation'],
      description: 'The app is built using all open source platforms which ensure the privacy of the user and the taxi drivers are paid fairly. The algorithm is used isn\'t biased, so the pricing is a win-win for both the driver and passenger.'
    },
  ];

  const skills = [
    'React',
    'Redux',
    'JavaScript',
    'HTML',
    'CSS',
    'Responsive Design',
    'User Interface (UI) Design',
    'Git',
    'Native script',

  ];

  return (
    
    <div>
      <h1>Kshitij Dhannoda</h1>
      <h2>Welcome to my portfolio!</h2>
      
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}

      <h3>Skills</h3>
      <div>
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <p>
        Thank you for visiting my portfolio. If you have any inquiries or would like to discuss potential collaborations, please feel free to get in touch.
        <br></br>Contact me:
        <br></br><a href="mailto:dkshitij29@gmail.com">Mail</a>
        <br></br><a href="https://code.swecha.org/Kshitij">Visit My Git Profile</a>

      </p>
    </div>
  );
};

export default Portfolio;
