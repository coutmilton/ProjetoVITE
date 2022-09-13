import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author = "Milton Luiz"
        content = "Aqui gjidjgfjg"
      />
      <Post
        author = "Milton Luiz"
        content = "Aqui gjidjgfjg"
      />
    </div>
  )
}
export default App
