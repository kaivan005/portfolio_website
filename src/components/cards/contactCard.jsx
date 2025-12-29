import React from "react";

function ContactCard(props){   
    return(
        <div className="contact-card">
            <img src={props.img} alt={props.method} />
            <h3>{props.method}</h3>
            <div className='contactInfo'>{props.info}</div>
        </div>
    )
}
export default ContactCard;