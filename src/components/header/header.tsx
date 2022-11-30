import React from 'react'
import logo from '../../assets/images/logo.png'
import login from '../../assets/icons/log-in.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'


const Header = () => {

    return (

        <header className='header'>
            <Link to='/'>
                <h1>Meta
                    <span>Bank</span>
                </h1>
            </Link>

        </header>
    )

}

export default Header