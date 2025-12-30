import React from "react";
import '../styles/contact.css';

function ContactCard(props) {
    const Tag = props.href ? 'a' : 'div';
    const linkProps = props.href ? { href: props.href, target: '_blank', rel: 'noreferrer' } : {};

    return (
        <div className="contact-card">
            <Tag className="contact-link" {...linkProps}>
                <div className="contact-card-wrapper">
                    <div className={`contact-card-glow ${props.glowClass || ''}`}></div>
                    <div className="contact-card-content">
                        <div className={`contact-icon ${props.iconClass || ''}`}>
                            {props.icon ? props.icon : (props.img && <img src={props.img} alt={props.method} />)}
                        </div>
                        <h3 className="contact-title">{props.method}</h3>
                        <div className="contact-value">{props.info}</div>
                        {props.external && <div className="contact-external">{props.external}</div>}
                    </div>
                </div>
            </Tag>
        </div>
    );
}

export default ContactCard;