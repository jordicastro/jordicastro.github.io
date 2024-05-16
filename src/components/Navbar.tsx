import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <ul>
          <li>
            <img src={reactLogo} alt="Logo" />
          </li>
          <li>
            <p>jordi.dev</p>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li className={styles.button}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.button}>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className={styles.button}>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar