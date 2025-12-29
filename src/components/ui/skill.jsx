import React from 'react';
import SkillCards from '../cards/skillCards';
function Skills(){
    return (
        <div className="content">
            <h2>Skills</h2>
            <SkillCards img='path/to/image' skillName='Programming Languages' skills={['Python', 'JavaScript', 'Java','C++']} />
            <SkillCards img='path/to/image' skillName='Web Technologies' skills={['HTML', 'CSS', 'React', 'Tailwind','Node.js']} />
            <SkillCards img='path/to/image' skillName='Tools & Platforms' skills={['Git', 'GitHub', 'Figma', 'Linux']} />
            <SkillCards img='path/to/image' skillName='Currently Learning' skills={['TypeScript', 'PostgreSQL', 'Docker','System Design']} />
        </div>
    )
}
export default Skills;