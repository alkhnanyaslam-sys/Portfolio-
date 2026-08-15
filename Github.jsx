import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const GITHUB_URL = "https://github.com/USERNAME";

export default function Github() {
  return (
    <section className="section github">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass github__panel"
        >
          <div>
            <div className="eyebrow">Building in Public</div>
            <h2 className="section-title">Code, experiments &amp; continuous learning</h2>
            <p className="section-sub">
              Every project starts as a repository. Follow along as ideas turn into working code.
            </p>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary github__btn"
          >
            <FiGithub size={18} />
            View GitHub
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
