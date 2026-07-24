import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!project) {
      setPreview(null);
      return undefined;
    }

    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (preview) {
        setPreview(null);
        return;
      }
      onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, preview]);

  const links = project?.links || {};
  const shots = project?.screenshots?.filter(Boolean) || [];
  const isTv = project?.device === "tv";
  const previewIndex = preview != null ? shots.indexOf(preview) : -1;

  const showPrev = () => {
    if (previewIndex < 0 || shots.length < 2) return;
    setPreview(shots[(previewIndex - 1 + shots.length) % shots.length]);
  };

  const showNext = () => {
    if (previewIndex < 0 || shots.length < 2) return;
    setPreview(shots[(previewIndex + 1) % shots.length]);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal__panel"
            style={{ "--project-accent": project.accent || "#c8f531" }}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button className="modal__close" type="button" onClick={onClose} aria-label="Close">
              ×
            </button>

            <div className="modal__hero">
              {project.logo ? (
                <img src={project.logo} alt="" className="modal__logo" />
              ) : (
                <span className="modal__logo-fallback">{project.name.slice(0, 2)}</span>
              )}
              <div>
                <p className="modal__platform">
                  {project.platform} · {project.category}
                </p>
                <h3 id="modal-title" className="modal__title">
                  {project.name}
                </h3>
                <p className="modal__tagline">{project.tagline}</p>
              </div>
            </div>

            <p className="modal__desc">{project.description}</p>

            {shots.length > 0 && (
              <div className={`modal__shots ${isTv ? "modal__shots--tv" : ""}`}>
                {shots.map((src) => (
                  <button
                    key={src}
                    type="button"
                    className="modal__shot-btn"
                    onClick={() => setPreview(src)}
                    aria-label={`Preview ${project.name} screenshot`}
                  >
                    <img src={src} alt={`${project.name} screenshot`} className="modal__shot" />
                  </button>
                ))}
              </div>
            )}

            <div className="modal__stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="modal__actions">
              {links.appStore && (
                <a className="btn btn--fill" href={links.appStore} target="_blank" rel="noreferrer">
                  App Store
                </a>
              )}
              {links.playStore && (
                <a className="btn btn--fill" href={links.playStore} target="_blank" rel="noreferrer">
                  Play Store
                </a>
              )}
              {links.live && (
                <a className="btn btn--ghost" href={links.live} target="_blank" rel="noreferrer">
                  Website
                </a>
              )}
              <button className="btn btn--ghost" type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {preview && (
              <motion.div
                className="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPreview(null)}
                role="dialog"
                aria-modal="true"
                aria-label="Screenshot preview"
              >
                <button
                  className="lightbox__close"
                  type="button"
                  onClick={() => setPreview(null)}
                  aria-label="Close preview"
                >
                  ×
                </button>

                {shots.length > 1 && (
                  <>
                    <button
                      className="lightbox__nav lightbox__nav--prev"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        showPrev();
                      }}
                      aria-label="Previous screenshot"
                    >
                      ‹
                    </button>
                    <button
                      className="lightbox__nav lightbox__nav--next"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        showNext();
                      }}
                      aria-label="Next screenshot"
                    >
                      ›
                    </button>
                  </>
                )}

                <motion.img
                  key={preview}
                  src={preview}
                  alt={`${project.name} preview`}
                  className={`lightbox__img ${isTv ? "lightbox__img--tv" : ""}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                />

                {shots.length > 1 && (
                  <p className="lightbox__count">
                    {previewIndex + 1} / {shots.length}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
