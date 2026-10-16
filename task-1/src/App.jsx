import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Article from './components/Article'
import Albums from './components/Albums'
import Author from './components/Author'
import Comments from './components/Comments'

// Main page component for Clone Task 1: Erased Tapes blog post
function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Intro />
        <Article />
        <Albums />
        <Author />
        <Comments />
      </main>
    </div>
  )
}

export default App
