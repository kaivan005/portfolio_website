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
                </header>
            </div>
        </section>
    );
}

export default Project;