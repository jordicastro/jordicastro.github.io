import styles from './hero.module.css'
import heroPic from '../assets/heroPicture.svg'
import linkedin from '../assets/logos/linkedin_p.svg'
import github from '../assets/logos/github_p.svg'
import javascript from '../assets/logos/javascript.svg'
import typescript from '../assets/logos/typescript.svg'
import react from '../assets/logos/react.svg'
import html from '../assets/logos/html.svg'
import css from '../assets/logos/css.svg'
import tailwind from '../assets/logos/tailwind.svg'
import python from '../assets/logos/python.svg'
import nextjs from '../assets/logos/nextjs.svg'

const Hero = () => {
  return (
    <>
        <div className={styles.hero}>
            <div className={styles.img} >
                <img className={styles.hex} src={heroPic} alt="Hero" />
            </div >
            <div className={styles.text} >
                <h1>Hi, I'm Jordi 👋</h1>
                <p>I’m a passionate full stack React + Next.js developer based in Fayetteville, Arkansas.📍</p>
                <div className={styles.links} >
                    <a href="https://www.linkedin.com/in/jordicastr0/" >
                        <img src={linkedin} alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/jordicastro">
                        <img src={github} alt="GitHub" />
                    </a>
                </div>
            </div >
        </div>

        <div className={styles.logocarousel}>
            <img src={javascript} alt="JavaScript" />
            <img src={typescript} alt="TypeScript" />
            <img className={styles.reactspin} src={react} alt="React" />
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={tailwind} alt="Tailwind" />
            <img src={python} alt="Python" />
            <img src={nextjs} alt="Nextjs" />
        </div>
    </>
  )
}

export default Hero