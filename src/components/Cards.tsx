//import styles from './cards.module.css'
import Card from './Card'
import styles from './cards.module.css'
import logo from '../assets/logo.svg'
import notion from '../assets/notion.svg'
import spotify from '../assets/spotify.svg'
import football from '../assets/football.svg'
import { Link } from 'react-router-dom'

interface CardsProps {
    isHome: boolean;
}


const Cards: React.FC<CardsProps> = ({isHome}) => {

    const cardData = [
        {
        title: "web-app",
        logo: logo,
        desc: "This is my web-app. It’s pretty cool! Have you seen the Figma for it? This app displays a list of projects I’ve worked on or am currently working on. An about page is included. Made with React.js + Vite.",
        id: 1,
        },
        {
        title: "notion-app",
        logo: notion,
        desc: "Recreating Notion’s award-winning note-taking app from scratch. Added page routing, improved shortcuts and hotkeys. Made with React.js.",
        id: 2,
        },
        {
        title: "spotify-app",
        logo: spotify,
        desc: "A web app created using React + Spotify’s API that searches for music, albums, mapped neatly in bins. accessing user info using OAUTH, this app has various features, including enabling users to play albums / playlists backwards, playing this-or-that with two songs the user listens to frequently, and an overview of their listening tendencies (similar to Spotify Wrapped). Made with React + Next.js .",
        id: 3,
        },
        {
        title: "nfl-app",
        logo: football,
        desc: "Utilizes NFL’s API to populate our database. Prompts users to enter SQL queries to update, delete, + view the DB. Made in React + Next.js",
        id: 4,
        }
    ]

    const cardDataHome = cardData.slice(0, 4);

  return (
    <div className={styles.cardSection}>
        <h1>Projects</h1>
        <div className={styles.cards}>  
             
            {cardDataHome.map((card) => (
                <Card title={card.title} logo={card.logo} desc={card.desc} link={`/projects/${card.id}`}/>
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