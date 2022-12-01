import React from 'react'
import Message from '../../../components/alertMessage/message';
import Button from '../../../components/button/button';
import Input from './../../../components/input/input';
import { Link } from 'react-router-dom';

import username from '../../../assets/icons/username_yellow.png'
import password from '../../../assets/icons/password_yellow.png'

// react-hook-form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LOGIN_INTERFACE } from './../../../services/interfaces/ILoginUser';
import { INPUT_INTERFACE } from './../../../services/interfaces/IInput';
import { POST_LOGIN } from '../../../API/PostSignup';

const SignupForm = () => {

    const { requestSignup } = POST_LOGIN()

    const submitLogin = ( body: INPUT_INTERFACE ) => {
        requestSignup( body )
    }
    const validateForm = yup.object( {

        username:
            yup.string()
                .required( 'campo obrigatório' )
                .min( 6 )
                .max( 10 ),

        password:
            yup.string()
                .required( 'campo obrigatório' )
                .min( 6 )
                .max( 10 )

    } )

    const { register, handleSubmit, formState: { errors } } = useForm<INPUT_INTERFACE>( { resolver: yupResolver( validateForm ) } )







    return (
        <form onSubmit={handleSubmit( submitLogin )} className='form-signup-container'>
            <Input
                label='usuário'
                type='text'
                icon={username}
                registerInput={'username'}
                name='username'
                register={register}
                errors={errors}
            />
            <Input
                label='senha'
                type='password'
                icon={password}
                registerInput={'password'}
                name='password'
                register={register}
                errors={errors}
            />

            <Button />
            <Link to='/login'>
                <p>já tem conta?
                    <span> entrar</span>
                </p>
            </Link>
        </form>
    )
}

export default SignupForm