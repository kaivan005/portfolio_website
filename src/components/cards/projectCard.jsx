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
                <div className="project-background-pattern"></div>
                <div className="project-content">
                    <div className="project-icon-wrapper">
                        <div className="project-icon-container">
                            <div className="project-icon-glow"></div>
                            <div className="project-icon">
                                {props.icon ? props.icon : (props.img && <img src={props.img} alt={props.projectName} />)}
                            </div>
                        </div>
                    </div>
                    <h3 className="project-title">{props.projectName}</h3>
                    <p className="project-description">{props.description}</p>
                    {tags.length > 0 && (
                        <div className="project-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;