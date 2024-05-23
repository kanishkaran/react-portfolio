import React from 'react';
import checkmarkIcon from './assets/checkmark.png';
import arrowIcon from './assets/arrow.png';


const Experience = () => {
    return (
        <section id="experience">
            <p className="section_text_p1">Explore My</p>
            <h1 className="title">Skills</h1>
            <div className="experience-details">
                <div className="about-container">
                    <div className="details-container">
                        <h2 className="experience-sub-title">FrontEnd</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>HTML</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>CSS</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>JavaScript</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>PowerBI</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>React</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">BackEnd</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>TensorFlow</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>Sci-kit Learn</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>Python</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>C++</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>C</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>SQL</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>Langchain</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>Llamaindex</h3>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="experience icon" className="icon" />
                                <div>
                                    <h3>Django</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrowIcon} alt="arrow-icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
        </section>
    );
};

export default Experience;
