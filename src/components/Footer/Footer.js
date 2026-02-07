"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import './footer.css';

/* Logo */
import logoImage from '../../askLogo.jpg';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Logo and Description */}
                <div className="footer-column footer-about">
                    <Link href="/" className="footer-logo">
                        <div className="footer-logo-image-container">
                            <Image
                                src={logoImage}
                                className='footer-logo-image'
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        </div>
                    </Link>
                    <p className="footer-description">
                        Crafting exceptional wooden houses with traditional craftsmanship and modern design.
                        Building dreams, creating homes that stand the test of time.
                    </p>
                    <div className="footer-social">
                        <Link href="#facebook" aria-label="Facebook" className="social-icon">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#twitter" aria-label="Twitter" className="social-icon">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#instagram" aria-label="Instagram" className="social-icon">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#linkedin" aria-label="LinkedIn" className="social-icon">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#youtube" aria-label="YouTube" className="social-icon">
                            <Youtube size={20} />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Useful Links */}
                <div className="footer-column footer-links">
                    <h3 className="footer-title">Useful Links</h3>
                    <ul className="footer-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/blogs">Blogs</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact & Location */}
                <div className="footer-column footer-contact">
                    <h3 className="footer-title">Get In Touch</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <MapPin size={20} />
                            <div>
                                <p className="contact-label">Location</p>
                                <p className="contact-value">123 Wooden Lane, Forest Hills New York, NY 10001</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} />
                            <div>
                                <p className="contact-label">Phone</p>
                                <p className="contact-value">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} />
                            <div>
                                <p className="contact-label">Email</p>
                                <p className="contact-value">info@barhouse.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="copyright">
                        © {currentYear} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}