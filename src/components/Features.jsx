import { features } from "../data/data";
import "../styles/features.css";
import FadeIn from "./FadeIn";

function Features() {
  return (
    <section className="features" id="features">

      <div className="section-title">

        <span>OUR FEATURES</span>

        <h2>Everything You Need</h2>

        <p>
          Build modern applications with clean code,
          responsive layouts and powerful features.
        </p>

      </div>

      <div className="feature-grid">

        {features.map((item, index) => (
          <FadeIn key={index}>
            <div className="feature-card">

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <a href="#">
                Learn More →
              </a>

            </div>
          </FadeIn>
        ))}

      </div>

    </section>
  );
}

export default Features;