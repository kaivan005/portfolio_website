import React from 'react';
import ProjectCard from '../cards/projectCard.jsx';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import '../styles/project.css';

function Project() {
    return (
        <section className="section with-bg" id="projects">
            <div className="section-container">
                <header className="section-header">
                    <h1 className="section-title">Projects In <span className='section-title-gradient'>Progress</span></h1>
                    <div className="section-underline"></div>
                    <p>Details about projects will be added soon.</p>
                    <ProjectCard
                        icon={<RocketLaunchOutlinedIcon fontSize="large" />}
                        projectName='Building & Learning'
                        description="I'm actively working on personal projects to practice web development, algorithms, and problem-solving. As I complete projects worth showcasing, I'll add them here with live demos and source code."
                        tags={['React', 'UI/UX', 'Algorithms']}
                    />
                </header>
            </div>
        </section>
    );
}

export default Project;