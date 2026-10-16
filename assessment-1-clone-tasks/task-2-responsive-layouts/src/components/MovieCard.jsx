// MovieCard component: one movie with its poster, description and Watch Now button
function MovieCard({ title, poster, text }) {
  return (
    <article className="movie-card">
      <img src={poster} alt={title + ' poster'} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{text}</p>
        <button>WATCH NOW</button>
      </div>
    </article>
  )
}

export default MovieCard