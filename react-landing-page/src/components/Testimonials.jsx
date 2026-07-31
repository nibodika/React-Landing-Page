import { testimonials } from "../data/data";
import "../styles/testimonials.css";
import FadeIn from "./FadeIn";
function Testimonials() {
  return (
    <section className="testimonials" id="reviews">

      <div className="testimonial-title">

        <span>TESTIMONIALS</span>

        <h2>What Our Clients Say</h2>

        <p>
          Trusted by developers, startups and businesses
          around the world.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (
        <FadeIn key={index}>
          <div className="testimonial-card" key={index}>

            <div className="stars">
              {"⭐".repeat(item.rating)}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="user">

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h4>{item.name}</h4>

                <span>{item.role}</span>

              </div>

            </div>

          </div>

          </FadeIn>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;