import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/navBar/navBar'
import fnc from '../../../assets/icons/fnc_icon.png'
import eye from '../../../assets/icons/eyeon.svg'
const Account = () => {
    return (
        <div className='account-container'>
            <main className='account-content'>
                <header className='account-title-container' >
                    <h1>Olá, Wagner!</h1>
                    <Link to=''>Ver perfil</Link>
                </header>

                <section className='account-card-container'>
                    <section className='account-card'>

                        <header className='title-card'>
                            <h1>M</h1>
                            <img src={fnc} alt="" />
                        </header>

                        <main className='infos-card'>
                            <div className='balance-title-card'>
                                <h4>Balance</h4>
                                <img src={eye} alt="" />
                            </div>
                        </main>
                    </section>
                </section>

                <Navbar />
            </main>
        </div>
    )
}

export default Account