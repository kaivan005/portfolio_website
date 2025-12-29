import React from 'react';
import ContactCard from '../cards/contactCard.jsx';

function Contact()  {
    return (
        <div>
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing new opportunities, collaboration, or just chatting about tech!</p>
            <ContactCard img='path/to/email_icon' method='Email' info='kaivan@example.com' />
            <ContactCard img='path/to/linkedin_icon' method='LinkedIn' info='linkedin.com/in/kaivan' />
            <ContactCard img='path/to/github_icon' method='GitHub' info='github.com/kaivan' />
        </div>
    )
}
export default Contact;