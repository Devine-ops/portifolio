import styles from "./Sobre.module.css"
import Hobbies from "./Hobbies"
import Techs from "./Techs"

function Sobre() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.gradiente}>
                    <div className={styles.user}>
                        <div className={styles.person}></div>
                    </div>

                    <div className={styles.wrap}>

                        <div className={styles.title}>
                            <h1>Vinicius</h1>
                            <h3>front-end - Ui/Ux</h3>
                        </div>

                        <div className={styles.description}>
                            <p>Me chamo Vinicius, sou entusiasta em programação e estou cursando<span>ADS - Análise e Desenvolvimento de Sistemas. </span> Criatividade, eficiência e uma abordagem direta definem o meu trabalho. Minha paixão por desenvolvimento web me motiva a aprimorar constantemente minhas habilidades, sempre buscando elevar meu nível. Atualmente, estou focado em fortalecer minhas habilidades em desenvolvimento backend, e estou ansioso para enfrentar novos desafios e oportunidades que me façam crescer e me destacar nessa área. Vamos construir algo incrível juntos!</p>
                        </div>
                    </div>
                </div>

            </div>
            <Techs />
            <Hobbies/>
        </>

    )
}

export default Sobre;