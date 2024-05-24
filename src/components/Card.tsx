import styles from './card.module.css'
import Button from './Button'
import { useState } from 'react'
import { CardType } from './Cards'

interface CardProps {
    card: CardType;
    link: string;
}

const Card: React.FC<CardProps> = ( {card, link} ) => {

    const [fullDescription, setFullDescription] = useState(false);

    let description = card.desc;

    if (!fullDescription) {
        description = card.desc.slice(0, 100) + "...";
    }

    return (
    <div className={styles.card}>
        <div className={styles.title}>
            <h2>{card.title}</h2>
            <img src={card.logo} alt="logo" />
        </div>

        <div className={styles.desc}>
            <p>{description}</p>
        </div>

        <div className={styles.more}>
            <button onClick={ () => (setFullDescription(!fullDescription)) }>
                {fullDescription ? (<p>less</p>) : (<p>more</p>)}
            </button>
        </div> 

        <Button text="VIEW MORE"  link={link}/>
    </div>
    )
}

export default Card