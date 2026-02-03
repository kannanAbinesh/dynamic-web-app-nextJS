"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply theme to document
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <div className="logo-icon">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="23" fill="currentColor" opacity="0.1" />
                                <rect x="10" y="20" width="30" height="25" fill="currentColor" opacity="0.2" />
                                <path d="M25 5L45 20H5L25 5Z" fill="currentColor" />
                                <rect x="20" y="30" width="10" height="15" fill="currentColor" opacity="0.6" />
                                <rect x="15" y="25" width="5" height="5" fill="currentColor" opacity="0.4" />
                                <rect x="30" y="25" width="5" height="5" fill="currentColor" opacity="0.4" />
                            </svg>
                        </div>
                        <span className="logo-text">BARHOUSE</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="navbar-links desktop-only">
                        <li>
                            <Link
                                href="/"
                                className={activeLink === 'home' ? 'active' : ''}
                                onClick={() => handleLinkClick('home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="about-us"
                                className={activeLink === 'about' ? 'active' : ''}
                                onClick={() => handleLinkClick('about')}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="blogs"
                                className={activeLink === 'blogs' ? 'active' : ''}
                                onClick={() => handleLinkClick('blogs')}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="contact-us"
                                className={activeLink === 'contact' ? 'active' : ''}
                                onClick={() => handleLinkClick('contact')}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop Theme Controller */}
                    <div className="theme-controller desktop-only">
                        <button
                            className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            <span className="theme-icon sun">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="4" fill="currentColor" />
                                    <path d="M10 1V3M10 17V19M19 10H17M3 10H1M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span className="theme-icon moon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 10.5C16.1 14.4 12.6 17.3 8.5 17C4.4 16.7 1 13.2 1 9C1 5.5 3.3 2.6 6.4 1.7C6.8 1.6 7.2 2 7 2.4C6.3 3.9 6 5.4 6 7C6 11.4 9.6 15 14 15C15.3 15 16.5 14.7 17.6 14.2C18 14 18.4 14.4 18.3 14.8C18 15.4 17.5 16 17 16.5" fill="currentColor" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-icon">
                            <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="23" fill="currentColor" opacity="0.1" />
                                <rect x="10" y="20" width="30" height="25" fill="currentColor" opacity="0.2" />
                                <path d="M25 5L45 20H5L25 5Z" fill="currentColor" />
                                <rect x="20" y="30" width="10" height="15" fill="currentColor" opacity="0.6" />
                                <rect x="15" y="25" width="5" height="5" fill="currentColor" opacity="0.4" />
                                <rect x="30" y="25" width="5" height="5" fill="currentColor" opacity="0.4" />
                            </svg>
                        </div>
                        <span className="logo-text">BARHOUSE</span>
                    </div>
                    <button
                        className="sidebar-close"
                        onClick={closeMobileMenu}
                        aria-label="Close menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <ul className="sidebar-links">
                    <li>
                        <Link
                            href="/"
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => handleLinkClick('home')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="about-us"
                            className={activeLink === 'about' ? 'active' : ''}
                            onClick={() => handleLinkClick('about')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="blogs"
                            className={activeLink === 'blogs' ? 'active' : ''}
                            onClick={() => handleLinkClick('blogs')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="contact-us"
                            className={activeLink === 'contact' ? 'active' : ''}
                            onClick={() => handleLinkClick('contact')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <div className="sidebar-theme">
                    <div className="theme-section-title">Theme</div>
                    <div className="theme-options">
                        <button
                            className={`theme-option ${!isDarkTheme ? 'active' : ''}`}
                            onClick={() => setIsDarkTheme(false)}
                        >
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="4" fill="currentColor" />
                                <path d="M10 1V3M10 17V19M19 10H17M3 10H1M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span>Light</span>
                        </button>
                        <button
                            className={`theme-option ${isDarkTheme ? 'active' : ''}`}
                            onClick={() => setIsDarkTheme(true)}
                        >
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 10.5C16.1 14.4 12.6 17.3 8.5 17C4.4 16.7 1 13.2 1 9C1 5.5 3.3 2.6 6.4 1.7C6.8 1.6 7.2 2 7 2.4C6.3 3.9 6 5.4 6 7C6 11.4 9.6 15 14 15C15.3 15 16.5 14.7 17.6 14.2C18 14 18.4 14.4 18.3 14.8C18 15.4 17.5 16 17 16.5" fill="currentColor" />
                            </svg>
                            <span>Dark</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}