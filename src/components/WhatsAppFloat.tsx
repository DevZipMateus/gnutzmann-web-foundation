
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "5353984024960"; // Número da empresa
  const message = "Olá! Gostaria de mais informações sobre os serviços da Gnutzmann Contabilidade.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float w-14 h-14 flex items-center justify-center text-white hover:text-white"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
