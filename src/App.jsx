import { Header } from "./components/Header"; // Importa a folha de estilos de Header.modules.css
import { Post } from "./components/Post" // Importa a função criada em Post.jsx
import { Sidebar } from "./components/Sidebar";

import './global.css'; // Importa a folha de estilos de Global
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://ogimg.infoglobo.com.br/in/21395646-9a1-1e3/FT460B/INFOCHPDPICT000059925823.jpg',
      name: 'Cristiano Ronaldo',
      role: 'Football Player'
    },
    content: [
      { type: 'paragraph', content: 'VAI LÁ!!!' },
      { type: 'paragraph', content: 'UMA BESTA ENJAULADA' },
      { type: 'link', content: 'Siga aqui' },
    ],
    publisheAt: new Date('2022-09-18 19:33')
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://i.pinimg.com/474x/9f/55/7f/9f557fdc42e8baa7b789048ee4fcd189.jpg',
      name: 'Neymar Jr',
      role: 'Football Player'
    },
    content: [
      { type: 'paragraph', content: 'VAI QUE DÁ!!!' },
      { type: 'paragraph', content: 'Você está no caminho meu mano.' },
      { type: 'link', content: 'Siga aqui' },
    ],
    publisheAt: new Date('2022-09-18 20:33')
  }

];

export function App() { // Cria e exporta uma função do App
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publisheAt={post.publisheAt}
            />)
          })}
        </main>

      </div>
    </div>
  )
}
export default App
