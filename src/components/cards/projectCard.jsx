import React from 'react';
import '../styles/project.css';

function ProjectCard(props) {
  const tags = Array.isArray(props.tags)
    ? props.tags
    : props.language
      ? [props.language]
      : [];

  return (
    <div className="project-card">
      <div className="project-card-glow"></div>

      <div className="project-card-content">

        <div className="project-content">
          <div className="project-icon-wrapper">
            <div className="project-icon-container">
             
            </div>
          </div>

          <h3 className="project-title">{props.projectName}</h3>

          <p className="project-description">{props.description}</p>

          {tags.length > 0 && (
            <>
              <div className="tech-stack-label">Tech Stack</div>
              <div className="project-tags">
                {tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </>
          )}

          {(props.code || props.demo) && (
            <div className="project-buttons">
              {props.code && (
                <a
                  href={props.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Code
                </a>
              )}
              {props.demo && (
                <a
                  href={props.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button primary"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
