"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import './aboutUs.css';

const AboutUs = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Random motivational/business YouTube video IDs
    const youtubeVideoIds = [
        'ZXsQAXx_ao0', // Motivational video
        '1T14eOUf-28', // Business strategy
        'arj7oStGLkU', // Entrepreneurship
        'ji5_MqicxSo', // Success mindset
        'Lp7E973zozc', // Leadership
    ];

    // Select a random video
    const randomVideoId = youtubeVideoIds[Math.floor(Math.random() * youtubeVideoIds.length)];

    const handleVideoClick = () => {
        setIsVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div className="about-page">
            {/* Video Modal */}
            {isVideoPlaying && (
                <div className="video-modal-overlay" onClick={handleCloseVideo}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-close-button" onClick={handleCloseVideo}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="video-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${randomVideoId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section - Image 1 */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-text-box">
                        <h1 className="hero-text-line">Let's begin with a</h1>
                        <h1 className="hero-text-line">conversation about your</h1>
                        <h1 className="hero-text-line">vision and challenges!</h1>
                        <div className="arrow-button-wrapper">
                            <svg className="curved-arrow" viewBox="0 0 100 100" width="120" height="120">
                                <path d="M 10 80 Q 10 20, 60 20" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                                    </marker>
                                </defs>
                            </svg>
                            <button className="start-button">Start Here</button>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop" alt="Professional Woman" className="hero-main-image" />
                        <div className="video-popup" onClick={handleVideoClick}>
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="Video Thumbnail" className="video-thumbnail" />
                            <div className="play-button">
                                <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Image 2 */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-content-wrapper">
                        <div className="about-left-border"></div>
                        <div className="about-text-content">
                            <h2 className="about-title">I motivate individuals to transform their lives by mindfulness & sharing wisdom for self development.</h2>
                            <p className="about-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.
                            </p>
                        </div>
                    </div>

                    <div className="about-intro-section">
                        <div className="intro-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=700&fit=crop" alt="About Me" className="intro-image" />
                        </div>
                        <div className="intro-text-wrapper">
                            <h2 className="intro-title">Let's get to know one another...</h2>
                            <p className="intro-paragraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p className="intro-paragraph">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.
                            </p>
                            <button className="more-about-button">More about me</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Image 3 */}
            <section className="services-section">
                <div className="services-container">
                    <div className="services-header">
                        <span className="services-label">Work with me</span>
                        <h2 className="services-title">I'm a business strategist turned soulful entrepreneur and coach. Here's how i can help</h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop" alt="Private Coaching" className="service-image" />
                            </div>
                            <h3 className="service-title">Private Coaching for you & your business</h3>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                            <Link href="#" className="service-link">Learn More</Link>
                        </div>

                        <div className="service-card">
                            <div className="service-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" alt="Group Program" className="service-image" />
                            </div>
                            <h3 className="service-title">The Heart of Business: Group Program</h3>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                            <Link href="#" className="service-link">Learn More</Link>
                        </div>

                        <div className="service-card">
                            <div className="service-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" alt="Web Development" className="service-image" />
                            </div>
                            <h3 className="service-title">Web Development for your business</h3>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                            </p>
                            <Link href="#" className="service-link">Learn More</Link>
                        </div>

                        <div className="service-card">
                            <div className="service-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" alt="Online Marketing" className="service-image" />
                            </div>
                            <h3 className="service-title">Online Marketing: Grow your online business</h3>
                            <p className="service-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                            </p>
                            <Link href="#" className="service-link">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA and Blog Section - Image 4 */}
            <section className="cta-blog-section">
                <div className="cta-blog-container">
                    {/* VIP Group CTA */}
                    <div className="vip-cta-box">
                        <div className="vip-content">
                            <h2 className="vip-title">Join our VIP group of Women Entrepreneurs</h2>
                            <p className="vip-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem when another been the industry's standard dummy text.
                            </p>
                        </div>
                        <button className="vip-button">Join VIP Facebook Group</button>
                    </div>

                    {/* Blog Section */}
                    <div className="blog-section">
                        <div className="blog-header">
                            <span className="blog-label">Free Resources</span>
                            <h2 className="blog-title">View the latest posts about marketing strategy and mindset to propell your business forward.</h2>
                        </div>

                        <div className="blog-grid">
                            <div className="blog-card">
                                <div className="blog-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Premium Event" className="blog-image" />
                                </div>
                                <h3 className="blog-card-title">Premium event for business 2022</h3>
                                <p className="blog-card-description">
                                    Lorem Ipsum dolor sit amet consectetur. Purus egestas a scelerisque turpis. Nullam imperdiet sodales et turpis magna commodo tincidunt tristique. Tempus euismod aget donec in.
                                </p>
                                <Link href="#" className="blog-link">Learn More</Link>
                            </div>

                            <div className="blog-card">
                                <div className="blog-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop" alt="Business Strategy" className="blog-image" />
                                </div>
                                <h3 className="blog-card-title">How to grow your business startegy 2021?</h3>
                                <p className="blog-card-description">
                                    Lorem Ipsum dolor sit amet consectetur. Purus egestas a scelerisque turpis. Nullam imperdiet sodales et turpis magna commodo tincidunt tristique. Tempus euismod aget donec in.
                                </p>
                                <Link href="#" className="blog-link">Learn More</Link>
                            </div>

                            <div className="blog-card">
                                <div className="blog-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop" alt="Master Skills" className="blog-image" />
                                </div>
                                <h3 className="blog-card-title">The hardest skill you need to master to hit 6 figures</h3>
                                <p className="blog-card-description">
                                    You want something deeper, wiser, more aligned, and truly sustainable to support you as you spread your wings + soar to greater heights in your.
                                </p>
                                <Link href="#" className="blog-link">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;