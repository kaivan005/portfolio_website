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
    const [activeSection, setActiveSection] = React.useState('home');
    const indicatorRef = React.useRef(null);
    const buttonsRef = React.useRef({});

    const handleMenu = (event) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setMobileMenuAnchor(null);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        handleClose();
    };

    const navLinks = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120; // offset for fixed navbar
            let current = activeSection;

            navLinks.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        current = id;
                    }
                }
            });

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection, navLinks]);

    React.useLayoutEffect(() => {
        const btn = buttonsRef.current[activeSection];
        const indicator = indicatorRef.current;
        if (btn && indicator) {
            const rect = btn.getBoundingClientRect();
            const parentRect = btn.parentElement.getBoundingClientRect();
            const left = rect.left - parentRect.left;
            indicator.style.width = `${rect.width}px`;
            indicator.style.transform = `translateX(${left}px)`;
            indicator.style.opacity = '1';
        }
    }, [activeSection]);

    React.useEffect(() => {
        const handleResize = () => {
            const btn = buttonsRef.current[activeSection];
            const indicator = indicatorRef.current;
            if (btn && indicator) {
                const rect = btn.getBoundingClientRect();
                const parentRect = btn.parentElement.getBoundingClientRect();
                const left = rect.left - parentRect.left;
                indicator.style.width = `${rect.width}px`;
                indicator.style.transform = `translateX(${left}px)`;
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeSection]);

    return (    
        <>  
            <AppBar className='navbar-top'>
                <Toolbar>
                    <Typography variant="h6" component="div" className='navName' sx={{ flexGrow: 1 }}>
                        {"<" + props.name + " />"}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, position: 'relative', alignItems: 'center' }}>
                        <span className="nav-active-indicator" ref={indicatorRef}></span>
                        {navLinks.map((link) => (
                            <Button 
                                key={link} 
                                className={`nav-items ${activeSection === link ? 'active' : ''}`} 
                                color="inherit"
                                sx={{    
                                    margin: "0 6px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    fontSize: "0.875rem",
                                    padding: "0.5rem 0.75rem",
                                    cursor: "pointer",
                                    borderRadius: "0.5rem",
                                    transition: "all 300ms",
                                    color: "inherit",
                                    minWidth: "unset"
                                }} 
                                onClick={() => scrollToSection(link)}
                                ref={(el) => { if (el) buttonsRef.current[link] = el; }}>
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

