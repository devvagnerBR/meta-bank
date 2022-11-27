import front_Card from '../../assets/images/credit card.png'
import back_card from '../../assets/images/back-card.png'

const Homepage = () => {
    return (


        <div className="homepage-container">

            <main className="homepage-content">
                <h1>Meta <span> Bank </span> </h1>

                <section className="text-1">
                    <h2>
                        Realizar e receber <br />
                        pagamentos nunca foi <br />
                        tão <span>fácil.</span>
                    </h2>
                </section>

                <aside className='cards-preview'>
                    <img src={back_card} alt="" />
                    <img src={front_Card} alt="" />
                </aside>

                <section className='text-2'>
                    <h2>o banco feito por <span> devs </span> <br />
                        para <span> devs. </span>
                    </h2>
                </section>


                <button className='btn'>abrir uma conta</button>
            </main>

        </div>
    )
}

export default Homepage