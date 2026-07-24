import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Skills</p>
          <h2 className="section__title">
            My <span>skills</span>
          </h2>
          <p className="section__lead">
            A focused stack for building, shipping, and scaling mobile products — from architecture to App Store release.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <motion.article
              key={group.group}
              className="skill-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="skill-card__head">
                <span className="skill-card__index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{group.group}</h3>
              </div>
              <p className="skill-card__desc">{group.desc}</p>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
