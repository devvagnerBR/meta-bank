import React from 'react'

//icons
import home from '../../assets/icons/navbar/home.svg'
import transfer from '../../assets/icons/navbar/transfer_fill.svg'
import history from '../../assets/icons/navbar/historico.svg'
import profile from '../../assets/icons/navbar/profile.svg'
import { NavLink } from 'react-router-dom'

const navbarItens = [
    { id: 1, name: 'home', img: home, to: '/account' },
    { id: 2, name: 'transferir', img: transfer, to: '/transferir' },
    { id: 3, name: 'historico', img: history, to: '/extrato' },
    { id: 4, name: 'perfil', img: profile, to: '/perfil' },
]

const itensNavBar_render = navbarItens.map( ( item ) => {
    return (
        <div key={item.id} className='navbar-item'>
            <NavLink to={item.to}>
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
            </NavLink>
        </div >
    )
} )
const Navbar = () => {




    return (
        <div className='navbar-container'>
            {itensNavBar_render}
        </div>
    )
}

export default Navbar