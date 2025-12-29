import React from 'react';
import ProjectCard from '../cards/projectCard.jsx';
function Project()  {
    return (
        <div>
            <h2>Projects In Progress</h2>
            <p>Details about projects will be added soon.</p>
            <ProjectCard img='path/to/project_image' projectName='Building & Learning' description="I'm actively working on personal projects to practice web development, algorithms, and problem-solving. As I complete projects worth showcasing, I'll add them here with live demos and source code." language='React, Node.js' />
        </div>
    )
}
export default Project; 