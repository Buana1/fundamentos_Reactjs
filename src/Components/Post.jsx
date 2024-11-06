import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from './Comment';


export function Post({ author, publishedAt, content }){

    // Formatação da data
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);
    const comments =[

        1,
        2,
        3
    ];
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                
                {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea 
                placeholder='Deixe o seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment />
                })}
            </div>
        </article>
    )
}