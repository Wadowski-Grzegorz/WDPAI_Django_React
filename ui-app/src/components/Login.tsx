import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login/', {username, password});

            setUsername('');
            setPassword('');

            sessionStorage.setItem('token', response.data.access);

            // console.log("myToken: ", sessionStorage.getItem('token'));
            
            alert('Login successful!');
            navigate("/users");

        } catch (error) {
            console.error(error);
        }
    };

return (
    <>
        <div className="app">
        <div className="tile">
            <div className="container">
                <h2 className="title">
                    Login
                </h2>
            </div>

            <div className="container">
                <form onSubmit={handleLogin} className="box">
                    <div className="field">
                        <label className="inputTitle">User name:</label>
                        <input  className="subtext" 
                                value={username} 
                                onChange={handleUsernameChange}
                                type="text" 
                                placeholder="John Doe"
                                autoComplete="username"/>
                    </div>

                    <div className="field">
                        <label className="inputTitle">Password:</label>
                        <input  className="subtext"
                                value={password}
                                onChange={handlePasswordChange}
                                type="password"
                                placeholder="min 8 characters"
                                autoComplete="current-password"/>
                    </div>

                    <div className="field">
                        <button className="submit_button" type="submit">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </>
);
};

export default Login;