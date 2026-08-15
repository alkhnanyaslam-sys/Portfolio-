import { motion } from "framer-motion";

const stats = [
  { value: "01+", label: "Real-world project concepts" },
  { value: "04+", label: "Core technologies" },
  { value: "∞", label: "Ideas to build" },
  { value: "24/7", label: "Learning & building mindset" },
];

export default function Highlights() {
  return (
    <section className="section highlights">
      <div className="container highlights__grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="glass highlight-card"
          >
            <div className="highlight-card__value gradient-text">{s.value}</div>
            <div className="highlight-card__label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
