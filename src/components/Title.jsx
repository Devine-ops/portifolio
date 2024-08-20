import styles from "../components/Title.module.css"

function Title() {
    return (
        <div className={styles.containerEstilo}>
            <p className={styles.pParagrafo}>Seja bem vindo ao meu <span className={styles.sSpann}>PORTFÓLIO</span></p>
            <h1 className={styles.tituloEstilo}>Vinicius</h1>
        </div>
    )
}

export default Title;