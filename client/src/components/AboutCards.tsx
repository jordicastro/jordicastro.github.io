import styles from './aboutcards.module.css'
import AboutCard from './AboutCard'
import { useEffect, useState } from 'react'

export interface Card {
    title: string;
    date: string;
    desc: string;
    image: string;
    link?: string;
    id: number;
}


const AboutCards = () => {

    const [backendAboutData, setBackendAboutData] = useState<Card[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchAboutData = async () => {

            try {
            const res = await fetch('/api/about');
            const data = await res.json();
            setBackendAboutData(data);
            } catch (error) {
                console.log('error fetching AboutData', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchAboutData();
    }, [])

    const aboutCards = backendAboutData;
    const loadingCards: Card[] = Array(4).fill({
        title: 'Loading',
        date: 'Loading',
        desc: 'Loading',
        image: 'Loading',
        id: 1
    });

  return (
    <div className={styles.aboutCardsSection}>
        <h1>About Me</h1>
        {loading ? (
            <div className={styles.cards}>
                {loadingCards.map((card: Card) => (
                    <AboutCard card={card} loading={loading} />
                ))}
            </div>
        ) : (
            <div className={styles.cards}>
                {aboutCards.map((card: Card) => (
                    <AboutCard card={card} />
                ))}
            </div>
        )}
    </div>
  )
}

export default AboutCards 