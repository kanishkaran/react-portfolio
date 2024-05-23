import React from 'react';
import violenceXpImg from './assets/violenceXp.png';
import mediverseImg from './assets/mediverse.png';
import chatbotImg from './assets/chatbot.png';
import arrowIcon from './assets/arrow.png';

const Projects = () => {
    return (
        <section id="projects">
            <p className="section_text_p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details">
                <div className="about-container">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={violenceXpImg} alt="project 1" className="profile-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Violence Detection System</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/kanishkaran/violence-detection-system'}>Github</button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={mediverseImg} alt="project 2" className="profile-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Mediverse</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/kanishkaran/mediverse-SVCE-Hackathon'}>Github</button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={chatbotImg} alt="project 3" className="profile-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">AI Chatbot</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/kanishkaran/AI_chatbot'}>Github</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrowIcon} alt="arrow-icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
        </section>
    );
};

export default Projects;
