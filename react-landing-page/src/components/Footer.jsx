import "../styles/footer.css";
import FadeIn from "./FadeIn";
function Footer() {
  return (
    <footer className="footer">
     <FadeIn>
      <div className="footer-container">

        <div className="footer-about">

          <h2>NovaUI</h2>

          <p>
            Build beautiful, responsive, and modern React websites with reusable
            components and clean code.
          </p>

          <div className="social-links">
            <a href="#">🌐</a>
            <a href="#">💼</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>

        </div>

        <div className="footer-links">

          <h3>Company</h3>

          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

        </div>

        <div className="footer-links">

          <h3>Resources</h3>

          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

        </div>

        <div className="footer-newsletter">

          <h3>Newsletter</h3>

          <p>
            Subscribe to receive updates and new features.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>
      
      </FadeIn>
      
      <div className="footer-bottom">

        <p>
          © 2026 NovaUI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;