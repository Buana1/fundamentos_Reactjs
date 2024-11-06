import styles from './Sidebar.module.css';
import aside from '../assets/capa.jpg'
import perfil from '../assets/profile.jpg'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
             <img className={styles.cover} src={aside} alt="" />
             <div className={styles.profile}> 
                <img className={styles.avatar} src={perfil} />

                <strong>Kevin Buana</strong>
                <span>Web developer</span> 
             </div>
              <footer>
                <a href="#">
                    Editar o seu perfil
                </a>
              </footer>
        </aside>
    );
}