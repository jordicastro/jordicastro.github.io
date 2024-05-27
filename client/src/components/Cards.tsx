//import styles from './cards.module.css'
import Card from './Card'
import styles from './cards.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

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

    const [backendProjects, setBackendProjects] = useState<CardType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {

            const apiURL = isHome ? "/api/projects?_limit=4" : "/api/projects";
            try {
                const response = await fetch(apiURL);
                const data = await response.json();
                setBackendProjects(data);
                setLoading(false);
            } catch (error) {
                console.log('error fetching projects', error);
            }

        }
        fetchProjects();
    }, [])

    const loadingCards: CardType[] = Array(4).fill({
        title: 'Loading',
        logo: 'Loading',
        desc: 'Loading',
        id: 1
    });


  return (
    <div className={styles.cardSection}>
        <h1>Projects</h1>

            {loading ? 
                <div className={styles.cards}>  
                    {loadingCards.map((card: CardType) => (
                        <Card card={card} buttonText='VIEW MORE' link={`/projects/${card.id}`} inProjectPage={false} loading={loading}/>
                    ))}
                </div> 
            :(
                <div className={styles.cards}>  
                    {backendProjects.map((card: CardType) => (
                        <Card card={card} buttonText='VIEW MORE' link={`/projects/${card.id}`} inProjectPage={false} loading={loading}/>
                    ))}
                </div>
            )
            }
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