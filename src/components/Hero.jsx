import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import BackgroundFX from "./BackgroundFX.jsx";

const WHATSAPP_URL = "https://wa.me/201016295024";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <BackgroundFX />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero__badge"
        >
          <span className="hero__badge-dot" />
          Available for exciting projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="hero__hi"
        >
          Hi, I'm Islam Sherif <span className="hero__wave">👋</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hero__headline"
        >
          Frontend Developer <span className="gradient-text">&amp; AI Enthusiast</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hero__text"
        >
          I build modern web experiences, intelligent applications, automation tools, and
          interactive digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="hero__actions"
        >
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
