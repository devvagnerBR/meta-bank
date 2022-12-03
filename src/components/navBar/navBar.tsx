import React from 'react'

//icons
import home from '../../assets/icons/navbar/home.svg'
import transfer from '../../assets/icons/navbar/transfer_fill.svg'
import history from '../../assets/icons/navbar/historico.svg'
import profile from '../../assets/icons/navbar/profile.svg'

const navbarItens = [
    { id: 1, name: 'home', img: home },
    { id: 2, name: 'transferir', img: transfer },
    { id: 3, name: 'historico', img: history },
    { id: 4, name: 'perfil', img: profile },
]

const itensNavBar_render = navbarItens.map( ( item ) => {
    return (
        <div key={item.id} className='navbar-item'>
            <img src={item.img} alt="" />
            <h4>{item.name}</h4>
        </div>
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