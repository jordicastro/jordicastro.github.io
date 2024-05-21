import styles from './button.module.css'

interface ButtonProps {
    text: string;
    
}

const Button: React.FC<ButtonProps> = ({text}) => {


  return (
    <button className={styles.button}><p>{text}</p></button>
  )
}

export default Button