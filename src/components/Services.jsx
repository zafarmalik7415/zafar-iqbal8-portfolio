import { motion } from "framer-motion";
import { SERVICES } from "../data/portfolio";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Services</p>
          <h2 className="section__title">
            Designing solutions customized to <span>meet your requirements</span>
          </h2>
        </div>

        <div className="services">
          {SERVICES.map((item, i) => (
            <motion.article
              key={item.title}
              className="service"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <span className="service__num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
