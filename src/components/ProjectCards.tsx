//import styles from './cards.module.css'
import ProjectCard from './ProjectCard'
import styles from './projectcards.module.css'
import { Link } from 'react-router-dom'
import data from '../data.json'

interface CardsProps {
    isHome: boolean;
}

export interface ProjectCard {
    title: string;
    logo: string;
    desc: string;
    github?: string;
    deploy?: string;
    figma?: string;
    isNew?: boolean;
    id: number;
}

const ProjectCards: React.FC<CardsProps> = ({isHome}) => {

    const cardDataHome = isHome ? data.projects.slice(0, 4) : data.projects;
    const title = isHome ? 'Featured Projects' : 'Projects';

  return (
    <div className={styles.cardSection}>
        <h1>{title}</h1>
        <div className={styles.cards}>  
            {cardDataHome.map((card: ProjectCard) => (
                <ProjectCard projectCard={card} buttonText='VIEW MORE' link={`/projects/${card.id}`} inProjectPage={false} />
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

export default ProjectCards