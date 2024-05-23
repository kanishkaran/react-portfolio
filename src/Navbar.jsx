import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">Kanishkaran M</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="ham-nav">
                <div className="logo">Kanishkaran M</div>
                <div className="ham-menu">
                    <div className="ham-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#about" onClick={toggleMenu}><p className="menu-nav">About</p></a></li>
                        <li><a href="#experience" onClick={toggleMenu}><p className="menu-nav">Experience</p></a></li>
                        <li><a href="#projects" onClick={toggleMenu}><p className="menu-nav">Projects</p></a></li>
                        <li><a href="#contact" onClick={toggleMenu}><p className="menu-nav">Contact</p></a></li>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
