import styles from './aboutcards.module.css'
import AboutCard from './AboutCard'
import imgPCQ from '../assets/about/PCQ.svg'
import imgHogHacks from '../assets/about/hoghacks.png'
import imgMountainBiking from '../assets/about/mountainbiking.png'
import imgMusic from '../assets/about/music.jpeg'
import data from '../data.json'


export interface Card {
    title: string;
    date: string;
    desc: string;
    image: string;
    link?: string;
    id: number;
}


const AboutCards = () => {

    const cardData: Card[] = [
        {
            title: "ACM VICE PRESIDENT",
            date: "JAN 2024 => PRESENT",
            desc: "I am the ACM vice president for The University of Arkansas’ RSO. During my time in the role, I have helped host various events, including meet the professors, where students can delve into UofA research, social and networking events, and this past annual 2024 HogHacks Hackathon, where over 200 students worked in teams to present their innovative projects to a panel of judges. I am currently working on planning events for the upcoming school year, along with leading a team of developers to help remodel the UofA’s ACM website.",
            image: imgHogHacks,
            link: "https://uark-acm.github.io/hoghacks/",
            id: 1,
        },
        {
            title: "PCQ Undergrad Research",
            date: "AUG 2021 => MAY 2022, JUNE 2024 => PRESENT",
            desc: "As a part of my undergraduate honors research, I worked under Dr. Nelson of the University of Arkansas to conduct side channel attacks on post-quantum crypto-graphic algorithms. Utilizing a ChipWhisperer and UFO board, I was able to test the safety of two encryption algorithms using Test Vector Leakage Assessment (TVLA) and present my findings at the University of Arkansas Honors Symposium. Currently, I am creating a full-stack SCA web-app that will enable researchers from across the globe to use the UofA’s PCQ equipment for leakage testing.",
            image: imgPCQ,
            link: "https://github.com/SCA-Capstone/sca-app",
            id: 2,
        },
        {
            title: "Mountain Biking",
            date: "JUNE 2020 => PRESENT",
            desc: "I enjoy riding on the trails of the Greenway, which extends four cities in Northwest Arkansas: from Bentonville, to Rogers and Springdale, ending in Fayetteville. I usually go 20-30 miles and savor the scenic routes. Recently, I took a mountain biking course, which has inspired me to continue riding dirt. Given that Bentonville is the mountain biking capital of the United States, I’m ecstatic to continue learning and going on adventurous bike rides. ",
            link: "https://www.strava.com/athletes/108776798",
            image: imgMountainBiking,
            id: 3,
        },
        {
            title: "MUSIC",
            date: "APRIL 2003 => PRESENT",
            desc: "I LOVE MUSIC. On average, I listen to music for around three to six hours each day. The best compliment I have ever received was that I have the most diverse, unique music taste. Hence, my Spotify wrapped always seems to be all over the place. Because of my love of music, I have interacted with Spotify’s API and created some pretty cool apps that I suggest Spotify implement. Check them out here",
            image: imgMusic,
            id: 4,
        }
    ]

    const aboutCards = data.about;

  return (
    <div className={styles.aboutCardsSection}>
        <h1>About Me</h1>
        <div className={styles.cards}>
            {aboutCards.map((card: Card) => (
                <AboutCard card={card} />
            ))}
        </div>
    </div>
  )
}

export default AboutCards 