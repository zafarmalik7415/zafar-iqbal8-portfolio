import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="hero__hello" variants={fade} initial="hidden" animate="show" custom={0}>
            Hey, I’m {PROFILE.firstName}
          </motion.p>

          <motion.h1 className="hero__title" variants={fade} initial="hidden" animate="show" custom={1}>
            {PROFILE.roleLead} <span>{"{"}{PROFILE.roleHighlight}{"}"}</span>
            <br />
            {PROFILE.roleRest}
            <span className="hero__cursor">_</span>
          </motion.h1>

          <motion.p className="hero__lede" variants={fade} initial="hidden" animate="show" custom={2}>
            {PROFILE.tagline}
          </motion.p>

          <motion.div className="hero__actions" variants={fade} initial="hidden" animate="show" custom={3}>
            <a className="btn btn--fill" href="#work">
              View my work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Let’s talk
            </a>
          </motion.div>

          <motion.div className="hero__stats" variants={fade} initial="hidden" animate="show" custom={4}>
            {PROFILE.highlights.map((item) => (
              <div key={item.label} className="hero__stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero__card">
            <img src={PROFILE.avatar} alt={PROFILE.name} className="hero__portrait" />
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
