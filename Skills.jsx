import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { VscVscode } from "react-icons/vsc";
import { BsRobot, BsGearWideConnected, BsCpu } from "react-icons/bs";
import { FaTelegramPlane, FaPlug } from "react-icons/fa";
import { skillGroups } from "../data/skills.js";

const ICONS = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  React: SiReact,
  "Responsive Design": HiOutlineDeviceMobile,
  Python: SiPython,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  Vite: SiVite,
  "Artificial Intelligence": BsCpu,
  Automation: BsGearWideConnected,
  "AI-Powered Apps": BsRobot,
  "Telegram Bots": FaTelegramPlane,
  APIs: FaPlug,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Tech Stack</div>
          <h2 className="section-title">What I build with</h2>
          <p className="section-sub">
            The languages, tools, and concepts I reach for when turning an idea into something
            real.
          </p>
        </div>

        {skillGroups.map((group, gi) => (
          <div key={group.id} className="skills__group">
            <h3 className="skills__group-label">{group.label}</h3>
            <div className="skills__grid">
              {group.items.map((item, i) => {
                const Icon = ICONS[item.name] || BsCpu;
                return (
                  <motion.div
                    key={`${group.id}-${item.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: (gi * 0.05 + i * 0.05) % 0.4, ease: "easeOut" }}
                    className="glass skill-card"
                  >
                    <div className="skill-card__icon">
                      <Icon size={22} />
                    </div>
                    <div className="skill-card__name">{item.name}</div>
                    <div className="skill-card__desc">{item.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
