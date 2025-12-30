import * as React from 'react';
import './styles/navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Navbar(props){
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    const indicatorRef = React.useRef(null);
    const buttonsRef = React.useRef({});

    const handleMenu = () => {
        setMobileMenuOpen(true);
    };

    const handleClose = () => {
        setMobileMenuOpen(false);
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
                    <IconButton 
                        sx={{ 
                            display: { xs: 'flex', sm: 'none' },
                            position: 'relative',
                            zIndex: 1300,
                        }} 
                        color="inherit" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="top"
                open={mobileMenuOpen}
                onClose={handleClose}
                hideBackdrop
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        backgroundColor: 'rgba(2, 6, 23, 0.98)',
                        backdropFilter: 'blur(24px)',
                        borderBottom: '1px solid rgba(51, 65, 85, 0.5)',
                        marginTop: '64px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <Box sx={{ width: '100%', padding: '1rem 0' }} role="presentation">
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link} disablePadding>
                                <ListItemButton 
                                    onClick={() => scrollToSection(link)}
                                    className={activeSection === link ? 'mobile-nav-active' : ''}
                                    sx={{
                                        padding: '1rem 1.5rem',
                                        borderLeft: activeSection === link ? '4px solid #60a5fa' : '4px solid transparent',
                                        backgroundColor: activeSection === link ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                                        transition: 'all 300ms',
                                        '&:hover': {
                                            backgroundColor: 'rgba(96, 165, 250, 0.15)',
                                        },
                                    }}
                                >
                                    <ListItemText 
                                        primary={link.charAt(0).toUpperCase() + link.slice(1)} 
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                color: activeSection === link ? '#60a5fa' : '#cbd5e1',
                                                fontWeight: activeSection === link ? '600' : '500',
                                                fontSize: '1.125rem',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Navbar;

