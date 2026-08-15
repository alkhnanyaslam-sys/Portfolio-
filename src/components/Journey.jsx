import { motion } from "framer-motion";

const steps = [
  {
    year: "2026",
    title: "Started My Development Journey",
    text: "Focused on programming, web development, and computer science.",
  },
  {
    year: "2026 → Present",
    title: "Frontend & AI",
    text: "Learning JavaScript, React, Python, AI, automation, and modern development tools.",
  },
  {
    year: "Next",
    title: "Building Real-World Products",
    text: "Working toward building useful applications, intelligent systems, and scalable software products.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">My Journey</div>
          <h2 className="section-title">Where it started, where it's going</h2>
        </div>

        <div className="journey__timeline">
          <div className="journey__line" aria-hidden="true" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="journey__item"
            >
              <div className="journey__dot" aria-hidden="true" />
              <div className="glass journey__card">
                <span className="journey__year">{s.year}</span>
                <h3 className="journey__title">{s.title}</h3>
                <p className="journey__text">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
