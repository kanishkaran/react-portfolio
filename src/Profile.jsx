import React from 'react';
import profilePic from './assets/Profile_pic.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import resumePDF from './assets/KANISHKARAN_M_RESUME.pdf';

const Profile = () => {
    const PdfOpener = () => {
  const openPdf = () => {
    window.open(resumePDF);
  };
    return (
        <section id="profile">
            <div className="sec-pic-container">
                <img src={profilePic} alt="Kanishkaran profile-pic" />
            </div>
            <div className="section_text">
                <p className="section_text_p1">Hello, I'm</p>
                <h1 className="title">Kanishkaran M</h1>
                <p className="section_text_p2">Aspiring Software Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={openPdf}
                    >
                        Download CV
                    </button>
                    <button
                        className="btn btn-color-1"
                        onClick={() => window.location.href = './#contact'}
                    >
                        Contact Info
                    </button>
                </div>
                <div id="social-container">
                    <img
                        src={linkedinIcon}
                        alt="linkedin profile"
                        className="icon"
                        onClick={() => window.location.href = 'https://linkedin.com/in/kanishkaran-m'}
                    />
                    <img
                        src={githubIcon}
                        alt="github profile"
                        className="icon"
                        onClick={() => window.location.href = 'https://github.com/kanishkaran'}
                    />
                </div>
            </div>
        </section>
    );
};

export default Profile;
