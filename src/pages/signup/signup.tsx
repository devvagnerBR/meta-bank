import React from 'react'
import SignupForm from './signupForm/signupForm'

const Signup = () => {

    return (

        <div className='signup-container animeLeft'>
            <header className='signup-header'>
                <h1>Login</h1>
                <h3>Bem vindo de volta!</h3>
            </header>
            {/* <section className='form-signup-container'>
        
            </section> */}
            <SignupForm />
        </div>
    )
}

export default Signup