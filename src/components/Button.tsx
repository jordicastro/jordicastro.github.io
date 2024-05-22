import styles from './button.module.css'
import { Link } from 'react-router-dom'

interface ButtonProps {
    text: string;
    link: string;
    
}

const Button: React.FC<ButtonProps> = ({text, link}) => {


  return (
    <Link to={link}>
    <button className={styles.button}><p>{text}</p></button>
    </Link>
  )
}

export default Button