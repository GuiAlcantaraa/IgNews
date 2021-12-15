import { FaGithub } from 'react-icons/fa';
import Styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';


export function SigninButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button
            type="button"
            className={Styles.signinButton}
        >
            <FaGithub color="#04d361" />
            Guilherme Alcantara
            <FiX color="#737380" className={Styles.closeIcon} />
        </button>

    ) : (
        <button
            type="button"
            className={Styles.signinButton}
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}