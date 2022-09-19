import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://i.pinimg.com/474x/9f/55/7f/9f557fdc42e8baa7b789048ee4fcd189.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Neymar Jr</strong>
                        <span>Player Football</span>
                    </div>
                </div>

                <time title="17 de setembro ás 08:13h" dateTime="2022-09-17 08:13:13">Públicado há 1h </time>
            </header>

            <div className={styles.content}>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}