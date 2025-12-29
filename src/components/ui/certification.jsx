import React from 'react'
import CerificationCard from '../cards/cerificationCard';

function Certification(){   
    return(
        <div className="content">
            <h2>Certifications & Courses</h2>
            <CerificationCard img='path/to/image' courseName='Responsive Web Design' provider='freeCodeCamp' status='Completed' />
            <CerificationCard img='path/to/image' courseName='JavaScript Algorithms' provider='freeCodeCamp' status='Completed' />
            <CerificationCard img='path/to/image' courseName='Introduction to Computer Science and Programming Using Python' provider='Harvard Online' status='inProgress' />
        </div>
    )
}
export default Certification;