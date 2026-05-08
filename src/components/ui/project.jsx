import React from 'react';
import ProjectCard from '../cards/projectCard.jsx';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import '../styles/project.css';

function Project() {
    return (
        <section className="section with-bg" id="projects">
            <div className="section-container">
                <header className="section-header">
                    <h1 className="section-title">Projects</h1>
                    <div className="section-underline"></div>
                    <ProjectCard
                        icon={<RocketLaunchOutlinedIcon fontSize="large" />}
                        projectName='LoanIQ – Loan Eligibility Predictor'
                        description="A machine learning project that predicts loan eligibility based on applicant data. Built using Python and scikit-learn, this model helps financial institutions assess loan applications efficiently by analyzing factors like income, credit history, and employment status."
                        tags={['Python', 'Streamlit', 'Machine Learning']}
                        code='https://github.com/kaivan005/loan-eligibility.git'
                        demo='https://loan-iq.streamlit.app/'
                    />
                    <ProjectCard
                        icon={<RocketLaunchOutlinedIcon fontSize="large" />}
                        projectName='Automated CI/CD Pipeline for Portfolio Website'
                        description="Designed and implemented a complete CI/CD pipeline for a React portfolio website using GitHub Actions and GitHub Pages. The workflow automates dependency installation, linting, production builds, artifact uploads, and continuous deployment on every push to the main branch. Integrated caching and deployment concurrency for optimized build performance."
                        tags={[
                            'GitHub Actions',
                            'CI/CD',
                            'React',
                            'GitHub Pages',
                            'Node.js',
                            'YAML',
                            'DevOps'
                        ]}
                        Label1="Pipeline" 
                        code='https://github.com/kaivan005/portfolio_website/actions/workflows/deploy.yml'
                        demo='https://kaivan005.github.io/portfolio_website/'
                    />
                </header>
            </div>
        </section>
    );
}

export default Project;