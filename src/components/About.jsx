import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <motion.div
          className="about__media"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={PROFILE.avatar} alt={PROFILE.name} />
        </motion.div>

        <div className="about__content">
          <p className="section__eyebrow">About</p>
          <h2 className="section__title">
            {PROFILE.experience} years of obsession with <span>organic growth</span> 
          </h2>
          <p className="about__text">{PROFILE.about}</p>

          <div className="about__facts">
            <div>
              <span>Location</span>
              <strong>{PROFILE.location}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Flutter · Android · iOS</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
