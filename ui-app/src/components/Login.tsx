// import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
//     // TODO każde pola jako oddzielny stan
//     const [credentials, setCredentials] = useState({ username: '', password: '' });

//     const handleLogin = async (e: React.FormEvent) => {
//         // TODO zablokuj domyślną funkcjonalność SUBMIT formularza
//         try {
//             const response = await axios.post('/api/login/', credentials);
//             // TODO zapisz a session storage, nie w localstorage!
//             localStorage.setItem('token', response.data.access);
//             alert('Login successful!');
//         } catch (error) {
//             console.error(error);
//         }
//     };

    return (
        <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//             # TODO FORMULARZ wraz z obsługą pól
//         </form>
    );
};

export default Login;