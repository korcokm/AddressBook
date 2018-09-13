import React from 'react';
import './contact.css';

export default  (props) => {
    return(
         <div id={`contact-${props.index}`} className="contact">
             <img className="contact-photo" src={props.photo} alt={`${props.name} avatar`} />
             <h2 className="contact-name">{props.name}</h2>
             <p className="contact-address">{props.address}</p>
         </div>        
    );
};  