import styles from "../components/Hobbies.module.css";

function Hobbies() {
    return (
        <div className={styles.container}>
            <h1>Hobbies</h1>
            <div className={styles.wrapper}>

                <div className={styles.wrap1}>
                    <div className={styles.box1}></div>
                    <div className={styles.description1}>
                        <h2>cozinhar</h2>
                    </div>
                </div>

                <div className={styles.wrap2}>
                    <div className={styles.box2}></div>
                    <div className={styles.description2}>
                        <h2>Tempo de qualidade com minha noiva</h2>
                    </div>
                </div>

                <div className={styles.wrap3}>
                    <div className={styles.box3}></div>
                    <div className={styles.description3}>
                        <h2>jogar</h2>
                    </div>
                </div>

                <div className={styles.wrap4}>
                    <div className={styles.box4}></div>
                    <div className={styles.description4}>
                        <h2>Planejar</h2>
                    </div>
                </div>

                <div className={styles.wrap5}>
                    <div className={styles.box5}></div>
                    <div className={styles.description5}>
                        <h2>Programar</h2>
                    </div>
                </div>

                <div className={styles.wrap6}>
                    <div className={styles.box6}></div>
                    <div className={styles.description6}>
                        <h2>Planejar</h2>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Hobbies;
