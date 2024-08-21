import styles from "./Contato.module.css"
import { FaGithub, FaWhatsapp, FaSquareGooglePlus, FaLinkedin  } from "react-icons/fa6";

function Contato() {
    return (
        <div className={styles.container}>
        <div className={styles.laptop}>
            <div className={styles.screen}>
                <div className={styles.header}></div>
                <div className={styles.text}>entre em contato!</div>
                
            </div>
            <div className={styles.keyboard}></div>
        </div>
        <div className={styles.contacts}>
            <a href="https://github.com/Devine-ops"><FaGithub /></a>
            <a href="https://wa.link/g6wosm"><FaWhatsapp /></a>
            <a href="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWrRnXfFKspgCxMDDKmqKlHBnkjLkkjwCpkGdlVgVVmflrlcWjfKszwSjgbptWFzwgmScnPBg"><FaSquareGooglePlus /></a>
            <a href="www.linkedin.com/in/vinicius-gabriel-oliveira-de-sousa"><FaLinkedin /></a>
        </div>
        </div>
    )
}


export default Contato