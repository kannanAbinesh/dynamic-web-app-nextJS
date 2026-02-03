import './home.css';

export default function Home() {
    return (
        <div className="barhouse-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text-overlay">
                        <div>
                            <h1 className="hero-title">
                                <span className="craft-text">CRAFT</span>
                                <span className="wooden-houses-text">Wooden Houses</span>
                            </h1>
                            <p className="hero-description">
                                Phasellus maximus tincidunt velit in cursus. Vivamus quis blandit massa. Ut ut placerat eros.
                            </p>
                            <button className="hero-button">
                                Read more
                                <span className="button-arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-left">
                        <p className="section-tag">ABOUT BARHOUSE</p>
                        <h2 className="about-title">
                            We produce<br />
                            ecological elite<br />
                            <span className="highlighted-text">wooden cottages</span>
                        </h2>
                        <div className="about-description">
                            <p>
                                Fusce ac lobortis ex, ac laoreet lacus. Morbi auctor vestibulum urna, ut interdum ipsum maximus et. Sed sed condimentum massa. Quisque eget tincidunt quam. In vitae arcu feugiat, suscipit ipsum sit amet, interdum ex. Proin id nunc volutpat.
                            </p>
                        </div>
                        <p className="about-statement">
                            Vivamus vel arcu non mauris auctor egestas at id tellus. Nunc quis lacus quis augue facilisis euismod. Duis nec nulla sed eros eleifend suscipit.
                        </p>
                        <button className="order-button">
                            Book now
                            <span className="button-arrow">→</span>
                        </button>
                    </div>

                    <div className="about-right">
                        <div className="about-images-grid">
                            <img
                                src="https://barhouse.like-themes.com/wp-content/uploads/2018/04/about-house-1.jpg"
                                alt="Modern wooden house with pool"
                                className="about-image about-image-1"
                            />
                            <img
                                src="https://barhouse.like-themes.com/wp-content/uploads/2018/04/about-house-3.jpg"
                                alt="Contemporary wooden cottage"
                                className="about-image about-image-2"
                            />
                            <div className="about-stat-badge">
                                <div className="stat-circle">
                                    <span className="stat-number">238</span>
                                    <span className="stat-label">completed<br />projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="benefits-container">
                    <p className="section-tag center">BARHOUSE</p>
                    <h2 className="benefits-title">Meet our benefits</h2>
                    <p className="benefits-subtitle">
                        Fusce ac lobortis ex, ac laoreet lacus. Morbi auctor vestibulum urna, ut interdum ipsum maximus et. Sed sed condimentum massa.
                    </p>

                    <div className="benefits-content">
                        <div className="benefits-left-column">
                            <div className="benefit-item">
                                <div className="benefit-number">01</div>
                                <h3 className="benefit-title">Professional builders</h3>
                                <p className="benefit-description">
                                    Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum ipsum maximus et.
                                </p>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-number">02</div>
                                <h3 className="benefit-title">Best wooden materials</h3>
                                <p className="benefit-description">
                                    Morbi auctor vestibulum urna, ut interdum ipsum maximus et. Sed sed condimentum massa.
                                </p>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-number">03</div>
                                <h3 className="benefit-title">High speed construction</h3>
                                <p className="benefit-description">
                                    Vestibulum urna, ut interdum ipsum maximus et. Sed sed condimentum massa. Quisque eget tincidunt quam.
                                </p>
                            </div>
                        </div>

                        <div className="benefits-center-image">
                            <img
                                src="https://barhouse.like-themes.com/wp-content/uploads/2018/05/benefits-house.png"
                                alt="House cross-section showing construction layers"
                                className="cutaway-image"
                            />
                        </div>

                        <div className="benefits-right-column">
                            <div className="benefit-item">
                                <div className="benefit-number">04</div>
                                <h3 className="benefit-title">Guarantee of durability</h3>
                                <p className="benefit-description">
                                    Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum ipsum maximus et.
                                </p>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-number">05</div>
                                <h3 className="benefit-title">Individual approach</h3>
                                <p className="benefit-description">
                                    Morbi auctor vestibulum urna, ut interdum ipsum maximus et. Sed sed condimentum massa.
                                </p>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-number">06</div>
                                <h3 className="benefit-title">VIP service</h3>
                                <p className="benefit-description">
                                    Vestibulum urna, ut interdum ipsum maximus et. Sed sed condimentum massa. Quisque eget tincidunt quam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages Section */}
            <section className="stages-section">
                <div className="stages-container">
                    <div className="stages-right">
                        <div className="stages-visual">
                            <div className="stages-image-container">
                                <img
                                    src="https://barhouse.like-themes.com/wp-content/uploads/2018/05/image-house.png"
                                    alt="Wooden cabin in nature"
                                    className="stages-house-image"
                                />
                                <div className="stages-badge">
                                    <span className="badge-label">built for</span>
                                    <span className="badge-number">21</span>
                                    <span className="badge-sublabel">days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="stages-left">
                        <h2 className="stages-title">
                            Stages of <span className="highlighted-text">our work</span>
                        </h2>
                        <div className="stages-description">
                            <p>
                                We select the most high-quality wood materials, which have a very long life in any climatic conditions
                            </p>
                        </div>
                        <button className="order-button">
                            Book now
                            <span className="button-arrow">→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Traditions Section */}
            <section className="traditions-section">
                <div className="traditions-left">
                    <p className="traditions-tag">TRADITIONS</p>
                    <h2 className="traditions-quote">
                        When we build a house, we do it as if <span className="highlight">for ourselves</span>, it makes you happy
                    </h2>
                    <div className="traditions-author">
                        <h3 className="author-name">Stefan Willson</h3>
                        <p className="author-title">Senior Carpentner</p>
                        <div className="author-signature">
                            <svg className="signature-image" width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 40Q20 10, 40 30T70 35Q90 30, 110 45T140 40" stroke="#d4af37" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M15 45Q25 50, 35 42T55 38Q70 35, 85 48" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <button className="order-button">
                            Book now
                            <span className="button-arrow">→</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}