import React from 'react';
import ContactCard from '../cards/contactCard.jsx';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/contact.css';

function Contact() {
    return (
        <section className="section with-bg" id="contact">
            <div className="section-container">
                <header className="section-header">
                    <h1 className="section-title">Let's <span className='section-title-gradient'>Connect</span></h1>
                    <div className="section-underline"></div>
                    <p>I'm always open to discussing new opportunities, collaboration, or just chatting about tech!</p>
                    <div className="contact-grid">
                        <ContactCard
                            icon={<EmailOutlinedIcon />}
                            method='Email'
                            info='koshtikaivan2005@gmail.com'
                            href='mailto:koshtikaivan2005@gmail.com'
                            glowClass='blue'
                            iconClass='blue'
                            external='Email me'
                        />
                        <ContactCard
                            icon={<LinkedInIcon />}
                            method='LinkedIn'
                            info='linkedin.com/in/koshti-kaivan'
                            href='https://www.linkedin.com/in/koshti-kaivan'
                            glowClass='purple'
                            iconClass='purple'
                            external='Visit profile'
                        />
                        <ContactCard
                            icon={<GitHubIcon />}
                            method='GitHub'
                            info='github.com/kaivan005'
                            href='https://github.com/kaivan005'
                            glowClass='pink'
                            iconClass='pink'
                            external='View repos'
                        />
                    </div>
                </header>
            </div>
        </section>
    );
}

export default Contact;