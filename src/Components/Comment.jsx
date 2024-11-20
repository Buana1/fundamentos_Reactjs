import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import perfil from '../assets/profile.jpg';


export function Comment({ content }){
    return(
        <div className={styles.comment}>
            <img className={styles.avatar} src={perfil} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kevin Buana</strong>
                            <time title="1 de Novembro às 08:50" dateTime="2024-11-01 08:50:13">Cerca de 2h atráz</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span> 20 </span>
                    </button>
                </footer>
            </div>
        </div>
        
    )
}