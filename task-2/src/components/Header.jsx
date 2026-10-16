// Header component: watch.it logo, category links and search button
// Generative AI acknowledgement: this component was written with help from
// Claude (Anthropic). Prompt: "Create a React Header component for watch.it
// with the logo, four category links and a search button."
function Header() {
  return (
    <header className="site-header">
      <h1 className="logo">watch.it</h1>

      <nav className="site-nav">
        <a href="#">Action</a>
        <a href="#">Comedy</a>
        <a href="#">Romance</a>
        <a href="#">Drama</a>
      </nav>

      <button className="search-button">SEARCH</button>
    </header>
  )
}

export default Header
