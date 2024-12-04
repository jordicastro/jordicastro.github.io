import styles from './aboutcard.module.css'
import { Card } from './AboutCards';
import hoghacks from '../assets/hoghacks.png'
import pqcUndergrad from '../assets/pqcUndergrad.png'
import strava from '../assets/strava.svg'
import unveranosinti from '../assets/unveranosinti.png'

interface AboutCardProps {
    card: Card;
}

const AboutCard:React.FC<AboutCardProps> = ({ card }) => {

    const imgLogo =
        card.image === "hoghacks" ? hoghacks :
        card.image === "pqcUndergrad" ? pqcUndergrad :
        card.image === "strava" ? strava :
        card.image === "unveranosinti" ? unveranosinti : hoghacks;

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
                <img className='rounded-3xl' src={imgLogo} alt="card" />
            </a>
            :
                <img className='rounded-3xl' src={imgLogo} alt="card" />
        }
    </div>
  )
}

export default AboutCard