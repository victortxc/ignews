import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';
export function SignInButton() {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
         <>
       
        <button className={styles.signInButton} type="button">
             <FaGithub color="#eba417" />
            Sign in with Github
        </button>
        </>
    ) : (
         <>
        
        <button className={styles.signInButton} type="button">
            <FaGithub color="#04d361" />
            Victor Medeiros
            <FiX className={styles.closeIcon} color="#737380" />
        </button>
        </>
    )
}