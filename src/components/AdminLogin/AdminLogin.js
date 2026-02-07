"use client";

import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login submitted', { email, password, rememberMe });
    };

    return (
        <div className="login-page">
            {/* Left Side - Login Form */}
            <div className="login-left-section">
                <div className="login-form-container">
                    <div className="login-header">
                        <h1 className="login-title">Welcome</h1>
                        <p className="login-subtitle">Enter your email and password to sign in</p>
                    </div>


                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <div className="input-wrapper">
                                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Email or Username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-wrapper">
                                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="login-submit-btn">
                            Sign In →
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div className="login-right-section">
                <img 
                    src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&h=1600&fit=crop" 
                    alt="Mountain church scenery" 
                    className="login-bg-image"
                />
            </div>
        </div>
    );
};

export default Login;