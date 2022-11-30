import React from 'react'
import LoginForm from './LoginForm/loginForm'

const Login = () => {
    return (
        <div className='login-container animeLeft'>
            <header className='login-header'>
                <h1>Login</h1>
                <h3> Bem vindo de volta!</h3>
            </header>
            <LoginForm />
        </div>
    )
}

export default Login