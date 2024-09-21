import styles from './card.module.css'
import Button from './Button'
import { useState } from 'react'
import { CardType } from './Cards'

interface CardProps {
    card: CardType;
    buttonText: string;
    link: string;
    inProjectPage: boolean;
}

const Card: React.FC<CardProps> = ( {card, buttonText, link, inProjectPage} ) => {

    const [fullDescription, setFullDescription] = useState(false);
    const inIndividualProjectPage = window.location.href.includes(`/projects/${card.id}`);

    let description = card.desc;

    if (!fullDescription && !inIndividualProjectPage) {
        description = card.desc.slice(0, 100) + "...";
    }

    // const onCardClick = () => {
    //     if (inProjectPage) {
    //         return;
    //     }
    //     window.location.href = `/projects/${card.id}`;
    // }

    return (
    <div className={styles.card} >

        <div className={styles.title}>
            <h2>{card.title}</h2>

            {card.deploy ? (
                <a
                    href={`${card.deploy}`}
                >
                    <img src={card.logo} alt="logo" />
                </a>
            ) : (
                <img src={card.logo} alt="logo" />
            )}
        </div>

        <div className={styles.desc}>
            <p>{description}</p>
        </div>

        {!inIndividualProjectPage && (
            <div className={styles.more}>
                <button onClick={ () => (setFullDescription(!fullDescription)) }>
                    {fullDescription ? (<p>less</p>) : (<p>more</p>)}
                </button>
            </div> 
        )}

        <div className={styles.buttons}>
        <Button text={buttonText}  link={link}/>
        {inProjectPage &&
            <>
                { card.deploy !== "" && <Button text={"DEPLOYED"} link={card.deploy} />}
                { card.figma !== "" && <Button text={"FIGMA"} link={card.figma} /> }
            </>
        }
        </div>
    </div>
    )
}

export default Card