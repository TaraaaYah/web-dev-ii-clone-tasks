import './App.css'
import Header from './components/Header'
import MovieCard from './components/MovieCard'
import rogerRabbit from './assets/who-framed-roger-rabbit.jpg'
import hook from './assets/hook.jpg'
import laLaLand from './assets/la-la-land.jpg'
import hiddenFigures from './assets/hidden-figures.jpg'
import palmSprings from './assets/palm-springs.jpg'
import barbie from './assets/barbie.jpg'

// Generative AI acknowledgement: the movie list and the map() below were
// written with help from Claude (Anthropic). Prompt: "Store the six watch.it
// movies in an array and render a MovieCard for each one."

// The six movies shown on the page (text from the provided text-content.md)
const movies = [
  {
    title: 'Who Framed Roger Rabbit (1988)',
    poster: rogerRabbit,
    text: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    title: 'Hook (1991)',
    poster: hook,
    text: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    title: 'La La Land (2016)',
    poster: laLaLand,
    text: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    title: 'Hidden Figures (2016)',
    poster: hiddenFigures,
    text: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: 'Palm Springs (2020)',
    poster: palmSprings,
    text: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    title: 'Barbie (2023)',
    poster: barbie,
    text: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
]

// Main page component for Clone Task 2: watch.it movie streaming site
function App() {
  return (
    <div>
      <Header />
      <main className="movies">
        {/* Make one MovieCard for each movie in the list */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            poster={movie.poster}
            text={movie.text}
          />
        ))}
      </main>
    </div>
  )
}

export default App
