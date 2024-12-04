import styles from './card.module.css'
import Button from './Button'
import { useState } from 'react'
import { CardType } from './Cards'
import spotify from '../assets/spotify.svg'
import notion from '../assets/notion.svg'
import pqc from '../assets/pqc.svg'
import hogspot from '../assets/hogspot.svg'
import football from '../assets/football.svg'
import webapp from '../assets/webapp.svg'

interface CardProps {
    card: CardType;
    buttonText: string;
    link: string;
    inProjectPage: boolean;
}

const Card: React.FC<CardProps> = ( {card, buttonText, link, inProjectPage} ) => {

    const [fullDescription, setFullDescription] = useState(false);
    const inIndividualProjectPage = window.location.href.includes(`/projects/${card.id}`);

    const imgLogo = 
        card.logo === "spotify" ? spotify : 
        card.logo === "notion" ? notion : 
        card.logo === "pqc" ? pqc :
        card.logo === "hogspot" ? hogspot :
        card.logo === "football" ? football :
        card.logo === "webapp" ? webapp : spotify;

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
                    <img src={imgLogo} alt="logo" />
                </a>
            ) : (
                <img src={imgLogo} alt="logo" />
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