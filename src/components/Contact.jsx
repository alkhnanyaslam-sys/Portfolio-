import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const WHATSAPP_URL = "https://wa.me/201016295024";
const GITHUB_URL = "https://github.com/USERNAME";
const LINKEDIN_URL = "https://linkedin.com/in/USERNAME";
const EMAIL = "your.email@example.com";

const channels = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "01016295024",
    action: "Chat on WhatsApp",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    value: EMAIL,
    action: "Send an Email",
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@USERNAME",
    action: "View Profile",
    href: GITHUB_URL,
    external: true,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/in/USERNAME",
    action: "Connect",
    href: LINKEDIN_URL,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head contact__head">
          <div className="eyebrow">Get In Touch</div>
          <h2 className="section-title">Let's build something awesome</h2>
          <p className="section-sub">
            Have an idea, project, or collaboration in mind? Let's talk.
          </p>
        </div>

        <div className="contact__grid">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="glass contact-card"
            >
              <c.icon size={22} className="contact-card__icon" />
              <div className="contact-card__label">{c.label}</div>
              <div className="contact-card__value">{c.value}</div>
              <span className="contact-card__action">{c.action} →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
      }
