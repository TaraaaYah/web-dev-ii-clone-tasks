// Header component: logo and main navigation links
// Generative AI acknowledgement: this component was written with help from
// Claude (Anthropic). Prompt: "Create a React Header component for the
// Erased Tapes clone task with the logo centred and three nav links."
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Erased Tapes logo" className="logo" />

      <nav className="site-nav">
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>
    </header>
  )
}

export default Header
