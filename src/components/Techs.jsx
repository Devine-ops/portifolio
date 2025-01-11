import styles from './Techs.module.css'
import tecs from '../assets/tecs.svg'
import { FaJs, FaNode, FaReact, FaHtml5, FaBootstrap, FaCss3Alt } from "react-icons/fa";

function Techs() {
    return (
        <div className={styles.container}>
            <div className={styles.top}></div> 
            <img src={tecs}></img>
            <div className={styles.language}>
                <h1>Linguagens</h1>

                <div className={styles.card}>
                    <div className={styles.tools}>
                        <div className={styles.circle}>
                            <span className={`${styles.red} ${styles.box}`}></span>
                        </div>
                        <div className={styles.circle}>
                            <span className={`${styles.yellow} ${styles.box}`}></span>
                        </div>
                        <div className={styles.circle}>
                            <span className={`${styles.green} ${styles.box}`}></span>
                        </div>

                    </div>
                    <div className={styles.card__content}>
                        <div className={styles.itens}>
                            <FaJs className={styles.item1}/>
                            <FaNode className={styles.item2}/>
                            <FaReact className={styles.item3}/>
                            <FaHtml5 className={styles.item4}/>
                            <FaBootstrap className={styles.item5}/>
                            <FaCss3Alt className={styles.item6}/>
                        </div>
                        <p>Essas tecnologias foram escolhidas por serem populares, eficientes e bem suportadas na comunidade de desenvolvimento, permitindo a criação aplicações web modernas, rápidas e com uma experiência de usuário refinada.</p>
                    </div>
                </div>
             </div> 


            <div className={styles.bottom}></div> 
        </div>
    )
}

export default Techs;