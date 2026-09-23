import { Instagram, Music2, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/modi.col',
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'TikTok',
      icon: Music2,
      url: 'https://www.tiktok.com/@modi.estudio',
      color: 'hover:text-accent'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://api.whatsapp.com/send/?phone=573208943538&text&type=phone_number&app_absent=0',
      color: 'hover:text-[#25D366]'
    }
  ];

  return (
    <footer className="bg-primary text-white py-8 border-t border-accent/20">
      <div className="container-max px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-8 w-8" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/70">
            <p className="font-roboto-medium">
              © {new Date().getFullYear()} MODI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;