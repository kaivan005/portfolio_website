import React from 'react';
import Button from '@mui/material/Button';
import { Box, IconButton } from "@mui/material";

import { RiGraduationCapLine } from "react-icons/ri";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PiStarFourFill } from "react-icons/pi";
import BioCard from "../cards/bioCard";
import '../styles/main.css';

function Intro(props) {
   const iconBtnSx = {
  width: 52,
  height: 52,
  borderRadius: "12px",

  backgroundColor: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",

  border: "1px solid rgba(255,255,255,0.12)",
  color: "#94a3b8",

  transition: "all 0.25s ease",

  "&:hover": {
    backgroundColor: "rgba(96,165,250,0.18)",
    borderColor: "rgba(96,165,250,0.6)",
    color: "#ffffff",
    boxShadow: "0 0 18px rgba(96,165,250,0.35)",
    transform: "translateY(-2px)",
  },
   "&:focus": {
      outline: "none",
    },
    "&.Mui-focusVisible": {
      outline: "none",
      boxShadow: "none",
    },
};


    const activeBtnSx = {
        backgroundColor: "rgba(96,165,250,0.18)",
        borderColor: "rgba(96,165,250,0.6)",
        color: "#ffffff",
        boxShadow: "0 0 18px rgba(96,165,250,0.35)",
    };

    return (
      <div className='content intro-section' id="home">
            <div className="intro-header"><RiGraduationCapLine /> IT Student & Aspiring Developer <PiStarFourFill /></div>
            <div className='hero-heading'>Hi, I'm <label className='hero-name'>{props.name}</label></div>
            <BioCard />
            <div sx={{ gap: "16px", marginTop: "24px" }}>
                <Button disableRipple disableFocusRipple disableElevation sx={{
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
                <Button disableRipple disableFocusRipple disableElevation sx={{
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
                        background: "#141a4b",
                    }
                }}
                onClick={() => window.open('mailto:koshtikaivan2005@gmail.com?subject=Contact from Portfolio&body=Hello Kaivan,', '_blank')}><EmailOutlinedIcon /> Get in Touch </Button>
            </div>
             <Box
      sx={{
        display: "flex",
        gap: "14px",
        p: "12px",
      }}
    >
      <IconButton sx={iconBtnSx} onClick={() => window.open('https://github.com/kaivan005', '_blank')}>
        <GitHubIcon />
      </IconButton>

      <IconButton sx={iconBtnSx} onClick={() => window.open('https://www.linkedin.com/in/koshti-kaivan', '_blank')}>
        <LinkedInIcon />
      </IconButton>

      <IconButton sx={iconBtnSx} onClick={() => window.open('mailto:koshtikaivan2005@gmail.com', '_blank')}>
        <EmailOutlinedIcon />
      </IconButton>
    </Box>
        </div >
    )
}

export default Intro;