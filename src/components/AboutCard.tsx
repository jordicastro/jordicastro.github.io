import styles from './aboutcard.module.css'
import { Card } from './AboutCards';

interface AboutCardProps {
    card: Card;
}

const AboutCard:React.FC<AboutCardProps> = ({ card }) => {

  return (
    <div className={styles.card}>
        <div>
            <h1>{card.title}</h1>
        </div>

        <div>
            <p>{card.date}</p>
        </div>

        <div>
            <p>{card.desc}</p>
        </div>
        {card.link ?  
            <a href={card.link} target="_blank" rel="noreferrer">
                <img className='rounded-3xl' src={card.image} alt="card" />
            </a>
            :
                <img className='rounded-3xl' src={card.image} alt="card" />
        }
    </div>
  )
}

export default AboutCard