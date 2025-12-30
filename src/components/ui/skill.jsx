import React from 'react';
import SkillCards from '../cards/skillCards';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import '../styles/skill.css';

function Skills() {
    return (
        <section className="section with-bg" id="skills">
            <div className="section-container">
                <header className="section-header">
                    <h1 className="section-title">Skills</h1>
                    <div className="section-underline"></div>
                    <div className="skills-grid"> {/* Added grid for layout */}
                        <SkillCards icon={<TerminalOutlinedIcon />} skillName='Programming Languages' skills={['Python', 'JavaScript', 'Java', 'C++']} iconClass="blue" />
                        <SkillCards icon={<LanguageOutlinedIcon />} skillName='Web Technologies' skills={['HTML', 'CSS', 'React', 'Tailwind', 'Node.js']} iconClass="purple" />
                        <SkillCards icon={<LayersOutlinedIcon />} skillName='Tools & Platforms' skills={['Git', 'GitHub', 'Figma', 'Linux']} iconClass="cyan" />
                        <SkillCards icon={<AutoAwesomeIcon />} skillName='Currently Learning' skills={['TypeScript', 'PostgreSQL', 'Docker', 'System Design']} iconClass="pink" />
                    </div>
                </header>
            </div>
        </section>
    );
}

export default Skills;