// Footer component: navigation links, copyright notice and social media icons
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.svg'
import twitter from '../assets/twitter-icon.svg'

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>

      <p>Copyright © 2023 Erased Disks Ltd.</p>

      <div className="footer-icons">
        <a href="#"><img src={facebook} alt="Facebook" /></a>
        <a href="#"><img src={instagram} alt="Instagram" /></a>
        <a href="#"><img src={twitter} alt="Twitter" /></a>
      </div>
    </footer>
  )
}

export default Footer