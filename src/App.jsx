import { Header } from "./components/Header"; // Importa a folha de estilos de Header.modules.css
import { Post } from "./components/Post" // Importa a função criada em Post.jsx
import { Sidebar } from "./components/Sidebar";

import './global.css'; // Importa a folha de estilos de Global
import styles from './App.module.css'


export function App() { // Cria e exporta uma função do App
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post // Chama a função post e passa propriedade para ela
            author="Milton Luiz"
            content="Aqui gjidjgfjg"
          />
          <Post
            author="Milton Luiz"
            content="Aqui gjidjgfjg"
          />
        </main>

      </div>
    </div>
  )
}
export default App
