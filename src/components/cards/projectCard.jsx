import React from 'react';

function ProjectCard(props){   
    return(
        <div className="project-card">
            <img src={props.img} alt={props.projectName} />
            <h3>{props.projectName}</h3>
            <div className='projectDescription'>{props.description}</div>
            <div className='projectLanguage'>{props.language}</div>
        </div>
    )
}
export default ProjectCard;