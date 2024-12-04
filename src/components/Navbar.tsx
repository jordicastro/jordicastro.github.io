import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'
import webapp from '../assets/webapp.svg'
const Navbar = () => {

  const linkClass = ({isActive}: {isActive: boolean}) => 
    isActive ? styles.active : styles.button

  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <ul>
          <li className={styles.image}>
            <NavLink to='/'>
            <img src={webapp} alt="Logo" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
            <p>jordi.dev</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <NavLink to='/' className={linkClass}>home</NavLink>
          </li>
          <li>
            <NavLink to='/projects'className={linkClass}>projects</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={linkClass}>about</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar