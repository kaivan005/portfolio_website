import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, IconButton } from '@mui/material';
import './styles/footer.css';

function Footer(props) {
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
        "&:focus": {
            outline: "none",
        },
        "&.Mui-focusVisible": {
            outline: "none",
            boxShadow: "none",
        },
        "&:hover": {
            backgroundColor: "rgba(96,165,250,0.18)",
            borderColor: "rgba(96,165,250,0.6)",
            color: "#ffffff",
            boxShadow: "0 0 18px rgba(96,165,250,0.35)",
            transform: "translateY(-2px)",
        },
    };


    const activeBtnSx = {
        backgroundColor: "rgba(96,165,250,0.18)",
        borderColor: "rgba(96,165,250,0.6)",
        color: "#ffffff",
        boxShadow: "0 0 18px rgba(96,165,250,0.35)",
    };


    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p className="footer-copyright">© 2024 <span className="footer-name">Developed by Kaivan Koshti</span>.</p>
                        <p className="footer-tech">Built with <span className="footer-heart">♥</span> using React, Tailwind CSS & Motion</p>
                        <p className="footer-hosting">Deployed on Github Pages</p>
                    </div>
                    <div className="footer-social">

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
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
