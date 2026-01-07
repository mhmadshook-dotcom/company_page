import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ 
  image,
  title, 
  description, 
  technologies,
  category,
  demoLink,
  githubLink,
  status,
  className = '' 
}) => {
  const [imgSrc, setImgSrc] = React.useState(image);
  const errorCountRef = React.useRef(0);

  const handleError = () => {
    if (errorCountRef.current < 1) {
      errorCountRef.current += 1;
      // Fallback to Picsum if Unsplash fails
      const seed = title.toLowerCase().replace(/\s+/g, '-');
      setImgSrc(`https://picsum.photos/seed/${seed}/800/600`);
    }
  };

  return (
    <div className={`project-card ${className}`}>
      <div className="project-card__image-container">
        <img 
          src={imgSrc}
          alt={title}
          className="project-card__image"
          onError={handleError}
        />
        {status && (
          <div className="project-card__status">
            <Badge 
              variant={status === 'Completed' ? 'success' : status === 'In Progress' ? 'warning' : 'info'} 
              size="small"
            >
              {status}
            </Badge>
          </div>
        )}
        {category && (
          <div className="project-card__category-badge">
            <Badge variant="secondary" size="small">{category}</Badge>
          </div>
        )}
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="project-card__technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="project-card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {(demoLink || githubLink) && (
          <div className="project-card__links">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card__link project-card__link--demo"
              >
                <FaExternalLinkAlt size={14} />
                <span>Live Demo</span>
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card__link project-card__link--github"
              >
                <FaGithub size={16} />
                <span>View Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.string,
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
  status: PropTypes.oneOf(['Completed', 'In Progress', 'Planning', 'In Development']),
  className: PropTypes.string
};

export default ProjectCard;
