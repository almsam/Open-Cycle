import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={activeLink === 'home' ? 'active' : ''} 
                        onClick={() => handleLinkClick('home')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/history" 
                        className={activeLink === 'history' ? 'active' : ''} 
                        onClick={() => handleLinkClick('history')}
                    >
                        History
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/profile" 
                        className={activeLink === 'profile' ? 'active' : ''} 
                        onClick={() => handleLinkClick('profile')}
                    >
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;