import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">
              Let’s <span>connect</span>
            </h2>
            <p className="contact__lede">
              Excited to take on new projects and collaborate. Tell me about your app idea — Android, iOS, or both.
            </p>

            <div className="contact__grid">
              <a className="contact__item" href={`mailto:${PROFILE.email}`}>
                <span>Email</span>
                <strong>{PROFILE.email}</strong>
              </a>
              <a className="contact__item" href={PROFILE.social.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>Usama Saeed</strong>
              </a>
              <div className="contact__item">
                <span>Location</span>
                <strong>{PROFILE.location}</strong>
              </div>
            </div>

            <a className="btn btn--fill btn--lg" href={`mailto:${PROFILE.email}`}>
              Send message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
