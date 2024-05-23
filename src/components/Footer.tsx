import styles from './footer.module.css'
import linkedin_w from '../assets/logos/linkedin_w.svg'
import github_w from '../assets/logos/github_w.svg'
import spotify_w from '../assets/logos/spotify_w.svg'

const Footer = () => {

    const onAcknowledgeClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

  return (
    <div className={styles.footer}>
        <div>
            jordi.dev
        </div>

        <div>
            <button onClick={() => (onAcknowledgeClick())}>back to top</button>
        </div>

        <div className={styles.links}>
            <a href="https://www.linkedin.com/in/jordicastr0/">
                <img src={linkedin_w} alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/jordicastro">
                <img src={github_w} alt="GitHub" />
            </a>
            <a href="https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5">
                <img src={spotify_w} alt="Spotify" />
            </a>
        </div>
    </div>
  )
}

export default Footer