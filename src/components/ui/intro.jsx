import React from 'react';
import Button from '@mui/material/Button';
import { RiGraduationCapLine } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";

function Intro(props) {  
    return(
        <div>
            <div><RiGraduationCapLine /> IT Student & Aspiring Developer <PiStarFourFill /></div>
            <div>Hi, I'm {props.name}</div>
            <div className='bio'>A passionate Computer Applications student learning web development and software engineering. Building projects, exploring new technologies, and growing every day.</div>
            <div>    
                <Button>View Resume</Button>
                <Button>Get in Touch</Button>
            </div>
            <div>    
                <Button>Github</Button>
                <Button>Linkedin</Button>
                <Button>Mail</Button>
            </div>
        </div>
    )
}

export default Intro;