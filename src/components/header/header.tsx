import React from 'react'
import logo from '../../assets/images/logo.png'
import login from '../../assets/icons/log-in.svg'
import { Link, useNavigate } from 'react-router-dom'
import { GO_TO_HOME_PAGE } from '../../routes/coordinators'

const Header = () => {

    const navigate = useNavigate()

    return (
        <header className='header'>

            <Link to='/'>
                <h1>Meta
                    <span>Bank</span>
                </h1>
            </Link>

            <div className='login-icon'>
                <Link to='/login' >Login</Link>
                <img src={login} alt="" />
            </div>


        </header>
    )
}

export default Header