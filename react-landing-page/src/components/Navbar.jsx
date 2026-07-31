import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        Nova<span>UI</span>
      </div>

      <nav>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>

          <li>
            <a href="#reviews">Reviews</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

      <button className="primary-button">
        Get Started
      </button>

    </header>
  );
}

export default Navbar;