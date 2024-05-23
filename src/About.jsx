import React from 'react';
import aboutPic from './assets/About_pic.png';
import experienceIcon from './assets/experience.png';
import educationIcon from './assets/education.png';
import arrowIcon from './assets/arrow.png';

const About = () => {
    return (
        <section id="about">
            <p className="section_text_p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="sec-pic-container">
                    <img src={aboutPic} alt="Profile picture" className="about-pic" />
                </div>
                <div className="about-details">
                    <div className="about-container">
                        <div className="details-container">
                            <img src={experienceIcon} alt="Experience-icon" className="icon" />
                            <h3>Experience</h3>
                            <p>Fresher <br/> Aspiring Software Developer</p>
                        </div>
                        <div className="details-container">
                            <img src={educationIcon} alt="education-icon" className="icon" />
                            <h3>Education</h3>
                            <p>B.Tech Artificial Intelligence & Data Science</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            Dynamic and dedicated, eager to embark on a rewarding journey as a Software Developer. Adept at crafting efficient and scalable solutions through a strong foundation in Data Structures and Algorithms. Passionate about machine learning and data science, with a keen interest in translating theoretical knowledge into practical, impactful applications.
                            As a quick and adaptable learner,Always eager to learn and stay updated on industry trends, I bring a blend of enthusiasm and foundational knowledge to contribute effectively in a collaborative team environment.
                        </p>
                    </div>
                </div>
            </div>
            <img src={arrowIcon} alt="arrow-icon" className="icon arrow" onClick={() => window.location.href = './#experience'} />
        </section>
    );
};

export default About;
