import React from 'react';
import "./footer.css" ;
import instagramLogo from "./instagram.png";
import whatsappLogo from "./whatsapp.png";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/mettusss/', '_blank');
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = encodeURIComponent("Holaa estuve mirando su pagina web, y me encantan sus productos, los felicito ❤️");
    const whatsappLink = `https://api.whatsapp.com/send?phone=1168028555&text=${whatsappMessage}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <p>Quiénes somos</p>
          <p>Aterrizamos en Bariloche!</p>
        </div>
        <div className="footer-social">
          <div className="footer-instagram" onClick={handleInstagramClick}>
          <img src={instagramLogo} alt="Instagram" />
          </div>
          <div className="footer-whatsapp" onClick={handleWhatsAppClick}>
          <img src={whatsappLogo} alt="WhatsApp" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
