import { pricingPlans } from "../data/data";
import "../styles/pricing.css";
import FadeIn from "./FadeIn";
function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <div className="pricing-title">

        <span>PRICING</span>

        <h2>Choose Your Plan</h2>

        <p>
          Flexible pricing plans for individuals,
          startups and growing businesses.
        </p>

      </div>

      <div className="pricing-grid">

        {pricingPlans.map((plan, index) => (
         <FadeIn key={index}>
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={index}
          >

            {plan.popular && (
              <div className="badge">
                Most Popular
              </div>
            )}

            <h3>{plan.title}</h3>

            <h1>{plan.price}</h1>

            <p>{plan.description}</p>

            <ul>

              {plan.features.map((feature, i) => (

                <li key={i}>
                  ✅ {feature}
                </li>

              ))}

            </ul>

            <button>
              Get Started
            </button>

          </div>

          </FadeIn>

        ))}

      </div>

    </section>
  );
}

export default Pricing;