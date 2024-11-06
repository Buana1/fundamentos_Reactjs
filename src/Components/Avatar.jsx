import styles from './Avatar.module.css';
import perfil from '../assets/profile.jpg'


export function Avatar(props){
    return(
        <img className={styles.avatar} src={props.src} />
    );
}