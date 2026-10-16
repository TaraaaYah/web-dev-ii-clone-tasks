// Author component: short bio, author photo and social media icons
// Generative AI acknowledgement: this component was written with help from
// Claude (Anthropic). Prompt: "Create a React Author component with a bio,
// author photo and three social media icon links."
import photo from '../assets/profile_picture.jpg'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.svg'
import twitter from '../assets/twitter-icon.svg'

function Author() {
  return (
    <section className="author">
      <div className="author-bio">
        <h2>The Author</h2>
        <p>Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.</p>
      </div>

      <img src={photo} alt="Photo of the author" className="author-photo" />

      <div className="social-icons">
        <a href="#"><img src={facebook} alt="Facebook" /></a>
        <a href="#"><img src={instagram} alt="Instagram" /></a>
        <a href="#"><img src={twitter} alt="Twitter" /></a>
      </div>
    </section>
  )
}

export default Author
