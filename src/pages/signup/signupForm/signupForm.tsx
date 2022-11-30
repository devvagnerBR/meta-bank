import React from 'react'
import Message from '../../../components/alertMessage/message';
import Button from '../../../components/button/button';
import Input from './../../../components/input/input';
import { Link } from 'react-router-dom';

const SignupForm = () => {




    return (
        <div className='form-signup-container'>
            <Input />
            <Input />
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