import React from 'react';
import '../styles/skill.css';

function SkillCards(props) {
    let nestedSkills = props.skills.map((skill, index) => (
        <div key={index} className='skill-tag'>{skill}</div>
    ));
    return (
        <div className="skill-card">
            <div className={`skill-card-glow ${props.iconClass}`}></div>
            <div className="skill-card-content">
                <div className="skill-card-header">
                    <div className={`skill-icon ${props.iconClass}`}>{props.icon}</div>
                    <h3 className="skill-card-title">{props.skillName}</h3>
                </div>
                <div className='skill-tags'>{nestedSkills}</div>
            </div>
        </div>
    );
}   
export default SkillCards;