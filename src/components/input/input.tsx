import React from 'react'
import login from '../../assets/icons/log-in.svg'
import { INPUT_INTERFACE } from '../../services/interfaces/IInput'
import { useForm } from 'react-hook-form';
import Message from '../alertMessage/message';



const Input = ( { label, errors, register, registerInput, icon, name, placeholder, className, type = 'text' }:INPUT_INTERFACE ) => {


    return (
        <div className={`${'input-container'} ${className}`}>

            <label
                htmlFor={name}>
                {label}
            </label>
            <section className='input-icon-container'>
                <section className='container-img'>
                    <img
                        src={icon}
                        alt={name}
                    />

                </section>

                <input
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    {...register( registerInput )}
                />
            </section>
            <p className='message-container'>{errors?.[registerInput]?.message}</p>
        </div>
    )
}

export default Input