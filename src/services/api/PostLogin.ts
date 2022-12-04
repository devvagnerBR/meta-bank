import axios from 'axios'
import { BASE_URL } from './BaseURL';
import { INPUT_INTERFACE } from '../interfaces/IInput';
import { reach } from 'yup';
import React from 'react';



export const POST_LOGIN = () => {


    const [erro, setErro] = React.useState( null )

    
    const requestLogin = ( body: INPUT_INTERFACE ) => {



        BASE_URL.post( '/login/', body )

            .then( ( res ) => {
                console.log( res )
                setErro( res.data )
                window.localStorage.setItem( 'token', res.data )

            } )
            .catch( ( err ) => console.log( err ) )

    }


    return { requestLogin, erro }

}