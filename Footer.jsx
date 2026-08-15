import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const WHATSAPP_URL = "https://wa.me/201016295024";
const GITHUB_URL = "https://github.com/USERNAME";
const LINKEDIN_URL = "https://linkedin.com/in/USERNAME";
const EMAIL = "your.email@example.com";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">© 2026 Islam Sherif. Built with React &amp; JavaScript.</p>

        <div className="footer__social">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={18} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <HiOutlineMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
