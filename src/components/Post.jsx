import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/coutmilton.png" />
                    <div className={styles.authorInfo}>
                        <strong>Milton Luiz</strong>
                        <span>React Developer</span>
                    </div>
                </div>

                <time title="17 de setembro ás 08:13h" dateTime="2022-09-17 08:13:13">Públicado há 1h </time>
            </header>

            <div className={styles.content}>
                <p> Fala galera</p>
                <p> O elemento _HTML _representa uma seção de uma página que consiste de conteúdo que é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo. </p>
                <p>👍 <a href='#'> Siga aqui</a></p>
                <p>
                    <a href='#'> #Oi </a>
                    <a href="#"> #Siga </a>
                    <a href="#"> #VamBora </a>
                </p>
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
        </article>
    )
}