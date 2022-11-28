import front_Card from '../../assets/images/credit card.png'
import back_card from '../../assets/images/back-card.png'

const Homepage = () => {
    return (


        <div className="homepage-container">

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

            <main className='homepage-cards'>
                <img src={front_Card} alt="front-credit-card" />
                <img src={back_card} alt="back-credit-card" />
            </main>

            <section className='homepage-subtitle2'>
                <h2>o banco feito por <span>devs</span> <br />
                    para <span>devs.</span>
                </h2>
            </section>

            <section className='homepage-buttons'>
                <button>entrar</button>
                <button>abra sua conta</button>
            </section>
        </div>
    )
}

export default Homepage