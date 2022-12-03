import front_Card from '../../../assets/images/credit card.png'
import back_card from '../../../assets/images/back-card.png'
import { Link } from 'react-router-dom'
import Header from '../../../components/header/header'
import Loading from '../../../components/loading/loading'

import useLoading from '../../../hooks/useLoading'

const Homepage = () => {

    const { loading } = useLoading()

    if ( loading ) return <Loading />
    else
        return (


            < div className="homepage-container" >
                < Header />
                <header className='homepage-title'>
                    <h1>Banco 100% digital</h1>
                </header>
                <section className='homepage-subtitle'>
                    <h2>
                        Realizar e receber <br />
                        pagamentos nunca foi <br />
                        tão
                        <span> fácil. </span>
                    </h2>
                </section>

                <main className='homepage-cards '>
                    <img className='animeLeft' src={front_Card} alt="front-credit-card" />
                    <img className='animeLeft' src={back_card} alt="back-credit-card" />
                </main>


                <section className='homepage-subtitle2'>
                    <h2>o banco feito por <span>devs</span> <br />
                        para <span>devs.</span>
                    </h2>
                </section>

                <section className='homepage-buttons'>

                    <Link to='/login'>
                        <button>entrar</button>
                    </Link>

                    <Link to='/signup'>
                        <button id='btn-open'>abra sua conta</button>
                    </Link>



                </section>
            </ div>


        )
}

export default Homepage