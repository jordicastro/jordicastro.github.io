import styles from './card.module.css'
import Button from './Button'
import { useState } from 'react'

interface CardProps {
    title: string;
    logo: string;
    desc: string;
}

const Card: React.FC<CardProps> = ({title, logo, desc }) => {

    const [fullDescription, setFullDescription] = useState(false);

    let description = desc;

    if (!fullDescription) {
        description = desc.slice(0, 100) + "...";
    }

    return (
    <div className={styles.card}>
        <div className={styles.title}>
            <h2>{title}</h2>
            <img src={logo} alt="logo" />
        </div>

        <div className={styles.desc}>
            <p>{description}</p>
        </div>

        <div className={styles.more}>
            <button onClick={ () => (setFullDescription(!fullDescription)) }>
                {fullDescription ? (<p>less</p>) : (<p>more</p>)}
            </button>
        </div> 

        <Button text="VIEW MORE" />
    </div>
    )
}

export default Card