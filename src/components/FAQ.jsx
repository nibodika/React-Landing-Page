import { useState } from "react";
import { faqs } from "../data/data";
import "../styles/faq.css";
import FadeIn from "./FadeIn";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">

      <div className="faq-title">

        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to the most common questions about NovaUI.
        </p>

      </div>

<FadeIn>
      <div className="faq-container">

        {faqs.map((item, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{item.question}</span>

              <span>
                {openIndex === index ? "−" : "+"}
              </span>

            </button>

            {openIndex === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

      </FadeIn>

    </section>
  );
}

export default FAQ;