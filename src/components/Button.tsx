import styles from './button.module.css'
import { Link } from 'react-router-dom'

interface ButtonProps {
    text: string;
    link?: string;
    
}

const Button: React.FC<ButtonProps> = ({text, link}) => {


  return (
    link ? (
      <Link className={styles.button} to={link}>
        <button className={styles.center}><p>{text}</p></button>
      </Link>
    ) : (
      <div className={styles.button}>
        <button className={styles.center}><p>{text}</p></button>
      </div>
    )
  )
}

export default Button