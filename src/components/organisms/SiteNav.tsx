import { useState } from 'react';
import { Link } from '@tanstack/react-router';

const SiteNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <nav aria-label="primary navigation">
            <ul className={`nav | flex-group ${isOpen ? 'active' : ''}`}>
                <Link to="/beyond-brand-boosters/pricing" onClick={toggleMenu}>Pricing</Link>
                <Link to="/beyond-brand-boosters/about-us" onClick={toggleMenu}>About Us</Link>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav >
    )
}

export default SiteNav;