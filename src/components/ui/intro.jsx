import React from 'react';
import Button from '@mui/material/Button';
import { RiGraduationCapLine } from "react-icons/ri";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { PiStarFourFill } from "react-icons/pi";
import BioCard from "../cards/bioCard";
import '../styles/main.css';

function Intro(props) {

    return (
        <div className='intro'>
            <div className="intro-header"><RiGraduationCapLine /> IT Student & Aspiring Developer <PiStarFourFill /></div>
            <div className='hero-heading'>Hi, I'm <label className='hero-name'>{props.name}</label></div>
            <BioCard />
            <div sx={{ gap: "16px", marginTop: "24px" }}>
                <Button sx={{
                    marginRight: "16px",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "10px",
                    px: 3,
                    py: 1.2,
                    padding: "15px 20px",
                    color: "#fff",
                    gap: 1,
                    background: "linear-gradient(90deg, #3b82f6, #a855f7)",
                    boxShadow: "0 0 20px rgba(99,102,241,0.35)",
                    "&:hover": {
                        background: "linear-gradient(90deg, #1e40af, #7c3aed)",
                        boxShadow: "0 0 10px rgba(168,85,247,0.8)",
                    },
                }}><DescriptionOutlinedIcon /> View Resume</Button>
                <Button sx={{
                    position: "relative",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "10px",
                    padding: "15px 20px",
                    color: "#ffffff",
                    background: "transparent",
                    border: "none",
                    gap: 1,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        padding: "1.5px",
                        background: "linear-gradient(90deg, #60a5fa, #c084fc)",

                        /* magic for outline effect */
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    },

                    "&:hover": {
                        background: "rgba(99,102,241,0.08)",
                    }
                 }}><EmailOutlinedIcon /> Get in Touch </Button>
        </div><div>
                <Button>Github</Button>
                <Button>Linkedin</Button>
                <Button>Mail</Button>
            </div>
        </div >
    )
}

export default Intro;