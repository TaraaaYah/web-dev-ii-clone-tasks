import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Article from './components/Article'

// Main page component for Clone Task 1: Erased Tapes blog post
function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Intro />
        <Article />
      </main>
    </div>
  )
}

export default App
