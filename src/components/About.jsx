import { motion } from "framer-motion";

const points = [
  "Frontend development with React & JavaScript",
  "Exploring AI and intelligent applications",
  "Building automation tools & Telegram bots",
  "Shipping real, working software — not just theory",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="eyebrow">About Me</div>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">interactive experiences.</span>
          </h2>
          <p className="about__text">
            I'm a young, ambitious developer focused on programming, modern web development, and
            the technologies shaping what comes next. My work centers on React and JavaScript,
            but I'm just as drawn to artificial intelligence and automation — building Telegram
            bots, connecting APIs, and experimenting with AI-powered features that solve real
            problems.
          </p>
          <p className="about__text">
            I enjoy learning new technologies for their own sake, then turning that knowledge into
            useful digital products instead of leaving it as theory. Every project is a chance to
            get closer to building real-world software that people actually use.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass about__card"
        >
          <div className="about__card-label">Currently exploring</div>
          <ul className="about__list">
            {points.map((p) => (
              <li key={p}>
                <span className="about__list-dot" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
      }
