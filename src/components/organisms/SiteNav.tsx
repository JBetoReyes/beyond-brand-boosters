import { useState } from 'react';

const SiteNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav aria-label="primary navigation">
            <ul className={`nav | flex-group ${isOpen ? 'active' : ''}`}>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            <div className="hamburger" onClick={() => setIsOpen(isOpen => !isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav >
    )
}

export default SiteNav;