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

            </main>

        </div>
    )
}

export default Homepage