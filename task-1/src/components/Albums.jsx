// Albums component: one large featured album and four smaller albums in a grid
import featured from '../assets/all-encores.jpg'
import album1 from '../assets/articulation.jpg'
import album2 from '../assets/blurred.jpg'
import album3 from '../assets/eulogy-for-evolution.jpg'
import album4 from '../assets/the-cell.jpg'

function Albums() {
  return (
    <section className="albums">
      <img src={featured} alt="All Encores album cover" className="featured" />
      <img src={album1} alt="Articulation album cover" />
      <img src={album2} alt="Blurred album cover" />
      <img src={album3} alt="Eulogy for Evolution album cover" />
      <img src={album4} alt="The Cell album cover" />
    </section>
  )
}

export default Albums
