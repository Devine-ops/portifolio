import styles from "../components/Projetos.module.css"
import starbucks from "../assets/starbucks.svg"
import danki from "../assets/danki.svg"
import truck from "../assets/truck.svg"
import danki2 from "../assets/danki2.svg"
import corporate from "../assets/corporate.svg"
import car from "../assets/car.svg"
function Projetos() {
    return (
        <div className={styles.container}>
            <h1>Meus Projetos</h1>

            <div className={styles.cards_wrap}>

                <div className={styles.card}>
                    <div className={styles.fundo}>
                        <img src={starbucks}></img>
                        <div className={styles.description}>
                            <p>Replica do site StarBucks.<br></br></p>
                            <a href="https://devine-ops.github.io/starbucks/">Visitar</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.fundo}>
                        <img src={car}></img>
                        <div className={styles.description}>
                            <p>Pagina de vendas de Carros.</p>
                            <a href="https://devine-ops.github.io/dealership/">Visitar</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.fundo}>
                        <img src={corporate}></img>
                        <div className={styles.description}>
                            <p>Página corporativa.</p>
                            <a href="https://devine-ops.github.io/react-bootstrap/">Visitar</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.fundo}>
                        <img src={danki2}></img>
                        <div className={styles.description}>
                            <p>Página institucional.</p>
                            <a href="">Visitar</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.fundo}>
                        <img src={truck}></img>
                        <div className={styles.description}>
                            <p>Site institucional TruckMe.</p>
                            <a href="https://truckmevuejs.vercel.app">Visitar</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.fundo}>
                        <img src={danki}></img>
                        <div className={styles.description}>
                            <p>Página descritiva.</p>
                            <a href="">Visitar</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Projetos 