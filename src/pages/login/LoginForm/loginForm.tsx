import React from 'react'
import Message from '../../../components/alertMessage/message'
import Button from '../../../components/button/button'
import Input from '../../../components/input/input'
import { Link } from 'react-router-dom';
import username from '../../../assets/icons/username.png'
import password from '../../../assets/icons/password.png'

// react-hook-form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { INPUT_INTERFACE } from './../../../services/interfaces/IInput';
//

const LoginForm = () => {



    const submitLogin = ( body: INPUT_INTERFACE ) => {
        console.log( body )
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
        <form onSubmit={handleSubmit( submitLogin )} className='loginform-container'>
            <Input
                label='usuário'
                type='text'
                icon={username}
                registerInput={'username'}
                name='username'
                register={register}
                errors={errors}
                className='yellowInput'

            />
            <Input
                label='senha'
                type='password'
                icon={password}
                registerInput={'password'}
                name='password'
                register={register}
                errors={errors}
                className='yellowInput'
            />

            <Message />

            <Button
                className='button-yellow'
            />

            <Link to='/signup'>
                <p>ainda não tem conta?
                    <span>{" "} cadastre-se! </span>
                </p>
            </Link>
        </form>
    )
}

export default LoginForm