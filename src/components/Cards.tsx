//import styles from './cards.module.css'
import Card from './Card'
import styles from './cards.module.css'
import { Link } from 'react-router-dom'
import data from '../data.json'

interface CardsProps {
    isHome: boolean;
}

export interface CardType {
    title: string;
    logo: string;
    desc: string;
    github?: string;
    deploy?: string;
    id: number;
}

const Cards: React.FC<CardsProps> = ({isHome}) => {

    const cardDataHome = data.projects.slice(0, 4);

  return (
    <div className={styles.cardSection}>
        <h1>Projects</h1>
        <div className={styles.cards}>  
            {cardDataHome.map((card: CardType) => (
                <Card card={card} buttonText='VIEW MORE' link={`/projects/${card.id}`} inProjectPage={false} />
            ))}
        </div>
        { isHome ? 
            (
            <Link className={styles.button} to='/projects'>
                <button className={styles.center}>VIEW ALL PROJECTS</button>
            </Link>
            ) : 
            null}
    </div>
  )
}

export default Cards