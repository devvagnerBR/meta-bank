import React from 'react'
import login from '../../assets/icons/log-in.svg'

const Input = () => {

    return (
        <div className='input-container'>
            <label
                htmlFor="">
                username
            </label>

            <section className='input-icon-container'>

                <section className='container-img'>
                    <img
                        src={login}
                        alt="icon"
                    />
                </section>

                <input
                    type="text"
                />


            </section>

        </div>
    )
}

export default Input