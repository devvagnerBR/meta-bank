import React from 'react'
import login from '../../assets/icons/log-in.svg'
import { INPUT_INTERFACE } from '../../services/interfaces/IInput'


const Input = ( { label, icon, name, placeholder, className, type = 'text' }: INPUT_INTERFACE ) => {
    //label,icon,type,name,value
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
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    type={type}
                />

            </section>


        </div>
    )
}

export default Input