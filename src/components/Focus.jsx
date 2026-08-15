import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineChip, HiOutlineLightningBolt, HiOutlineCube } from "react-icons/hi";

const focusItems = [
  {
    icon: HiOutlineCode,
    title: "Web Development",
    text: "Building modern responsive websites and applications with React and JavaScript.",
  },
  {
    icon: HiOutlineChip,
    title: "Artificial Intelligence",
    text: "Exploring AI and integrating intelligent functionality into real-world applications.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Automation",
    text: "Creating bots and automated systems that solve practical problems.",
  },
  {
    icon: HiOutlineCube,
    title: "Real-World Projects",
    text: "Turning ideas into functional products instead of only learning theory.",
  },
];

export default function Focus() {
  return (
    <section className="section focus">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Current Focus</div>
          <h2 className="section-title">What I'm focusing on</h2>
        </div>

        <div className="focus__grid">
          {focusItems.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="glass focus-card"
            >
              <f.icon size={26} className="focus-card__icon" />
              <h3 className="focus-card__title">{f.title}</h3>
              <p className="focus-card__text">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
