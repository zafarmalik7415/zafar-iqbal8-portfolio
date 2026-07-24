import { motion } from "framer-motion";
import { PROJECTS } from "../data/portfolio";

export default function Projects({ onSelect }) {
  return (
    <section className="section section--alt" id="work">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Projects</p>
          <h2 className="section__title">
            My recent <span>works</span>
          </h2>
        </div>

        <div className="banners">
          {PROJECTS.map((project, index) => {
            const shots = project.screenshots?.filter(Boolean) || [];
            const reverse = index % 2 === 1;
            const isTv = project.device === "tv";
            const frameClass = isTv ? "banner__tv" : "banner__phone";
            const groupClass = isTv ? "banner__tvs" : "banner__phones";
            const count = Math.min(shots.length, 3);

            return (
              <motion.article
                key={project.id}
                className={`banner ${reverse ? "banner--reverse" : ""} ${isTv ? "banner--tv" : ""}`}
                style={{ "--project-accent": project.accent || "#c8f531" }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="banner__content">
                  <div className="banner__meta">
                    <span>{project.category}</span>
                    <span>{project.platform}</span>
                  </div>

                  <div className="banner__brand">
                    {project.logo && <img src={project.logo} alt="" className="banner__logo" />}
                    <h3>{project.name}</h3>
                  </div>

                  <p className="banner__tagline">{project.tagline}</p>
                  <p className="banner__desc">{project.description}</p>

                  <div className="banner__stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="banner__actions">
                    <button type="button" className="btn btn--fill" onClick={() => onSelect(project)}>
                      View project
                    </button>
                    {project.links?.live && (
                      <a className="btn btn--ghost" href={project.links.live} target="_blank" rel="noreferrer">
                        Live site
                      </a>
                    )}
                    {project.links?.appStore && (
                      <a className="btn btn--ghost" href={project.links.appStore} target="_blank" rel="noreferrer">
                        App Store
                      </a>
                    )}
                    {project.links?.playStore && (
                      <a className="btn btn--ghost" href={project.links.playStore} target="_blank" rel="noreferrer">
                        Play Store
                      </a>
                    )}
                  </div>
                </div>

                <div className={`banner__visual ${isTv ? "banner__visual--tv" : ""}`}>
                  <div className="banner__glow" aria-hidden="true" />
                  {shots.length > 0 ? (
                    <div className={`${groupClass} ${groupClass}--${count}`}>
                      {shots.slice(0, 3).map((src, i) => (
                        <button
                          key={src}
                          type="button"
                          className={`${frameClass} ${frameClass}--${i + 1}`}
                          onClick={() => onSelect(project)}
                          aria-label={`${project.name} screenshot ${i + 1}`}
                        >
                          <span className={`${frameClass}-screen`}>
                            <img src={src} alt="" />
                          </span>
                          {isTv && <span className="banner__tv-stand" aria-hidden="true" />}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button type="button" className="banner__fallback" onClick={() => onSelect(project)}>
                      {project.logo && <img src={project.logo} alt="" />}
                      <span>{project.name}</span>
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
