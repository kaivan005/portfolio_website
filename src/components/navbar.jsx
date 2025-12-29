import * as React from 'react';
import './styles/navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function Navbar(props){
    const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

    const handleMenu = (event) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setMobileMenuAnchor(null);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        handleClose();
    };

    const navLinks = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];

    return (    
        <>  
            <AppBar className='navbar-top'>
                <Toolbar>
                    <Typography variant="h6" component="div" className='navName' sx={{ flexGrow: 1 }}>
                        {"<" + props.name + " />"}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                        {navLinks.map((link) => (
                            <Button 
                            key={link} 
                            className='nav-items' 
                            color="inherit"
                            sx={{    
                                margin: "0 6px",
                                fontWeight: "bold",
                                textTransform: "none ",
                                fontSize: "0.875rem ",
                                border: "none",
                                background: "transparent",
                                color: "#cbd5e1",
                                cursor: "pointer",
                                borderRadius: "0.5rem",
                                transition: "all 300ms",
                            }} 
                            onClick={() => scrollToSection(link)}>
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </Button>
                        ))}
           
                    </Box>
                    <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} color="inherit" onClick={handleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={mobileMenuAnchor} open={Boolean(mobileMenuAnchor)} onClose={handleClose}>
                        {navLinks.map((link) => (
                            <MenuItem key={link} onClick={() => scrollToSection(link)}>
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

