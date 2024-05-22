import styles from './notfoundmessage.module.css'
import notFoundTriangle from '../assets/notFoundTriangle.svg'
import { Link } from 'react-router-dom'

const NotFoundMessage = () => {
  return (
    <div className={styles.notfoundcard}>
        <div>
            <img src={notFoundTriangle} alt="404 Triangle" />
        </div>

        <div>
            <h1>404 NOT FOUND</h1>
        </div>

        <div>
            <p>this page does not exist.</p>
        </div>

        <div>
            <Link to='/'>
                <button className={styles.button} >
                    <p>return</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default NotFoundMessage