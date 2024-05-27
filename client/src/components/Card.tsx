import styles from './card.module.css'
import Button from './Button'
import { useState } from 'react'
import { CardType } from './Cards'

interface CardProps {
    card: CardType;
    buttonText: string;
    link: string;
    inProjectPage: boolean;
    loading: boolean;
}

const Card: React.FC<CardProps> = ( {card, buttonText, link, inProjectPage, loading} ) => {

    const [fullDescription, setFullDescription] = useState(false);

    let description = card.desc;

    if (!fullDescription) {
        description = card.desc.slice(0, 100) + "...";
    }

    return (
    <div className={loading ? styles.loadingCard : styles.card}>
        <div className={styles.title}>
            <h2>{card.title}</h2>
            <img src={card.logo} alt="logo" />
        </div>

        <div>
            <p>{description}</p>
        </div>

        <div className={styles.more}>
            <button onClick={ () => (setFullDescription(!fullDescription)) }>
                {fullDescription ? (<p>less</p>) : (<p>more</p>)}
            </button>
        </div> 
        <div className={styles.buttons}>
        <Button text={buttonText}  link={link}/>
        {inProjectPage &&
            <Button text={"DEPLOY"} link={card.deploy } />
        }
        </div>
    </div>
    )
}

export default Card