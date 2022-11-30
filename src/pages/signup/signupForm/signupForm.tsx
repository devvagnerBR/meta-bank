import React from 'react'
import Message from '../../../components/alertMessage/message';
import Button from '../../../components/button/button';
import Input from './../../../components/input/input';

const SignupForm = () => {




    return (
        <div className='form-signup-container'>
            <Input />
            <Input />
            <Message />
            <Button />
        </div>
    )
}

export default SignupForm