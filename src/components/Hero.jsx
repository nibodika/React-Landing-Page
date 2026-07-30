import "../styles/hero.css";
import FadeIn from "./FadeIn";
function Hero() {
  return (
    <section className="hero" id="home">
 
 <FadeIn>
      <div className="hero-content">

        <span className="hero-tag">
          🚀 Modern React + AWS Landing Page
        </span>

        <h1>
          Build Better
          <span> Digital Products</span>
        </h1>

        <p>
          Create beautiful, fast, and responsive websites with React,
          AWS, and modern UI components. Perfect for portfolios,
          startups, and business websites.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started
          </button>

          <button className="btn-secondary">
            Live Demo
          </button>
        </div>

      </div>

      </FadeIn>
      <FadeIn>

      <div className="hero-dashboard">

        <div className="dashboard">

          <div className="dashboard-header">
            Dashboard Overview
          </div>

          <div className="dashboard-grid">

            <div className="card">
              <h3>10K+</h3>
              <span>Users</span>
            </div>

            <div className="card">
              <h3>500+</h3>
              <span>Projects</span>
            </div>

            <div className="card">
              <h3>99.9%</h3>
              <span>Uptime</span>
            </div>

            <div className="card">
              <h3>24/7</h3>
              <span>Support</span>
            </div>

          </div>

        </div>

      </div>

      </FadeIn>

    </section>
  );
}

export default Hero;