import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/2.svg'



function NavBar() {
    return (
        <div className={styles.navegacao}>
            <Link to='/'><img src={logo}></img></Link>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
                <li>
                    <Link to="/contactus">Contate-me</Link>
                </li>
            </ul>

        </nav>
        </div>
    )
}
export default NavBar;