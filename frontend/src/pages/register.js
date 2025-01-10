import React, { useState } from 'react';
import { signup } from '../services/authService'; // Import the register function

const SignupPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Hua kya")
            await signup(credentials); 
            console.log("Nai hua")
            alert('Signup successful! You can now log in.');
        } catch (err) {
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupPage;
