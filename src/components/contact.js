import React from 'react';

import './contact.css';

export default function Contact(props){
    return 
    (
        <section id={'contact-${props.index}'} className="contact">
            <img className="contact=photo" src={props.photo} alt={'${props.name} avatar'} />
            <h2 className="contact-name">{props.name}</h2>
            <div className="contact-address">{props.address}</div>
        </section>
    );
};