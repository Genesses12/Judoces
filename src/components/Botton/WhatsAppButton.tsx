import React from "react";
import "./WhatsAppButton.css";
import Whats from "../../assets/whassBotton.png";

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999";

  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={Whats} alt="WhatsApp" className="whatsapp-icon" />
        Faça seu pedido
      </a>
    </div>
  );
};

export default WhatsAppButton;
