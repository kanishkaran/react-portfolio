import React from 'react';
import emailIcon from './assets/email.png';
import linkedinIcon from './assets/linkedin.png';

const Contact = () => {
    return (
        <section id="contact">
            <p className="section_text_p1">Get In Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={emailIcon} alt="email icon" className="icon contact-icon email-icon" />
                    <p><a href="mailto:kanishkaran456@gmail.com">kanishkaran456@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={linkedinIcon} alt="linkedin icon" className="icon contact-icon" />
                    <p><a href="https://www.linkedin.com/in/kanishkaran-m">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
