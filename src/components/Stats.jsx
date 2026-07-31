import { stats } from "../data/data";
import "../styles/stats.css";
import FadeIn from "./FadeIn";
import CountUp from "react-countup";
function Stats() {
  return (
    <section className="stats">

      <div className="stats-heading">

        <span>OUR ACHIEVEMENTS</span>

        <h2>Trusted Around The World</h2>

        <p>
          Thousands of developers and businesses trust our platform
          to build fast, reliable, and beautiful applications.
        </p>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (
        <FadeIn key={index}>
          <div className="stat-card" key={index}>

            <h2>

{item.number === "10K+" && (
<CountUp end={10000} duration={3} separator="," />
)}

{item.number === "500+" && (
<CountUp end={500} duration={3} />
)}

{item.number === "99.9%" && (
<>
<CountUp end={99.9} duration={3} decimals={1} />%
</>
)}

{item.number === "24/7" && (
item.number
)}

</h2>

            <p>{item.label}</p>

          </div>

          </FadeIn>

        ))}

      </div>

    </section>
  );
}

export default Stats;