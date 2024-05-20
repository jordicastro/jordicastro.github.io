import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <ul>
          <li className={styles.image}>
            <Link to='/'>
            <img src={logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link to='/'>
            <p>jordi.dev</p>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li className={styles.button}>
            <Link to='/'>home</Link>
          </li>
          <li className={styles.button}>
            <Link to='/projects'>projects</Link>
          </li>
          <li className={styles.button}>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar