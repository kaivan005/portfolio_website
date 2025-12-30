import React from 'react'
import CerificationCard from '../cards/cerificationCard';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import '../styles/certification.css';

function Certification(){   
    return(
         <section className="section with-bg" id="certifications">
            <div className="section-container">
                <header className="section-header">
                    <h1 className="section-title"><span className='section-title-gradient'>Certifications</span> & Courses</h1>
                    <div className="section-underline"></div>
                    <div className="cert-grid">
                        <CerificationCard icon={<SchoolOutlinedIcon />} courseName='Responsive Web Design' provider='freeCodeCamp' status='Completed' glowClass='green' date='Apr 2024' />
                        <CerificationCard icon={<CodeOutlinedIcon />} courseName='SQL' provider='HackerRank' status='Completed' glowClass='green' date='Jul 2024'/>
                        <CerificationCard icon={<SchoolOutlinedIcon />} courseName='Python' provider='Kaggle' status='Completed' glowClass='green' date='Mar 2024' />
                    </div>
                </header>
            </div>
        </section>
    )
}
export default Certification;