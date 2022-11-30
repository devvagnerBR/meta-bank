import React from 'react'
import Message from '../../../components/alertMessage/message'
import Button from '../../../components/button/button'
import Input from '../../../components/input/input'
import { Link } from 'react-router-dom';
import username from '../../../assets/icons/username.png'
import password from '../../../assets/icons/password.png'
const LoginForm = () => {

    return (
        <div className='loginform-container'>
            <Input
                label='usuário'
                name='username'
                type='text'
                placeholder='metatarso'
                className='yellowInput'
                icon={username}

            />
            <Input
                label='senha'
                name='password'
                type='password'
                className='yellowInput'
                icon={password}
            />

            <Message />
            <Button />
            <Link to='/signup'>
                <p>ainda não tem conta?
                    <span>{" "} cadastre-se! </span>
                </p>
            </Link>
        </div>
    )
}

export default LoginForm