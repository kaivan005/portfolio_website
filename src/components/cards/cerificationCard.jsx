import React from 'react';
import '../styles/certification.css';

function CerificationCard(props){   
    return(
        <div className="cert-card">
            <div className={`cert-card-glow ${props.glowClass}`}></div>
            <div className="cert-card-content">
                <div className="cert-icon">{props.icon}</div>
                <h3 className="cert-title">{props.courseName}</h3>
                <div className='cert-platform'>{props.provider}</div>
                <div className='cert-footer'>
                    <div className={`cert-badge ${props.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                        <span>Issued {props.date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CerificationCard;