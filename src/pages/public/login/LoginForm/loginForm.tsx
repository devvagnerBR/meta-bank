import React from 'react'
import Message from '../../../../components/alertMessage/message'
import Button from '../../../../components/button/button'
import Input from '../../../../components/input/input'
import { Link } from 'react-router-dom';
import username from '../../../../assets/icons/username.png'
import password from '../../../../assets/icons/password.png'

// react-hook-form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { INPUT_INTERFACE } from '../../../../services/interfaces/IInput';
import { POST_LOGIN } from '../../../../services/api/PostLogin';
//

const LoginForm = () => {

    const { requestLogin, erro } = POST_LOGIN()

    const submitLogin = ( body: INPUT_INTERFACE ) => {
        requestLogin( body )
    }

    const validateForm = yup.object( {

        username:
            yup.string()
                .required( 'campo obrigatório' ),

        password:
            yup.string()
                .required( 'campo obrigatório' )


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
                className='yellowInput'
                errors={errors}
            />
            <Input
                label='senha'
                type='password'
                icon={password}
                registerInput={'password'}
                name='password'
                register={register}
                className='yellowInput'
                errors={errors}
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