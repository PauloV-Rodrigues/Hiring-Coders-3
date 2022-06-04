import React, { useState } from 'react';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        fetch('http://127.0.0.1:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringfy({
                email,
                password
            })
        }).then((response) => response.json())
        .then(() => {
            console.log('Success!');
        })
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={handleEmailChange}
                    inputmode="email" 
                    autoComplete="username"/>
            </fieldset>

            <fieldset>
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={handlePasswordChange}
                    inputmode="password" 
                    autoComplete="current-password"/>
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
}