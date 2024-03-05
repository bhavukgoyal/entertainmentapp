import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file where you will define the styles

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://backend-r5n4.onrender.com/login', { email, password });

            if (response.status === 200) {
                window.location.href = '/Home';
            } else {
                setMessage('Login failed');
            }
        } catch (error) {
            setMessage('Error logging in user.');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
    <div className="login-field">
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-input"
        />
    </div>

    <div className="login-field">
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
        />
    </div>

    <button type="submit" className="login-button">Login</button>
</form>

            <div className="login-message">{message}</div>
        </div>
    );
};

export default Login;