import styles from './projectcard.module.css'
import Button from './Button'
import { useState } from 'react'
import { ProjectCard } from './ProjectCards'
import spotify from '../assets/spotify.svg'
import notion from '../assets/notion.svg'
import pqc from '../assets/pqc.svg'
import hogspot from '../assets/hogspot.svg'
import football from '../assets/football.svg'
import webapp from '../assets/webapp.svg'
import Tag from './Tag'

interface CardProps {
    projectCard: ProjectCard;
    buttonText: string;
    link: string;
    inProjectPage: boolean;
}

const Card: React.FC<CardProps> = ( {projectCard, buttonText, link, inProjectPage} ) => {

    const [fullDescription, setFullDescription] = useState(false);
    const inIndividualProjectPage = window.location.href.includes(`/projects/${projectCard.id}`);

    const imgLogo = 
        projectCard.logo === "spotify" ? spotify : 
        projectCard.logo === "notion" ? notion : 
        projectCard.logo === "pqc" ? pqc :
        projectCard.logo === "hogspot" ? hogspot :
        projectCard.logo === "football" ? football :
        projectCard.logo === "webapp" ? webapp : spotify;

    let description = projectCard.desc;

    if (!fullDescription && !inIndividualProjectPage) {
        description = projectCard.desc.slice(0, 100) + "...";
    }
    

    // const onCardClick = () => {
    //     if (inProjectPage) {
    //         return;
    //     }
    //     window.location.href = `/projects/${card.id}`;
    // }

    return (
    <div className={`${styles.card}`} >
        { projectCard.isNew && (
            <section
                className='hidden md:flex'
            >
                <Tag text="NEW" color="purple" />
            </section>
        )  }
        <div className={styles.title}>

            <h2
                className='flex'
            >
                {projectCard.title}
                <div
                    className='flex sm:hidden'
                >
                    <Tag text="NEW" color="purple" />
                </div>
            </h2>

            {projectCard.deploy ? (
                <a
                    href={`${projectCard.deploy}`}
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
                { projectCard.deploy !== "" && <Button text={"DEPLOYED"} link={projectCard.deploy} />}
                { projectCard.figma !== "" && <Button text={"FIGMA"} link={projectCard.figma} /> }
            </>
        }
        </div>
    </div>
    )
}

export default Card