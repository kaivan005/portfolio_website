import React from 'react';

function SkillCards(props){
    let nestedSkills = props.skills.map((skill, index) => (
        <div key={index} className='nestedSkillCard'>{skill}</div>
    ));
    return (
        <div className="skill-card">
            <img src={props.img} alt={props.skillName} />
            <h3>{props.skillName}</h3>
            <div className='nestedSkillCards'>{nestedSkills}</div>
        </div>
    )
}   
export default SkillCards;