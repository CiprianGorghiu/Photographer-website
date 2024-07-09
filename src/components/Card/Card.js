// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'; 
import './Card.css'; 
import Button from 'react-bootstrap/Button';


const Card = ({ title, content, icon }) => {
    let iconToUse;

    switch (icon) {
        case 'phone':
            iconToUse = faPhone;
            break;
        case 'envelope':
            iconToUse = faEnvelope;
            break;
        case 'user':
            iconToUse = faUser;
            break;
        default:
            iconToUse = faPhone; 
    }
    return (
        <div className="card">
             <div className="card-corner"></div> {/* colt card */}
            <div className="icon">
                <FontAwesomeIcon icon={iconToUse} size="2x" />
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
            <button className='btn-details'>Detalii</button> {}
        </div>
    );
};

export default Card;
