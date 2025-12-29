import React from 'react';

function CerificationCard(props){   
    return(
        <div className="certification-card">
            <img src={props.img} alt={props.courseName} />
            <h3>{props.courseName}</h3>
            <div className='courseProvider'>{props.provider}</div>
            <div className='courseStatus'>{props.status}</div>
        </div>
    )
}
export default CerificationCard;