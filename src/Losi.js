import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css'; // Import the CSS file for styling

const AuthPage = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://backend-r5n4.onrender.com/login', { email: loginEmail, password: loginPassword });

            if (response.status === 200) {
                window.location.href = '/Home';
            } else {
                setMessage('Login failed');
            }
        } catch (error) {
            setMessage('Error logging in user.');
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        const data = { username: signupUsername, email: signupEmail, password: signupPassword };

        try {
            const response = await axios.post('https://backend-r5n4.onrender.com/signup', data);

            if (response.status === 200) {
                window.location.href = '/Home';
            } else {
                setMessage('Signup failed');
            }
        } catch (error) {
            setMessage('Error signing up user.');
        }
    };

    return (
        <div className="auth-page">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignupSubmit}>
                    <input
                        type="text"
                        value={signupUsername}
                        onChange={(e) => setSignupUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            <div className="message">{message}</div>
        </div>
    );
};

export default AuthPage;