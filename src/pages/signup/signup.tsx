import React from 'react'
import Loading from '../../components/loading/loading'
import useLoading from '../../hooks/setLoading'
import SignupForm from './signupForm/signupForm'



const Signup = () => {

    const { loading } = useLoading()

    if ( loading ) return <Loading />
    else
        return (

            <div className='signup-container' >
                <header className='signup-header'>
                    <h1>Cadastro</h1>
                    <h3> Bem vindo a família <span>Meta</span>!</h3>
                </header>
                <SignupForm />
            </div >

        )
}

export default Signup