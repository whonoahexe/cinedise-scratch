"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('tt-ol-menu-open', !isMenuOpen);
    };

    // Close menu on route change implementation can be added here if needed, 
    // or simple link click handlers.

    return (
        <header id="tt-header" className="tt-header-fixed">
            <div className="tt-header-inner">
                <div className="tt-header-col">
                    <div className="tt-logo">
                        <Link href="/">
                            <img src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-light.png" className="tt-logo-light magnetic-item" alt="Logo" />
                            <img src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-dark.png" className="tt-logo-dark magnetic-item" alt="Logo" />
                        </Link>
                    </div>
                </div>

                <div className="tt-header-col">
                    <div id="tt-ol-menu-toggle-btn-wrap" onClick={toggleMenu}>
                        <div className="tt-ol-menu-toggle-btn-text">
                            <span className="text-menu" data-hover="Open">Menu</span>
                            <span className="text-close">Close</span>
                        </div>
                        <div className="tt-ol-menu-toggle-btn-holder">
                            <a href="#" className={`tt-ol-menu-toggle-btn magnetic-item ${isMenuOpen ? 'is-open' : ''}`}><span></span></a>
                        </div>
                    </div>

                    <nav className={`tt-overlay-menu tt-ol-menu-center tt-ol-menu-count ${isMenuOpen ? 'is-open' : ''}`}>
                        <div className="tt-ol-menu-holder">
                            <div className="tt-ol-menu-inner tt-wrap">
                                <div className="tt-ol-menu-content">
                                    <ul className="tt-ol-menu-list">
                                        <li className="tt-ol-submenu-wrap">
                                            <div className="tt-ol-submenu-trigger">
                                                <Link href="/" onClick={toggleMenu}>Home</Link>
                                            </div>
                                        </li>
                                        <li className="tt-ol-submenu-wrap">
                                            <div className="tt-ol-submenu-trigger">
                                                <Link href="/#page-content" onClick={toggleMenu}>Portfolio</Link>
                                            </div>
                                        </li>
                                        <li className="tt-ol-submenu-wrap">
                                            <div className="tt-ol-submenu-trigger">
                                                <Link href="/about-us" onClick={toggleMenu}>About</Link>
                                            </div>
                                        </li>
                                        <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-noise"></div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
