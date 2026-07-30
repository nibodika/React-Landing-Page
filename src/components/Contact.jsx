import "../styles/contact.css";
import FadeIn from "./FadeIn";
function Contact() {
  return (
    <section className="contact" id="contact">
    <FadeIn>
      <div className="contact-left">

        <span>CONTACT US</span>

        <h2>Let's Build Something Amazing Together</h2>

        <p>
          Have a project in mind? We'd love to hear from you.
          Send us a message and we'll get back to you as soon as possible.
        </p>

        <div className="contact-info">

          <div className="info-card">
            <h4>📧 Email</h4>
            <p>hello@novaui.com</p>
          </div>

          <div className="info-card">
            <h4>📞 Phone</h4>
            <p>+1 (123) 456-7890</p>
          </div>

          <div className="info-card">
            <h4>📍 Address</h4>
            <p>New York, USA</p>
          </div>

        </div>

      </div>

      </FadeIn>

      <FadeIn>
      <div className="contact-right">

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      </FadeIn>

    </section>
  );
}

export default Contact;