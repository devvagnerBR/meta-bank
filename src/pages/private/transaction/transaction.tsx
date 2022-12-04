import React from 'react'
import Navbar from '../../../components/navBar/navBar'

const Transaction = () => {
    return (
        <div className='transaction-container'>
            <header className='header-transaction-container'>
                <h1>Wagner</h1>
                <h4>Transferir</h4>
            </header>
            <section className='transaction-content-container'>
            </section>
            <Navbar />
        </div>
    )
}

export default Transaction