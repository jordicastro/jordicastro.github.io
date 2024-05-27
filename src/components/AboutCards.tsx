import styles from './aboutcards.module.css'
import AboutCard from './AboutCard'
import data from '../data.json'


export interface Card {
    title: string;
    date: string;
    desc: string;
    image: string;
    link?: string;
    id: number;
}


const AboutCards = () => {

    const aboutCards = data.about;

  return (
    <div className={styles.aboutCardsSection}>
        <h1>About Me</h1>
        <div className={styles.cards}>
            {aboutCards.map((card: Card) => (
                <AboutCard card={card} />
            ))}
        </div>
    </div>
  )
}

export default AboutCards 