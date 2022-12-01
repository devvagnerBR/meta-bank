import axios from 'axios'
import { BASE_URL } from './BaseURL';
import { INPUT_INTERFACE } from './../services/interfaces/IInput';

export const POST_LOGIN = () => {

    const requestSignup = ( body: INPUT_INTERFACE ) => {

        BASE_URL.post( '/signup', body )
            .then( ( res ) => {
                console.log( res )
                window.localStorage.setItem( 'token', res.data )
            } )
            .catch( ( err ) => console.log( err ) )
    }


    return { requestSignup }

}