import React from 'react';
import '../styles/about.css';
import CodeIcon from '@mui/icons-material/Code';

function About() {
    return (
        <section className="section with-bg" id="about">
            <div className="section-container">
                <header className="section-header">
                    <h1 className="section-title">About <span className='section-title-gradient'>Me</span></h1>
                    <div className="section-underline"></div>
                    <div className="about-card">
                        <div className="about-card-glow"></div>
                        <div className="about-card-content">
                            <div className="about-content">
                                <div className="about-avatar">
                                    <div className="about-avatar-wrapper">
                                        <div className="about-avatar-glow"></div>
                                        <div className="about-avatar-gradient">
                                            <div className="about-avatar-inner">
                                                <CodeIcon className='about-avatar-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-text">
                                    <p className="about-paragraph">I'm currently pursuing my degree in <span className='about-highlight '>Computer Applications</span> with a strong interest in software development and web technologies. While I'm still in the learning phase and haven't completed major projects yet, I'm actively building my skills through online courses, personal experiments, and hands-on practice.</p>
                                    <p className="about-paragraph">I'm eager to apply what I learn, collaborate with others, and grow into a capable developer. Every day is an opportunity to <span className='about-highlight purple'>improve</span> and take on new <span className='about-highlight pink'>challenges</span>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        </section>


    )
}
export default About;