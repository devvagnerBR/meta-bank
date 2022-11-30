import React from 'react'
import Message from '../../../components/alertMessage/message'
import Button from '../../../components/button/button'
import Input from '../../../components/input/input'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className='loginform-container'>
            <Input />
            <Input />
            <Message />
            <Button />
            <Link to='/login'>
                <p>ainda não tem conta?
                    <span> cadastre-se!</span>
                </p>
            </Link>
        </div>
    )
}

export default LoginForm