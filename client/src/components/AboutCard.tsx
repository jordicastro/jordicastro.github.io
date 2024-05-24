import styles from './aboutcard.module.css'
import { Card } from './AboutCards';

interface AboutCardProps {
    card: Card;
    loading?: boolean;
}

const AboutCard:React.FC<AboutCardProps> = ({ card, loading }) => {

  return (
    <div className={loading ? styles.loadingCard : styles.card}>
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
                <img src={card.image} alt="card" />
            </a>
            :
            <img src={card.image} alt="card" />
        }
    </div>
  )
}

export default AboutCard