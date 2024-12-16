import React, { useState } from 'react';
import axios from 'axios';

// TODO: del old commends/ code here and css
// messages: password, email
// navigation: if login move to home/ userlist

const Register = () => {
    // const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessages, setErrorMessages] = useState({ 
        email: '', 
        password: '',
        confirmPassword: ''
    })


    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(password.length < 8){
            setPassword('');
            setConfirmPassword('');
            setErrorMessages({ 
                ...errorMessages, 
                password: 'Passwords must be at least 8 characters long.',
                confirmPassword: '' 
            })
            return;
        }

        if(password !== confirmPassword){
            setPassword('');
            setConfirmPassword('');
            setErrorMessages({ 
                ...errorMessages, 
                password: '',
                confirmPassword: 'Passwords must be the same.' 
            })
            return;
        }

        try {
            // await axios.post('/api/register/', {username, email, password});
            await axios.post('http://localhost:8000/api/register/', {username, email, password});

            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrorMessages({ email: '', password: '', confirmPassword: '' })

            // TODO dodaj notyfikację zamiast alertu
            alert('Registration successful!'); 

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
                        Register
                    </h2>
                </div>

                <div className="container">
                    <form onSubmit={handleSubmit} className="box">
                        <div className="field">
                            <label className="inputTitle">User name:</label>
                            <input  className="subtext" 
                                    value={username} 
                                    onChange={handleUsernameChange}
                                    type="text" 
                                    placeholder="John Doe"/>
                        </div>

                        <div className="field">
                            <label className="inputTitle">User mail:</label>
                            <input  className="subtext" 
                                    value={email} 
                                    onChange={handleEmailChange}
                                    type="text" 
                                    placeholder="myMail@example.com"/>
                        </div>

                        <div className="field">
                            {
                                errorMessages.password && 
                                ( <p className="error_message">{errorMessages.password}</p> )
                            }
                            <label className="inputTitle">Password:</label>
                            <input  className="subtext"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    type="password"
                                    placeholder="min 8 characters"/>
                        </div>

                        <div className="field">
                            {
                                errorMessages.confirmPassword && 
                                ( <p className="error_message">{errorMessages.confirmPassword}</p> )
                            }
                            <label className="inputTitle">Confirm password:</label>
                            <input  className="subtext"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    type="password"
                                    placeholder="min 8 characters"/>
                        </div>

                        
                        <div className="field_small">
                            <label className="subtext2">
                                <input type="checkbox" required/>
                                You agree to our friendly <u>privacy policy</u>.
                            </label>
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

export default Register;
