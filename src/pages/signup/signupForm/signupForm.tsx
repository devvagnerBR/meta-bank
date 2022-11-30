import React from 'react'
import Message from '../../../components/alertMessage/message';
import Button from '../../../components/button/button';
import Input from './../../../components/input/input';
import { Link } from 'react-router-dom';

import username from '../../../assets/icons/username_yellow.png'
import password from '../../../assets/icons/password_yellow.png'

const SignupForm = () => {




    return (
        <div className='form-signup-container'>
            <Input
                label='usuário'
                name='username'
                type='text'
                placeholder='meta tarso'
                icon={username}
            />
            <Input
                label='senha'
                name='username'
                type='password'
                icon={password}
            />
            <Message />
            <Button />
            <Link to='/login'>
                <p>já tem conta?
                    <span> entrar</span>
                </p>
            </Link>
        </div>
    )
}

export default SignupForm