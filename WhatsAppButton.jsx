import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/201016295024";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with me on WhatsApp"
    >
      <span className="wa-float__tooltip">Chat with me</span>
      <FaWhatsapp size={26} />
    </a>
  );
}
