import React from 'react'
import { BUTTON_INTERFACE } from './../../services/interfaces/IButton';

const Button = ( { className }: BUTTON_INTERFACE ) => {

    return (
        <button className={`${'button'} ${className}`}>
            entrar
        </button>
    )
}

export default Button